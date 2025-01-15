<script lang="ts">
    export let list = [];
</script>

<ul class="bullets-wrapper">
    {#each list as item}
    <li>{item}</li>
    {/each}
</ul>

<style lang="scss">
    .bullets-wrapper {
        margin: 10px 30px 20px;
    }
</style>