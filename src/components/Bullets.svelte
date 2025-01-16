<script lang="ts">
    export let list = [];
</script>

<div class="bullets-wrapper">
    {#each list as item}
    <div class="list-item">{item}</div>
    {/each}
</div>

<style lang="scss">
    .bullets-wrapper {
        display: flex;
        flex-direction: column;
        margin: 10px 20px 20px;

        .list-item {
            display: list-item;
            margin-bottom: 5px;
        }
    }
</style>