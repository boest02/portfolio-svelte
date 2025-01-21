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
        align-items: baseline;
        gap: 10px;
        width: 100%;

        h3 {
            font-weight: 700;
            font-size: 90%;
        }

        dt {
            flex-basis: 100%;
        }

        dd {
            font-style: italic;
            text-wrap: nowrap;
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