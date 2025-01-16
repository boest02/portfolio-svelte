<script lang="ts">
    import { slide } from 'svelte/transition';
    import Bullets from './Bullets.svelte';
    import Lists from './Lists.svelte';
    export let data = [];
    export let type = 'bullets';
    let more = false;

    data = data.map(project => ({ ...project, more: false }));

    const teaserText = (text) => {
        return text.length > 100 ? text.substring(0, 100) + '...' : text;
    }
</script>

<section class="projects-wrapper">
    <h2>My Projects -</h2>
    <div class="layout" class:alternate="{type === 'alternate'}">
        {#each data as project}
            <div class="project">
                <div class="name">{project.name}</div>
                <div class="type">{project.type}</div>
                {#if !project.more}
                    <div class="description">{teaserText(project.description)}</div>
                    <div class="more button" role="button" aria-label="More" on:click={() => project.more = !project.more}>More</div>
                {:else}
                    <div class="description"
                         in:slide="{{axis: 'y', duration: 400}}"
                         out:slide="{{axis: 'y', duration: 400, delay: 150}}">
                        {project.description}
                    </div>
                    <div class="bullets-wrapper"
                         in:slide="{{axis: 'y', duration: 400}}"
                         out:slide="{{axis: 'y', duration: 400, delay: 150}}">
                        <div class="bullets-title">Highlights:</div>
                        <Bullets list={project.highlights} />
                    </div>
                    {#if project.images.length}
                        <div class="images-wrapper"
                             in:slide="{{axis: 'y', duration: 400}}"
                             out:slide="{{axis: 'y', duration: 400, delay: 150}}">
                            {#each project.images as image}
                                <img src={image} alt={project.name} />
                            {/each}
                        </div>
                    {/if}
                    <div class="less button" role="button" aria-label="Less" on:click={() => project.more = !project.more}>Less</div>
                {/if}
                <div class="tech-wrapper">
                    {#each project.tech as tech}
                    <div class="tech-item">{tech}</div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    .projects-wrapper {

        h2 {
            font-size: 125%;
            font-weight: bold;
            color: rgb(28, 141, 164);
            margin-bottom: 10px;
        }

        .layout {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .project {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 10px;
            border: 1px solid gray;
            border-radius: 10px;
            padding: 10px;
            position: relative;
            box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
            .name {
                font-size: 125%;
                font-weight: bold;
            }

            .type {
                font-size: 85%;
                font-weight: bold;
                color: rgb(28, 141, 164);
            }

            .description {
                font-size: 95%;
                margin: 10px;
            }

            .bullets-wrapper {
                margin: 10px;

                .bullets-title {
                    font-size: 85%;
                    font-weight: bold;
                    color: rgb(28, 141, 164);
                }
            }

            .images-wrapper {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
                margin: 10px;
                img {
                    max-width:400px;
                    max-height: 500px;
                    width: auto;
                    height: auto;
                    border-radius: 10px;
                    transition: transform .5s ease-in;
                    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
                }
            }

            .button {
                text-transform: lowercase;
                font-size: 85%;
                font-weight: bold;
                color: rgb(28, 141, 164);
                cursor: pointer;
                align-self: flex-end;
                margin: 20px;
                position: absolute;
                bottom: -5px;
                right: 10px;
                border: 1px solid gray;
                border-radius: 10px;
                padding: 5px 10px;
                box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
                transition: background-color 0.3s, color 0.3s;

                &:hover {
                    background-color: rgb(24, 34, 96);
                    color: rgb(9, 199, 237);
                }

                &.more::after {
                    content: ' +';
                }

                &.less::after {
                    content: ' -';
                }
            }

            .tech-wrapper {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 10px;
                .tech-item {
                    font-size: 85%;
                    background-color: rgb(28, 141, 164);
                    color: #fff;
                    padding: 7px 15px;
                    border-radius: 25px;
                    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);
                }
            }

            @media (max-width: 700px) {}
        }
    }
</style>