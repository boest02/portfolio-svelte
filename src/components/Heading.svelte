<script lang="ts">
    import DateRange from './DateRange.svelte';
    export let title = '';
    export let start = '';
    export let end = '';
</script>

<dl class="heading-wrapper">
    <dt>
        <h3>{title}</h3>
    </dt>
    <dd>
        <DateRange {start} {end} />   
    </dd>
     
</dl>

<style lang="scss">
    .heading-wrapper {

        display: flex;
        flex-direction: row;
        gap: 10px;
        margin: 10px 15px;

        h3 {
            font-weight: 700;
        }

        dd {
            font-style: italic;
        }

        @media only screen and (max-width:480px) {
            flex-direction: column;
            gap: 5px;

            dd {
                margin-left: 5px;
            }
        }

    }
</style>