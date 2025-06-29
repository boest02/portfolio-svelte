<script lang="ts">
    export let list: string[] = [];
    export let title: string = 'List';

    const commaSeparatedList = list.join(', ');

</script>

<div class="table-wrapper">
    <dl class="list">
        <dt>{title}</dt>
        <dd>{commaSeparatedList}</dd>
    </dl>
</div>

<style lang="scss">
    .table-wrapper {
        margin: 1rem 0;
        
        dl {
            display: grid;
            grid-template-columns: 1fr 4fr;

            dt {
                font-weight: bold;
            }

            dd {
                margin: 0;
                padding-left: 1rem;                
            }
        }
    }
</style>