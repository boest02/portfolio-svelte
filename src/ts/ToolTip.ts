const _WIN = window;
const _DATA_ATTR_NAME = "data-info-anchor-title";
const _DATA_VAR_NAME = "infoAnchorTitle";
const _DATA_VAR_SIDE = "infoAnchorSide";
const _INFO_TIP_BACKDROP = "info-tip-backdrop";
const _INFO_TIP_DIALOG = "info-tip-dialog";
const _INFO_ANCHOR = ".info-anchor";
const _UNI_NAV_HEIGHT = 80;
const _MIN_SCROLL_DISTANCE = 200;

// create a logger code
const logger = window.console.log.bind(window.console, 'ToolTip: %s');

interface ClickPosition {
    top: number;
    left: number;
    width: number;
    height: number;
}

/**
 *
 * Class checking for clicks on InfoPopUp links and sending getting their position.
 * @class InfoPopUp
 * @author Stephen Boettcher <sboettcher@pch.com>
 *
 */
export default class ToolTip {
    private dialogBox: HTMLElement | null = null;
    private dialogBackdrop: HTMLElement | null = null;
    private currentElement: HTMLElement | null = null;
    private startingScrollY: number = 0;
    private scrollY: number = 0;
    private ySide: string = 'left'; // default value

    /**
     * Create InfoPopUp.
     */
    constructor() {
        // Use a Symbol to create a unique property key
        const toolTipLoadedKey = Symbol.for('toolTipLoaded');

        if ((window as any)[toolTipLoadedKey]) {
            return;
        } else {
            (window as any)[toolTipLoadedKey] = true;
        }

        // get the dialog and backdrop, disable if they are not on page
        this.dialogBox = document.getElementById(_INFO_TIP_DIALOG);
        this.dialogBackdrop = document.getElementById(_INFO_TIP_BACKDROP);
        if(!this.dialogBox || !this.dialogBackdrop) {
            logger("No dialog or backdrop found");
            return;
        } else {
            logger("dialog and backdrop found, feature enabled.");
        }

        // detect is page has any info pop up links (informational)
        logger(`links found ${document.querySelectorAll(`[${_DATA_ATTR_NAME}]`).length} on page`);

        // listen for clicks on the body to detect info pop up link clicks
        document.body.addEventListener( "click", this.eventHandler );

        // set to clicked element
        this.currentElement = null;

        //record scroll postion on click to calculate scroll distance
        this.startingScrollY = 0;
    }


    /**
     * Start listeners for close conditions and repositioning
     * @public
     */
    startListening() {
        if (!this.dialogBox || !this.dialogBackdrop) return;

        // close on clicks backdrop or dialog X ...
        this.dialogBackdrop.addEventListener("click", this.closeAll);
        const closeIcon = this.dialogBox.querySelector(".close-icon");
        if (closeIcon) {
            closeIcon.addEventListener("click", this.closeAll);
        }

        // listen for window resize to reset position
        _WIN.addEventListener("resize", this.repositionDialog);

        // listen for scroll and close if scroll too far
        _WIN.addEventListener("scroll", this.checkScroll);
    }

    /**
     * Remove listeners.
     * @public
     */
    stopListening() {
        if (!this.dialogBox || !this.dialogBackdrop) return;

        _WIN.removeEventListener("resize", this.repositionDialog);
        _WIN.removeEventListener("scroll", this.repositionDialog);
        this.dialogBackdrop.removeEventListener("click", this.closeAll);

        const closeIcon = this.dialogBox.querySelector(".close-icon");
        if (closeIcon) {
            closeIcon.removeEventListener("click", this.closeAll);
        }
    }

    /**
     * reset InfoPopUp, variables and listeners
     * @public
     */
     reset() {
        this.stopListening();
        this.currentElement = null;
        this.scrollY = 0;
     }

    /**
     * close the dialog and reset
     * @public
     */
    closeAll = () => {
        if (!this.dialogBox || !this.dialogBackdrop) return;

        logger("close");
        this.dialogBox.classList.remove("show-positioned");
        this.dialogBackdrop.classList.remove("show-positioned");
        this.reset();
    };

