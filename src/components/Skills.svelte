<script lang="ts">
    import Bullets from './Bullets.svelte';
    import Lists from './Lists.svelte';
    export let data = [];
    export let type = 'bullets';
    console.log(data);
</script>

<section class="skills-wrapper block">
    <h2>Skills:</h2>
    <div class="skills-layout" class:alternate="{type === 'alternate'}">
        {#each data as skill}
        <div class="skill-types">
            <h3>{skill.name}</h3>
            {#if type === 'alternate'}
            <Lists list="{skill.keywords}" />
            {:else}
            <div class="key-words">
                <Bullets list="{skill.keywords}" />
            </div>
            {/if}
        </div>
        {/each}
    </div>
</section>

<style lang="scss">
    h2 {
        font-weight: 700;
    }

    .skills-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto;
        grid-auto-flow: column;
        margin: 0 10px;

        .skill-types {
            display: flex;
            flex-direction: column;
            position: relative;

            h3 {
                font-weight: 600;
                font-style: italic;
            }

            .key-words {
                font-size: 85%;
            }
        }

        &.alternate {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-auto-flow: unset;
            gap: 10px;

            .skill-types {
                display: inline;
                width: 95%;

                h3 {
                    display: inline;
                    margin: 0 5px 1px -10px;
                    letter-spacing: .5px;

                    &::after {
                        content: " : ";
                    }
                }
            }
        }

        @media (max-width: 700px) {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto;
            grid-auto-flow: unset;

            .skill-types {
                width: 98%;
            }
        }
    }
</style>