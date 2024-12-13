<script lang="ts">
    import List from './List.svelte';
    export let data = [];
    console.log(data);
</script>

<section class="skills-wrapper block">
    <h2>Skills:</h2>
    <div class="skills-layout">
        {#each data as skill}
            <div class="skill-types">
                <h3>{skill.name}</h3>
                <div class="key-words">
                    <List list="{skill.keywords}" />
                </div>
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

        @media (max-width:480px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-auto-flow: unset;

            .skill-types {
                width: 98%;
            }
        }
    }
</style>