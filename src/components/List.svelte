<script lang="ts">
    export let list = [];
</script>

<ul class="list-wrapper">
    {#each list as item}
    <li>{item}</li>
    {/each}
</ul>

<style lang="scss">
    .list-wrapper {
        margin: 10px 30px 20px;
    }
</style>