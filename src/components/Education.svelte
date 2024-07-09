<script lang="ts">
    import KeyValue from './KeyValue.svelte';
    export let data = [];    
</script>

<fieldset class="education-wrapper block">
    <legend>
        <h2>Education:</h2>
    </legend>
    <div class="alignment-wrapper">
        {#each data as edu, index}        
            <section>
                {#each Object.keys(edu) as key}
                    <KeyValue key="{key}" value="{edu[key]}" />
                {/each}
            </section>
            {#if index === 0}
                <div class="vertical-rule"></div>
            {/if}
        {/each}
    </div>
</fieldset>

<style lang="scss">
    .education-wrapper {
        border: 5px double black;
        border-radius: 10px;
        width: 90%;
        margin: 10px auto;

        legend {
            margin-left: 20px;
            padding: 0 10px;

            h2 {
                font-weight: 700;
            }
        }

        .alignment-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            padding-bottom: 15px;

            .vertical-rule {
                width: 5px;
                margin: 10px 0 15px 0;
                border: 2px solid #000;
            }
            section {
                margin: 10px;
            }            
            
            @media only screen and (max-width:480px) {
                flex-direction: column;

                .vertical-rule {
                    margin: 10px auto;
                    height: 5px;
                    width: 90%;
                }                
            }
        }
    }
</style>
