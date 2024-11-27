<script context="module">
    import ToolTip from "../js/ToolTip.js"
    import help_outline from "../images/help_outline.svg"
    import close_icon from "../images/close-icon.svg"

    console.log('pop up loaded');

</script>

<script lang="ts">
    import { onMount } from 'svelte';

    export let header = "Header Text";
    export let position = "right";
    export let logo = help_outline;


    onMount(() => {
        let toolTip = new ToolTip();
    });
</script>

<div class="info-anchor">
    <div class="element-wrapper">
        <slot name="element"></slot>
        <img loading="lazy"
             data-info-anchor-title="{header}"
             data-info-anchor-side="{position}"
             class="info-icon"
             src="{logo}"
             alt="info icon" />
    </div>
    <div class="info-tip">
        <div class="header">
            <img loading="lazy" class="info-icon" src="{logo}" alt="info icon" />
            <h3>{header}</h3>
            <img loading="lazy" class="close-icon" src="{close_icon}" alt="close icon" />
        </div>
        <div class="content-area">
            <slot name="tip-content"></slot>
        </div>
    </div>
</div>

<style lang="scss">
    .info-anchor {
        .element-wrapper {
            position: relative;
            width: fit-content;

            .info-icon {
                width: 25px;
                height: 25px;
                cursor: pointer;
                position: absolute;
                top: -25px;
                right: -25px;
                border-radius: 50%;
            }
        }

        &>.info-tip {
            display: none;
        }
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        cursor: default;
        position: relative;

        .info-icon {
            height: 30px;
            width: 30px;
        }

        .close-icon {
            position: absolute;
            top: -5px;
            right: -5px;
            height: 20px;
            width: 20px;
        }

        h3 {
            font-family: poppins, sans-serif;
            font-size: 20px;
            font-weight: 800;
            text-transform: capitalize;
        }

        .close-icon {
            cursor: pointer;
        }
    }
</style>