<script lang="ts">
    export let list: string[] = [];

    const commaSeparatedList = list.join(', ');

</script>

<span class="list-item">{commaSeparatedList}</span>

<style lang="scss">
    .list-item {
        font-size: 85%;
    }
</style>