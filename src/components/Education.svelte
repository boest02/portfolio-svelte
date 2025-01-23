<script lang="ts">
    import KeyValue from './KeyValue.svelte';
    import DateRange from './DateRange.svelte';
    export let data: { institution: string; studyType: string; area: string; endDate: string }[] = [];
</script>

<div class="education-wrapper block">
    <h2>Education:</h2>
    <div class="alignment-wrapper">
        {#each data as edu, index}
            <section>
                <h2>{edu.institution}</h2>
                <h4>{edu['studyType'] + ' ~ ' + edu['area']}</h4>
                <div>{(new Date(edu['endDate'])).toLocaleString("en-us", { month: "long", year: "numeric" })}</div>
            </section>
        {/each}
    </div>
</div>

<style lang="scss">
    .education-wrapper {
        border-radius: 10px;
        width: 95%;
        max-width: 1500px;
        min-width: 925px;
        margin: 10px auto;

        .alignment-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding-bottom: 15px;

            section {
                display: flex;
                gap: 20px;

                h2 {
                    font-weight: 700;
                    margin: 2px 10px;
                }
            }
        }

        @media only screen and (max-width:800px) {
            min-width: unset;

            .alignment-wrapper {
                flex-direction: column;

                section {
                    flex-direction: column;
                    width: 98%;

                    h4, div {
                        margin: 15px 2px 10px;
                    }
                }
            }
        }
    }
</style>