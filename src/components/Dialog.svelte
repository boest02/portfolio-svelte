<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';

    let innerComponent = null;
    let innerComponentData = {};
    let dialogElement: HTMLDialogElement | null = null;
    const dispatch = createEventDispatcher();

    // exported methos to open the dialog it takes
    // 2 parameters the component to render and the data to pass to the component
    export const open = (component, data) => {
        innerComponentData = data;
        innerComponent = component;
        dialogElement?.showModal();
        dispatch('open');
        document.body.style.overflow = 'hidden'; //stop scrolling underneath the dialog
    }

    // closes the dialog and dispatches a 'close' event to the parent component
    const closeDialog = () => {
        dialogElement?.close();
        innerComponentData = {};
        innerComponent = null;

        dispatch('close');
        document.body.style.overflow = 'initial'; // restore overflow setting
    };
</script>

<div class="my-dialog">
    <dialog bind:this={dialogElement}>
    <button on:click={closeDialog} title="close">X</button>
    {#if innerComponent != null}
        <svelte:component this={innerComponent} data={innerComponentData} />
    {/if}
    </dialog>
</div>

<style lang="scss">
    .my-dialog {
        dialog {
            background: white;
            width: 95%;
            max-width: var(--site-max-width);
            border: 2px solid rgb(28, 141, 164);
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            padding: 40px 25px 20px;
            margin: auto;
            overflow: auto;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */

            &::-webkit-scrollbar {
                display: none;
            }

            &>button {
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 1rem;
                font-weight: 700;
                color: #000;
                outline: 1.5px solid #000;
                padding: 1px 5px;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);

                &:hover {
                    background-color: rgb(28, 141, 164);
                    color: #fff;
                }
            }

            &::backdrop {
                background-image: linear-gradient(45deg,
                        #000,
                        rgb(28, 141, 164),
                        #000);
                opacity: 0.85;
            }

            @media (max-width: 700px) {
                padding-inline: 10px;
            }
        }
    }
</style>