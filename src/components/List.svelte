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
        &ul {
            margin: 10px 45px 20px;
        }
    }
</style>