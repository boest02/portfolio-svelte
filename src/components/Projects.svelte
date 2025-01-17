<script lang="ts">
    import { slide } from 'svelte/transition';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import Bullets from './Bullets.svelte';
    import Lists from './Lists.svelte';

    export let data = [];
    export let type = 'bullets';
    let more = false;

    const mainOptions = {
        type: 'slide',
        width: '100%',
        height: '500px',
        padding: '.5rem',
    };

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
                        <div class="carousel-section">
                            <div class="carousel-title">Project Images:</div>
                            <div class="carousel-wrapper">
                                <Splide aria-label="My Favorite Images" options={mainOptions} >
                                    {#each project.images as image}
                                        <SplideSlide>
                                            <div class="carousel-slide">
                                                <div class="image-title">{image.alt}</div>
                                                <img src={image.url}
                                                     alt={image.alt}
                                                     title={"Click to open " + image.alt}
                                                     on:click={() => window.open(image.url, '_blank')}/>
                                            </div>
                                        </SplideSlide>
                                    {/each}
                                </Splide>
                            </div>
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
                position: absolute;
                top: 10px;
                right: 20px;
            }

            .description {
                font-size: 95%;
                margin: 10px;
            }

            .bullets-title,
            .carousel-title,
            .image-title {
                font-size: 85%;
                font-weight: bold;
                color: rgb(28, 141, 164);
            }

            .bullets-wrapper {
                margin: 10px;
            }

            .carousel-section {
                margin: 10px;
            }

            .carousel-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px auto;
                width: 80%;
                padding-block: 40px;
                margin-block: 20px;
                border-radius: 10px;
                border: 2px solid rgb(28, 141, 164);
                box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);

                :global(.splide__slide) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                :global(.splide__arrow) {
                    background-color: #fff;
                    border: 1px solid rgb(28, 141, 164);
                    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
                }

                :global(.splide__arrow svg) {
                    fill: rgb(28, 141, 164);
                }

                :global(.splide__arrow:hover) {
                    background-color: rgb(9, 199, 237);
                }

                :global(.splide__arrow:hover svg) {
                    fill: #fff;
                }

                :global(.splide__arrow:active) {
                   outline: 2px solid rgb(28, 141, 164);
                }

                img {
                    max-width:400px;
                    max-height: 450px;
                    width: auto;
                    height: auto;
                    border-radius: 10px;
                    transition: transform .5s ease-in;
                    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);

                    &:hover {
                        cursor: zoom-in;
                    }
                }

                .carousel-slide {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
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
                border: 1px solid rgb(28, 141, 164);
                border-radius: 10px;
                padding: 5px 10px;
                box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
                transition: all 0.3s, color 0.3s;

                &:hover {
                    background-color: rgb(9, 199, 237);
                    color: #fff;
                }

                &:active {
                    outline: 2px solid rgb(28, 141, 164);
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