<script>
    export let items = [];
    export let activeTabValue = 1;

    const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<ul>
    {#each items as item}
        <li class={activeTabValue===item.value ? 'active' : '' }>
            <span on:click={handleClick(item.value)}>{item.label}</span>
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

<style lang="scss">
    .box {
        margin-bottom: 10px;
        padding: 40px;
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
            
            span {
                border: 1px solid transparent;
                border-top-left-radius: 0.45rem;
                border-top-right-radius: 0.45rem;
                display: block;
                padding: 0.5rem 1rem;
                cursor: pointer;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, .2);
                margin: 0 3px 0 0;
                overflow: hidden;
                
                &:hover {
                    outline: 1px solid gray;
                }                
            }
            
            &.active {
                span {
                    color: #000;
                    font-weight: 600;
                    background-color: rgba(0, 0, 0, .3);
                    font-style: italic;
                    border-bottom: 1px gray solid;             
                }   
            }
        }
    }
    
</style>