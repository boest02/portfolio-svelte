<script lang="ts">
    import KeyValue from './KeyValue.svelte';
    export let data: { name: string; description: string }[] = [];
    console.log(data);
</script>

<section class="strengths-wrapper">
    <h2>Strenghts:</h2>
    {#each data as strength}
        <section>
            <KeyValue key="{strength['name']}" value="{strength['description']}" row="{true}" />
        </section>
    {/each}
</section>

<style lang="scss">
    .strengths-wrapper {
        text-transform: capitalize;
        max-width: 500px;
        margin-top: 25px;
        align-self: start;
        h2 {
            font-weight: 700;
            text-transform: uppercase;
        }
        section {
            margin: 10px;
        }
    }
</style>
