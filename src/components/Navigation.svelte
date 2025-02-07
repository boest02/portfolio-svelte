<script lang="ts">
    import { Link } from "svelte-routing";

    export let links: Link[] = [];
    export let exclude: string[] = [];

    console.log("excludeList: ", exclude);

    type Link = {
        name: string,
        path: string
    }

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

    const trap = (e: Event) => {
        e.stopPropagation();
    }

</script>


<nav class="nav-bar">
    <div class="inner-wrapper">
        <button class="hamburger" tabindex="0" aria-label="Toggle navigation menu" on:click={clickNav} class:open={navOpen}>
            <div></div>
            <div></div>
            <div></div>
        </button>
        <div class="links" tabindex="0" on:click={clickNav} on:keydown={clickNav} aria-label="Page Links" role="menu">
            {#each links as link}
                {#if !exclude.includes(link.name)}
                    <Link to={link.path}>{link.name}</Link>
                {/if}
            {/each}
        </div>
    </div>
</nav>

<style lang="scss">
    .nav-bar {
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