    /**
     * scroll handler to check distance from starting point
     * @public
     */
    checkScroll = () => {
        if (!this.dialogBox) return;

        let minScrollDistance = this.dialogBox.offsetHeight > _MIN_SCROLL_DISTANCE ? this.dialogBox.offsetHeight : _MIN_SCROLL_DISTANCE;
        // if scrolling, close when scroll too far
        Math.abs(window.scrollY - this.startingScrollY) > minScrollDistance && this.closeAll();
    };

    /**
     * Get the position for the dialog
     * @public
     */
     getPositionRelativeToClick(clickPosition: ClickPosition) {
        if (!this.dialogBox) return { x: 0, y: 0 };

        let position = { x: 0, y: 0 };
        let offsetAboveClick = Math.max(0, clickPosition.top - this.dialogBox.offsetHeight);

        // adjusted for uninav height
        if(offsetAboveClick > _UNI_NAV_HEIGHT) {
            logger("above", (clickPosition.top + window.scrollY) - this.dialogBox.offsetHeight);
            position.x = (clickPosition.top + window.scrollY) - this.dialogBox.offsetHeight;
        } else {
            logger("below", Math.max(0, clickPosition.top + window.scrollY + clickPosition.height), clickPosition.height);
            position.x = Math.max(0, clickPosition.top + window.scrollY + clickPosition.height);
        }

        // set left or right of click depending on data attribute side
        position.y = this.ySide === 'right'
            ? clickPosition.left + clickPosition.width + 10
            : clickPosition.left - (this.dialogBox.offsetWidth + 10);

        return position;
     }

     /**
     * Set the dialog position
     * @public
     */
     setPosition(x: number, y: number) {
        if (!this.dialogBox) return;
        this.dialogBox.style.setProperty('--top-corner-offset', `${x}px`);
        this.dialogBox.style.setProperty('--left-corner-offset', `${y}px`);
     }

    /**
     * Reposition the dialog if the window is resized
     * @public
     */
    repositionDialog = () => {
        if (!this.currentElement) return;

        const infoIcon = this.currentElement.querySelector(".info-icon");
        if (!infoIcon) return;

        let clickPosition = infoIcon.getBoundingClientRect();
        let position = this.getPositionRelativeToClick(clickPosition);
        this.setPosition(position.x, position.y);
    };

    /**
     * Position the dialog based on the click location
     * TODO: Support left/right of click, current implementationis for left of the click
     * @public
     */
    positionDialog() {
        if (!this.currentElement || !this.dialogBox) return;

        const infoElement = this.currentElement.querySelector(".info-tip");
        const infoIcon = this.currentElement.querySelector(".info-icon");
        if (!infoElement || !infoIcon) return;

        // set here to get this into the flow of the document so when we get its height we get correct height
        this.dialogBox.style.display = "block";

        // use the click locations innerHtml to fill the dialog
        this.dialogBox.innerHTML = infoElement.innerHTML;

        // get position and position the dialog
        let position = this.getPositionRelativeToClick(infoIcon.getBoundingClientRect());
        this.setPosition(position.x, position.y);

        // show the dialog and backdrop
        this.dialogBox.classList.add("show-positioned");
        this.dialogBackdrop!.classList.add("show-positioned");

        // start listeners for close conditions and repositioning
        this.startListening();
    }

    /**
     * Check if click is an info pop up link
     * @private
     */
    eventHandler = (ev: MouseEvent) => {
        const target = ev.target as HTMLElement;
        if (target.dataset[_DATA_VAR_NAME]) {
            logger("clicked an info popup link", target.dataset[_DATA_VAR_NAME]);
            // if yes, set the current element and scroll position
            console.log("clicked an info popup link", {target, closest: target.closest(_INFO_ANCHOR)});
            this.currentElement = target.closest(_INFO_ANCHOR);
            this.startingScrollY = window.scrollY;
            this.ySide = target.dataset[_DATA_VAR_SIDE] || 'left';
            this.positionDialog();
        }
    };

}
