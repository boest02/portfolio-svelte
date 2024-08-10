<script lang="ts">
    export let url = '';
    export let description = '';
</script>

<section class="iframe-wrapper">
    {#if description.length}
        <p class="iframe-description">{description}</p>
    {/if}    
    <iframe src="{url}"></iframe>
</section>

<style lang="scss">
    .iframe-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .iframe-description {
            margin: 15px 0 25px;
            width: 95%;
        }
        
        iframe {
            width: 95%;
            height: 800px;
        }
    }
</style>