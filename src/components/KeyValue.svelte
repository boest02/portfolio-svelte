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
    :global(.key-value) {
        display: flex;
        align-items: end;
        gap: 5px;
        text-transform: capitalize;

        :global(dt) {
            font-weight: 800;
        }

        :global(dd) {

            &::before {
                content: ' :';
                padding-right: 5px;
            }
        }
        
        :global(dd > a) {
            color: blue;
            text-decoration: wavy;
        }
        
        :global(dd > a::after) {
            content: ' \261E';
            font-size: 125%;
        }
        
        :global(dd > a:hover) {
            color: red;
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
        :global(dl) {
            margin: 10px;
            flex-direction: column;

            :global(dd) {
                margin-left: 10px;
            }
        }
    }
</style>