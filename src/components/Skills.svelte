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
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px;

        @media only screen and (max-width:600px) {
            padding-left: 0;
        }

        .skill-types {
            display: flex;
            flex-direction: column;
            position: relative;
            margin-bottom: 10px;

            h3 {
                font-weight: 600;
                font-style: italic;
            }

            .key-words {
                font-size: 85%;
                padding-left: 20px;
            }
        }
    }
</style>