<script lang="ts">
    import List from './List.svelte';
    export let data = [];
    console.log(data);
</script>

<section class="skills-wrapper block">
    <h2>Skills</h2>
    {#each data as skill}
    <div class="skill">
        <h3>{skill.name}</h3>
        <p>Level: {skill.level}</p>
        <div class="key-words">
            <List list="{skill.keywords}" />
        </div>
    </div>
    {/each}
</section>

<style lang="scss">
    .skills-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        position: relative;
        padding-left: 60px;

        h2 {
            position: absolute;
            top: 10px;
            left: 10px;
            writing-mode: vertical-rl;
            text-orientation: upright;
            text-transform: uppercase;
        }

        @media only screen and (max-width:600px) {
            padding-left: 0;
            h2 {
                position: static;
                writing-mode: horizontal-tb;
                text-orientation: initial;
                width: 100%;
            }
        }

        .skill {
            padding: 20px 20px 30px;
            width: 30%;
            max-width: 350px;
            min-width: 275px;
            border: 1px solid #000;
            position: relative;

            h3 {
                font-weight: 600;
                font-style: italic;
            }

            p {
                font-size: 85%;
                position: absolute;
                bottom: 10px;
                right: 10px;
            }

            .key-words {
                margin-left: 30px;
            }
        }
    }
</style>