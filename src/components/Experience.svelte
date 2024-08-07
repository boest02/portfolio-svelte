<script lang="ts">
    import Heading from './Heading.svelte';
    import List from './List.svelte';
    export let data = [];
    console.log("work: ", data);
    
    let parsedExperience = {};
  
    const parseExperience = (exp) => {
        data.forEach(exp => {
            parsedExperience[exp.name] === undefined && (parsedExperience[exp.name] = []);
            parsedExperience[exp.name].push(exp);
        });
    };
    parseExperience(data);
    console.log("parsedExperience: ", parsedExperience);
</script>

<section class="experience-wrapper block">
    <h2>Experience:</h2>
    {#each Object.keys(parsedExperience) as key}       
        <section> 
            <h2>{key}</h2>
            <p class="company-description">
                {parsedExperience[key][0].summary}
                <a href="{parsedExperience[key][0].url}" target="_blank">link</a>
            </p>
            {#each parsedExperience[key] as exp}
                <Heading title="{exp.position}" start="{exp.startDate}" end="{exp.endDate}" />
                <div class="highlights-wrapper">
                    <List list="{exp.highlights}" />
                </div>                
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
            
            .company-description {
                margin: 10px;
                font-size: 90%;
                
                a {
                    margin: 0 5px;
                    font-style: italic;
                }
            }   
            
            .highlights-wrapper {
                margin: 5px 45px 10px;
            }
        }
    }
</style>