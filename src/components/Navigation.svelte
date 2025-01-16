<script lang="ts">
    import { Link } from "svelte-routing";

    export let links = [];
    export let sticky = false;

    console.log("sticky:", sticky);

    let navOpen = false;
    let optOpen = false;

    const clickNav = () => {
        console.log("clickNav", navOpen);
        navOpen = !navOpen;
    }

    const clickOpt = () => {
        console.log("clickOptions", optOpen);
        optOpen = !optOpen;
    }

    const trap = (e) => {
        e.stopPropagation();
    }

</script>


<nav class="nav-bar" class:sticky={sticky}>
    <div class="inner-wrapper">
        <button class="hamburger" aria-label="Toggle navigation menu" on:click={clickNav} class:open={navOpen}>
            <div></div>
            <div></div>
            <div></div>
        </button>
        <div class="links" on:click={clickNav}>
            {#each links as link}
            <Link to={link.path}>{link.name}</Link>
            {/each}
        </div>
        <div class="options-shelf" class:open={optOpen} on:click={clickOpt}>
            <div class="items" on:click={trap}>
                <label for="sticky">Anchor</label>
                <input type="checkbox" name="sticky" id="sticky-option" bind:checked={sticky} />
            </div>
        </div>
    </div>
</nav>

<style lang="scss">
    .nav-bar {
        &.sticky {
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .inner-wrapper {
            display: flex;
            align-items: center;
            width: 100vw;
            height: var(--nav-bar-height);
            background-color: var(--nav-background-color);
            color: var(--nav-font-color);
            font-weight: 600;
            box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);

            .hamburger {
                display: none;
            }

            .links {
                display: flex;
                justify-content: space-around;
                width: 100%;
                height: fit-content;
                position: relative;

                :global(a) {
                    text-decoration: none;
                    color: var(--nav-font-color);
                    border-bottom: 2.5px solid transparent;
                }

                :global(a:hover) {
                    border-bottom-color: var(--nav-font-color);
                }
            }

            .options-shelf {
                border: .3px solid lightblue;
                border-radius: 5px 0 0 5px;
                width: 30px;
                height: calc(var(--nav-bar-height) - 4px);
                justify-self: end;
                position: absolute;
                right: 0;
                top: 2px;
                bottom: 2px;
                background: inherit;

                &::before {
                    content: 'options';
                    position: absolute;
                    rotate: -90deg;
                    font-size: 12px;
                    top: 0;
                    left: 5px;
                    bottom: 0;
                }

                .items {
                    display: none;

                    label {
                        font-size: 60%;
                    }
                }

                &:hover {
                    cursor: pointer;
                    margin-right: 5px;

                    &::before {
                        font-weight: bold;
                    }
                }

                &.open {
                    width: 100px;

                    &:hover {
                        margin-right: -5px;
                    }

                    .items {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border: .5px solid lightblue;
                        margin-left: 20px;
                        height: 100%;
                    }

                }
            }
        }
    }

    @media only screen and (max-width:480px) {
        .nav-bar .inner-wrapper {
            font-size: 80%;

            .hamburger {
                display: grid;
                place-content: center;
                width: var(--nav-height);
                height: var(--nav-height);
                background-color: transparent;

                &>div {
                    width: 30px;
                    height: 3px;
                    margin: 3px 0;
                    border: 1px solid #fff;
                    border-radius: 5px;
                    transition: all 0.3s ease-in-out;
                }

                &.open {
                    rotate: 45deg;
                    margin-top: -15px;
                    margin-left: 10px;

                    &>div:not(:first-of-type, :last-of-type) {
                        opacity: 0;
                    }

                    &>div:first-of-type {
                        rotate: 90deg;
                        transform: translateX(18px);
                    }
                }


            }

            .hamburger+.links {
                opacity: 0;
                height: 0;
                transition: all 0.3s ease-in-out;

                :global(a) {
                    display: none;
                }
            }

            .hamburger.open+.links {
                display: flex;
                opacity: 1;
                position: absolute;
                left: 0;
                top: var(--nav-height);
                flex-direction: column;
                padding: 10px;
                width: fit-content;
                height: fit-content;
                background-color: var(--nav-background-color);
                z-index: 1000;

                &> :global(*) {
                    padding: 10px 2px;
                }

                :global(a) {
                    display: block;
                }
            }
        }
    }
</style>