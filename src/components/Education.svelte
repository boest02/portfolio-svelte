<script lang="ts">
    import KeyValue from './KeyValue.svelte';
    import DateRange from './DateRange.svelte';
    export let data: {
        institution: string;
        studyType: string;
        area: string;
        endDate: string;
        location: string;
    }[] = [];
</script>

<div class="education-wrapper block">
    <h2>Education:</h2>
    <div class="alignment-wrapper">
        {#each data as edu, index}
            <section>
                <h2>{edu.institution}, <span>{edu.location}</span></h2>
                <h4>Completed {edu['studyType'] + '; Major ' + edu['area']}</h4>
            </section>
        {/each}
    </div>
</div>

<style lang="scss">
    .education-wrapper {

        .alignment-wrapper {
            margin-inline-start: 10px;
            padding-bottom: 15px;

            section {
                display: flex;
                flex-direction: column;
                gap: 10px;

                h2 {
                    font-weight: 700;

                    span {
                        font-weight: 400;
                    }
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