<script lang="ts">
    import { onMount, afterUpdate } from 'svelte';
    export let bubbles: { name: string; icon: string }[] = [];
    export let completed = 2;

    const count = bubbles.length;

    console.log(`count: ${count}, completed: ${completed}`);


    onMount(() => {
        let activeProgress: Element | null = document.querySelector('.active');
        activeProgress?.addEventListener('animationend', () => activeProgress?.nextElementSibling?.querySelector('.ball')?.classList.add('completed'));
    });

    afterUpdate(() => {
        let activeProgress: Element | null = document.querySelector('.active');
        activeProgress?.addEventListener('animationend', () => activeProgress?.nextElementSibling?.querySelector('.ball')?.classList.add('completed'));
    });
</script>

<div class="bubbles-wrapper">
    {#each bubbles as bubble, index}
        <span>
            <div class="ball"
                 class:first-bubble="{index === 0}"
                 class:completed="{index < completed || !index}"><div>{@html bubble.icon}</div></div>
            <div class="title">{bubble.name}</div>
        </span>
        {#if index < count - 1}
            <div class="progress"
                data-count="{index}"
                class:completed="{(index+1) < completed}"
                class:active="{(index+1) === completed}" >
            </div>
        {/if}
    {/each}
</div>

<style lang="scss">
    :root {
        --ball-text-color: white;
        --ball-color: #c6c6c6;
        --ball-completed-color: #ffa734;
        --progress-bar-color: #c6c6c6;
        --progress-bar-completed-color: #ffa734;
        --progress-bar-height: 10px;
    }

    .bubbles-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px auto 45px;
        width: fit-content;

        span {
            position: relative;

            .ball {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                color: var(--ball-text-color, grey);
                font-size: 1rem;
                font-weight: bold;
                background-color: var(--ball-color, grey);
                height: 35px;
                width: 35px;
                border-radius: 50%;
                margin-inline: -1px;

                & > div {
                    margin-bottom: 3px;
                }

                &.completed {
                    background-color: var(--ball-completed-color, green);
                    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
                }

                &.completed:not(.first-bubble){
                    animation: 1s 2 linear bubble-finish;
                }
            }

            .title {
                position: absolute;
                left: 50%;
                margin: 10px auto;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                transform: translate(-50%, 0);
            }
        }

        .progress {
            position: relative;
            background-color: var(--progress-bar-color, grey);
            height: var(--progress-bar-height);
            width: 75px;
            z-index: -1;

            &.active::after {
                content: "";
                position: absolute;
                inset: 0;
                height: var(--progress-bar-height);
                animation: 2s ease-in progress-forward;
                background: var(--progress-bar-completed-color, green);
            }

            &.completed {
                box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
            }

            &.completed::before {
                content: "";
                position: absolute;
                inset: 0;
                height: var(--progress-bar-height);
                background: var(--progress-bar-completed-color, green);
            }
        }
    }

    @media only screen and (max-width:480px) {
        .bubbles-wrapper {
            transform: scale(.8);
        }
    }

    @keyframes progress-forward {
        0% {
            width: 10%;
        }

        100% {
            width: 100%;
        }
    }

    @keyframes bubble-finish {
        0%, 100% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.3);
        }
    }

</style>