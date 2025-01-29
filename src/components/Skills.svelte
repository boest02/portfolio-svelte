<script lang="ts">
    import Lists from './Lists.svelte';
    export let data: { name: string; keywords: string[] }[] = [];
    console.log(data);
</script>

<section class="skills-wrapper block">
    <h2>Skills:</h2>
    <div class="skills-layout">
        <ul>
            {#each data as skill}
                <li>
                    <div class="bullet-wrapper">
                        <h3>{skill.name}</h3>
                        <Lists list="{skill.keywords}" />
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</section>

<style lang="scss">
    .skills-layout {
        margin: 0 10px;

        ul {
            margin: 20px;
            li {
                .bullet-wrapper {
                    display: flex;
                    align-items: start;
                    line-height: 1.5;

                    h3 {
                        margin: 0 5px;
                        font-weight: 600;
                        margin-top: -4px;
                        &::after {
                            content: ": ";
                        }
                    }

                }
            }
        }

        @media (max-width: 700px) {
            ul {
                li {
                    .bullet-wrapper {
                        flex-direction: column;
                        align-items: unset;

                        :global(span) {
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
</style>