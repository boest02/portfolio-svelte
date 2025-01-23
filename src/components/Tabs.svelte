<script lang="ts">
    interface TabItem {
        label: string;
        value: number;
        component: any;  // or more specific component type if available
        url?: string;
        description?: string;
    }

    export let items: TabItem[] = [];
    export let activeTabValue = 1;

    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="tabs-wrapper">
    <ul>
        {#each items as item}
            <li class={activeTabValue===item.value ? 'active' : '' }>
                <button type="button" on:click={handleClick(item.value)}>{item.label}</button>
            </li>
        {/each}
    </ul>

    {#each items as item}
        {#if activeTabValue == item.value}
            <div class="box">
                <svelte:component this={item.component} url="{item.url}" description="{item.description}" />
            </div>
        {/if}
    {/each}
</div>

<style lang="scss">
    .box {
        margin-bottom: 10px;
        padding: 5px;
        border: 3px solid var(--nav-background-color);
        border-radius: 0 0 .5rem .5rem;
        border-top: 0;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        border-bottom: 1px solid var(--nav-background-color);

        li {
            margin-bottom: -1px;

            button {
                border: 1px solid transparent;
                border-top-left-radius: 0.45rem;
                border-top-right-radius: 0.45rem;
                display: block;
                padding: 0.5rem 1rem;
                cursor: pointer;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, .2);
                margin: 0 3px 0 0;
                overflow: hidden;
                background: none;

                &:hover {
                    outline: 1px solid gray;
                }
            }

            &.active button {
                color: #000;
                font-weight: 600;
                background-color: rgba(0, 0, 0, .3);
                font-style: italic;
                border-bottom: 1px gray solid;
            }
        }
    }

</style>