<script lang="ts">
    import Heading from './Heading.svelte';
    export let data = [];
</script>

<section class="experience-wrapper block">
    <h2>Experience:</h2>
    {#each data as exps}
        <section>
            {#each Object.keys(exps) as key}            
                {#if Array.isArray(exps[key])}                
                    {#each exps[key] as items}
                        <Heading title="{items['title']}" start="{items['start_date']}" end="{items['end_date']}" /> 
                        {#if Array.isArray(items['responsibilities'])}
                            <ul>                                
                                {#each items['responsibilities'] as resp}
                                    {#if Array.isArray(resp)}
                                        <ul>
                                            {#each resp as item}
                                                <li>{item}</li>
                                            {/each}
                                        </ul>
                                    {:else}
                                        <li>{resp}</li>
                                    {/if}
                                {/each}                                
                            </ul>
                        {/if}
                    {/each}
                {:else}
                    <h2>{exps[key]}</h2>
                {/if}
            {/each}
        </section>
    {/each}
</section>

<style lang="scss">
    .experience-wrapper {
        section {
            display: flex;
            flex-direction: column;
            margin: 15px;

            h2 {
                font-weight: 700;
            }

            &>ul {
                margin: 10px 45px 20px;

                &>ul {
                    margin: 0px 35px;
                }
            }
        }
    }
</style>