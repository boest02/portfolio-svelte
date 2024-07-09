<script lang="ts">
    export let key = '';
    export let value = '';
    export let row = false;
</script>

<dl class="key-value type-{key}" class:row="{row}"> 
    <dt>{key}</dt>
    <dd>{@html value}</dd>
</dl>

<style lang="scss">
    dl {
        display: flex;
        gap: 5px;
        text-transform: capitalize;

        dt {
            text-decoration: underline;
        }

        dd {
            font-style: italic;

            &::before {
                content: ' -';
                padding-right: 5px;
            }
        }
        &.row {
            display: inline-block;
            text-indent: -10px;
            margin-left: 20px;            
            &>* {                
                display: inline;               
            }
        }
    }

    @media only screen and (max-width:480px) {
        dl {
            margin: 10px;
            flex-direction: column;

            dd {
                margin-left: 10px;
            }
        }
    }
</style>