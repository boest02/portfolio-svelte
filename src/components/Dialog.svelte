<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
    export let list: string[] = [];

    const dispatch = createEventDispatcher();

    const closeDialog = () => {
        dialogElement?.close();
        console.log('dispatch close');
        dispatch('close');
    }


    let dialogElement: HTMLDialogElement | null = null;

    onMount(() => {
        // content here
        dialogElement?.showModal();
    });
</script>

<div class="my-dialog">
    <dialog bind:this={dialogElement} on:click={(evt)=>console.log(evt?.target)}>
    <button on:click={closeDialog} title="close">X</button>
        <slot></slot>
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
            position: relative;

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