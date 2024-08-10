<script lang="ts">
    export let summary = '';
    export let title = 'Summary';
</script>

<section class="summary-wrapper block">
    <h2>{title}:</h2>
    <p>{@html summary}</p>
</section>

<style>
    .summary-wrapper p {
        text-indent: 20px;
        margin: 5px 10px;
    }
</style>