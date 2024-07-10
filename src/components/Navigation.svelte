<script lang="ts">
    import { Link } from "svelte-routing";
    export let links = [];
</script>


<nav class="nav-bar">
    <div class="inner-wrapper">
        {#each links as link}
        <Link to={link.path}>{link.name}</Link>
        {/each}
    </div>
</nav>

<style lang="scss">
    .nav-bar {
        display: flex;
        align-items: center;
        width: 100vw;
        height: 80px;
        background-color: var(--nav-background-color);
        color: var(--nav-font-color);
        font-weight: 600;
        box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);

        .inner-wrapper {
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: fit-content;

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

    @media only screen and (max-width:480px) {
        .nav-bar {
            border: 3px solid magenta;
        }
    }
</style>