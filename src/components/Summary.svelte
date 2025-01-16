<script lang="ts">
    export let summary = '';
    export let title = 'Summary';
    export let homeLook = false;
</script>

<section class="summary-wrapper block" class:home-look="{homeLook}">
    <h2 class="title">{title}</h2>
    {#if Array.isArray(summary)}
        {#each summary as item}
            <p>{item}</p>
        {/each}
    {:else}
        <p>{summary}</p>
    {/if}
</section>

<style lang="scss">
    .summary-wrapper {
        p {
            text-indent: 20px;
            margin: 5px 10px;
            width: 95%;
        }

        &.home-look {
            display: flex;
            flex-direction: column;
            align-items: center;

            h2.title {
                font-size: 125%;
                font-weight: bold;
                color: rgb(28, 141, 164);
                align-self: flex-start;
                margin-bottom: 10px;
                border: unset;
            }

            p {
                width: 98%;
            }
        }
    }
</style>