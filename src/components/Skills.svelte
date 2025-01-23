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
                    align-items: center;

                    h3 {
                        margin: 0 5px 2px 0;
                        font-weight: 600;
                        &::after {
                            content: ": ";
                        }
                    }
                }
            }
        }

        @media (max-width: 700px) {

        }
    }
</style>