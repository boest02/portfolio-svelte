<script lang="ts">
    import Heading from './Heading.svelte';
    import List from './List.svelte';
    export let data = [];
    export let consolidate = false;
    export let includeNonHighlights = false;
    console.log("work: ", data);

    let experienceList = {};
    let nonHighlightsList = {};

    const parseExperience = (exp) => {
        data.forEach(exp => {
            if (!exp.highlights.length) return;
            experienceList[exp.name] === undefined && (experienceList[exp.name] = []);
            experienceList[exp.name].push(exp);
        });
    };

    const parseNonHighlights = (exp) => {
        data.forEach(exp => {
            if (exp.highlights.length) return;
            nonHighlightsList[exp.name] === undefined && (nonHighlightsList[exp.name] = []);
            nonHighlightsList[exp.name].push(exp);
        });
    };

    parseExperience(data);
    parseNonHighlights(data);
    console.log("experienceList: ", experienceList);
    console.log("nonHighlightsList: ", nonHighlightsList);
</script>

<section class="experience-wrapper block">
    <h2>Experience:</h2>
    {#each Object.keys(experienceList) as key}
        <section>
            {#if consolidate}
                <h2>
                    {key}
                    <a class="company-link" href="{experienceList[key][0].url}" target="_blank">link</a>
                </h2>
            {/if}

            {#each experienceList[key] as exp}
                {#if !consolidate}
                    <h2>
                        {key}
                        <a class="company-link" href="{experienceList[key][0].url}" target="_blank">link</a>
                    </h2>
                {/if}
            <Heading title="{exp.position}" start="{exp.startDate}" end="{exp.endDate}" />
            <div class="highlights-wrapper">
                <List list="{exp.highlights}" />
            </div>
            {/each}
        </section>
    {/each}

    {#if includeNonHighlights}
        {#each Object.keys(nonHighlightsList) as key}
            <section class="non-highlights-wrapper">
                <h2>
                    {key}
                </h2>

                {#each nonHighlightsList[key] as exp}
                    <Heading title="{exp.position}" start="{exp.startDate}" end="{exp.endDate}" />
                {/each}
            </section>
        {/each}
    {/if}
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

            .company-link {
                font-style: italic;
                font-size: 80%;
                vertical-align: super;
            }

            .highlights-wrapper {
                margin: 5px 45px 10px;
            }
        }
        .non-highlights-wrapper {
            h2::after {
                content: "- Previous Roles -";
                margin-left: 10px;
                margin-top: 5px;
                font-size: 70%;
                font-style: italic;
                font-weight: 400;
                vertical-align: top;

            }
            :global(.heading-wrapper) {
                margin: 5px 20px;
            }
        }
    }
</style>