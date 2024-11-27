
const _WIN = window;
const _DATA_ATTR_NAME = "data-info-anchor-title";
const _DATA_VAR_NAME = "infoAnchorTitle";
const _DATA_VAR_SIDE = "infoAnchorSide";
const _INFO_TIP_BACKDROP = "info-tip-backdrop";
const _INFO_TIP_DIALOG = "info-tip-dialog";
const _INFO_ANCHOR = ".info-anchor";
const _UNI_NAV_HEIGHT = 60;
const _MIN_SCROLL_DISTANCE = 200;

// create a logger code
const logger = window.console.log.bind(window.console, 'ToolTip: %s');

/**
 *
 * Class checking for clicks on InfoPopUp links and sending getting their position.
 * @class InfoPopUp
 * @author Stephen Boettcher <sboettcher@pch.com>
 *
 */
export default class ToolTip {

    /**
     * Create InfoPopUp.
     */
    constructor() {

        if(_WIN?.toolTipLoaded) {
            return;
        } else {
            _WIN.toolTipLoaded = true;
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
        // close on clicks backdrop or dialog X ...
        this.dialogBackdrop.addEventListener( "click", this.closeAll );
        this.dialogBox.querySelector(".close-icon") && this.dialogBox.querySelector(".close-icon").addEventListener( "click", this.closeAll );

        // listen for window resize to reset position
        _WIN.addEventListener( "resize", this.repositionDialog ); // resize window

        // listen for scroll and close if scroll too far
        _WIN.addEventListener( "scroll", this.checkScroll ); // scroll window
    }

    /**
     * Remove listeners.
     * @public
     */
    stopListening() {
        _WIN.removeEventListener( "resize", this.repositionDialog); // remove resize window
        _WIN.removeEventListener( "scroll", this.repositionDialog); // remove scroll window
        this.dialogBackdrop.removeEventListener( "click", this.closeAll); // remove click backdrop
        this.dialogBox.querySelector(".close-icon") && this.dialogBox.querySelector(".close-icon").removeEventListener( "click", this.closeAll); //remove click dialog
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
        let minScrollDistance = this.dialogBox.offsetHeight > _MIN_SCROLL_DISTANCE ? this.dialogBox.offsetHeight : _MIN_SCROLL_DISTANCE;
        // if scrolling, close when scroll too far
        Math.abs(window.scrollY - this.startingScrollY) > minScrollDistance && this.closeAll();
    };

    /**
     * Get the position for the dialog
     * @public
     */
     getPositionRelativeToClick(clickPosition) {
        let position = {};
        let offsetAboveClick = Math.max(0, clickPosition.top - this.dialogBox.offsetHeight);

        // adjusted for uninav height
        if(offsetAboveClick > _UNI_NAV_HEIGHT) {
            logger("above", (clickPosition.top + window.scrollY) - this.dialogBox.offsetHeight);
            position.x = (clickPosition.top + window.scrollY) - this.dialogBox.offsetHeight;
        } else {
            logger("below", Math.max(0, clickPosition.top + window.scrollY + clickPosition.height));
            position.x =  Math.max(0, clickPosition.top + window.scrollY + clickPosition.height);
        }

        // set left or right of click depending on data attribute side
        position.y = this.ySide === 'right' ? clickPosition.left + clickPosition.width + 10 : clickPosition.left - this.dialogBox.offsetWidth;

        return position;
     }

     /**
     * Set the dialog position
     * @public
     */
     setPosition(x, y) {
        this.dialogBox.style = `--top-corner-offset: ${x}px; --left-corner-offset: ${y}px;`;
     }

    /**
     * Reposition the dialog if the window is resized
     * @public
     */
    repositionDialog = () => {
        let clickPosition = this.currentElement.querySelector("img").getBoundingClientRect();
        let position = this.getPositionRelativeToClick(clickPosition);

        // set css custom properties to position dialog for desktop
        this.setPosition(position.x, position.y);
    };

    /**
     * Position the dialog based on the click location
     * TODO: Support left/right of click, current implementationis for left of the click
     * @public
     */
    positionDialog() {
        let infoElement = this.currentElement.querySelector(".info-tip");
        let clickPosition = this.currentElement.querySelector("img").getBoundingClientRect();

        // set here to get this into the flow of the document so when we ech for it's height we get correct height
        this.dialogBox.style.display = "block";

        // use the click locations innerHtml to fill the dialog
        this.dialogBox.innerHTML = infoElement.innerHTML;

        // get position and position the dialog
        let position = this.getPositionRelativeToClick(clickPosition);
        this.setPosition(position.x, position.y);

        // show the dialog and backdrop
        this.dialogBox.classList.add("show-positioned");
        this.dialogBackdrop.classList.add("show-positioned");

        // start listensers for close conditions and repositioning
        this.startListening();
    }

    /**
     * Check if click is an info pop up link
     * @private
     */
    eventHandler = (ev) => {
        if( ev.target.dataset[_DATA_VAR_NAME] ) {
            logger("clicked an info popup link", ev.target.dataset[_DATA_VAR_NAME]);
            // if yes, set the current element and scroll position
            console.log("clicked an info popup link", {target: ev.target, closest: ev.target.closest(_INFO_ANCHOR)});
            this.currentElement = ev.target.closest(_INFO_ANCHOR);
            this.startingScrollY = window.scrollY;
            this.ySide = ev.target.dataset[_DATA_VAR_SIDE];
            this.positionDialog();
        }
    };

}
