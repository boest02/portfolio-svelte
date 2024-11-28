<script lang="ts">
    export let url = '';
    export let description = '';
    export let title = 'iframe';
</script>

<section class="iframe-wrapper">
    {#if description.length}
        <p class="iframe-description">{description}</p>
    {/if}
    <iframe title="{title}"
            src="{url}"
            loading="lazy"
            frameborder="0"></iframe>
</section>

<style lang="scss">
    .iframe-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .iframe-description {
            margin: 15px auto 25px;
        }

        iframe {
            height: 800px;
        }
    }
</style>