<script lang="ts">
    import KeyValue from './KeyValue.svelte';
    import DateRange from './DateRange.svelte';
    export let data = [];    
</script>

<fieldset class="education-wrapper">
    <legend>
        <h2>Education:</h2>
    </legend>
    <div class="alignment-wrapper">
        {#each data as edu, index}
        <section>
            <KeyValue key="School" value='<a href="{edu.url}" target="_blank" >{edu.institution}</a>' />
            <KeyValue key="Degree" value="{edu['studyType'] +  ' ~ ' + edu['area']}" />         
            <dl class="key-value">
                <dt>Dates</dt>
                <dd>
                    <DateRange start="{edu['startDate']}" end="{edu['endDate']}" />  
                </dd>
            </dl>
            
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
        width: 95%;
        max-width: 1500px;
        min-width: 925px;
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
            
            a {
                float: right;
                margin-right: 40px;
            }

        }

        @media only screen and (max-width:800px) {
            min-width: unset;

            .alignment-wrapper {
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