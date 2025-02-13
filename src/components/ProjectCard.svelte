<script lang="ts">

    interface Project {
        name: string;
        type: string;
        description: string;
        bullets: string[];
        images: string[];
    }

    export let project: Project;

    const teaserText = (text: string) => {
        return text.length > 150 ? text.substring(0, 150) + '...' : text;
    }

</script>


<div class="project">
    <div class="name">{project.name}</div>
    <div class="type">{project.type}</div>

    <div class="description">{teaserText(project.description)}</div>

    <div class=" tech-wrapper">
        {#each project.tech as tech}
        <div class="tech-item">{tech}</div>
        {/each}
    </div>
    <slot name="button"></slot>
</div>

<style lang="scss">
    .project {
        display: grid;
        flex-direction: column;
        flex-basis: 47%;
        min-width: 420px;
        gap: 10px;
        margin: 10px;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 50px 20px 30px;
        position: relative;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);

        .name {
            font-size: 125%;
            font-weight: bold;
        }

        .type {
            font-size: 85%;
            font-weight: bold;
            color: rgb(28, 141, 164);
            position: absolute;
            top: 20px;
            right: 25px;
        }

        .project-link {

            a,
            a:visited {
                margin: 10px;
                font-weight: 600;
                font-size: .8rem;
                font-style: italic;
                color: rgb(28, 141, 164);
            }
        }

        .description {
            font-size: 95%;
            margin: 10px;
        }

        .tech-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-block: 10px;

            .tech-item {
                width: fit-content;
                height: fit-content;
                font-size: 85%;
                background-color: #fff;
                color: rgb(28, 141, 164);
                font-weight: 700;
                padding: 5px 10px;
                border: 1px solid rgb(28, 141, 164);
                border-radius: 10px;
                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);
            }
        }

        :global(button) {
            align-self: end;
            background-color: rgb(28, 141, 164);
            color: #fff;
            width: 50%;
            margin: 0 auto;
            padding-block: 5px;
            border-radius: 15px;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);
            cursor: pointer;
        }

        @media (max-width: 700px) {
            min-width: 98%;
            padding: 50px 15px 20px;
            font-size: 95%;

            .name {
                font-size: 98%;
            }

            .tech-wrapper {
                width: 100%;

                .tech-item {
                    font-size: 75%;
                    padding: 7px 10px;
                }
            }

        }
    }
</style>