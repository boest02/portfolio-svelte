<script lang="ts">
    import { slide } from 'svelte/transition';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import Bullets from './Bullets.svelte';
    import Lists from './Lists.svelte';
    import Filter from './Filter.svelte';

    export let data: any[] = [];
    export let type = 'bullets';

    let displayData: any[] = [];
    let more = false;

    const mainOptions = {
        type: 'slide',
        width: '100%',
        height: '500px',
        padding: '.5rem',
    };

    const dataProvider = (newData: any[]) => {
        displayData = newData;
    }

    const teaserText = (text: string) => {
        return text.length > 100 ? text.substring(0, 100) + '...' : text;
    }

    dataProvider(data.map(project => ({ ...project, more: false })).sort((a, b) => a.name.localeCompare(b.name)));
</script>

<section class="projects-wrapper">
    <h2>My Projects -</h2>
    <Filter type="Projects..." list="{data}" callBack={dataProvider} />
    <div class="layout" class:alternate="{type === 'alternate'}">
        {#each displayData as project}
        <div class="project">
            <div class="name">{project.name}</div>
            <div class="type">{project.type}</div>
            {#if !project.more}
            <div class="description">{teaserText(project.description)}</div>
            <button type="button" class="more button" aria-label="More" on:click={()=> project.more = !project.more}
                on:keydown={e => e.key === 'Enter' && (project.more = !project.more)}>More</button>
            {:else}
            <div class="description" in:slide="{{axis: 'y', duration: 400}}"
                out:slide="{{axis: 'y', duration: 400, delay: 150}}">
                {@html project.description}
            </div>
            <div class="bullets-wrapper" in:slide="{{axis: 'y', duration: 400}}"
                out:slide="{{axis: 'y', duration: 400, delay: 150}}">
                <div class="bullets-title">Highlights:</div>
                <Bullets list={project.highlights} />
            </div>

            {#if project?.url}
            <div class="project-link">
                <a target="_blank" href="{project.url}">Git Hub link...</a>
            </div>
            {/if}

            {#if project.images.length}
            <div class="carousel-section">
                <div class="carousel-title">Project Images:</div>
                <div class="carousel-wrapper">
                    <Splide aria-label="My Favorite Images" options={mainOptions}>
                        {#each project.images as image}
                        <SplideSlide>
                            <div class="carousel-slide">
                                <div class="image-title">{image.alt}</div>
                                <button type="button" class="image-button" on:click={()=> window.open(image.url,
                                    '_blank')}
                                    on:keydown={e => e.key === 'Enter' && window.open(image.url, '_blank')}>
                                    <img src={image.url} alt={image.alt} title={"Click to open " + image.alt} />
                                                </button>
                                            </div>
                                        </SplideSlide>
                                    {/each}
                                </Splide>
                            </div>
                        </div>
                    {/if}
                    <button type=" button" class="less button" aria-label="Less" on:click={()=> project.more =
                                    !project.more}
                                    on:keydown={e => e.key === 'Enter' && (project.more = !project.more)}>Less</button>
                                {/if}
                                <div class="tech-wrapper">
                                    {#each project.tech as tech}
                                    <div class="tech-item">{tech}</div>
                                    {/each}
                                </div>
                            </div>
                            {/each}
                </div>
                <div class="no-records">Sorry no Projects to display...</div>
</section>

<style lang="scss">
    .projects-wrapper {

        h2 {
            font-size: 125%;
            font-weight: bold;
            color: rgb(28, 141, 164);
            margin-bottom: 10px;
        }


        .no-records {
            display: none;
        }

        .layout {
            display: flex;
            flex-direction: column;
            gap: 10px;

            &:empty+.no-records {
                display: block;
                font-style: italic;
                margin: 20px;
                padding-bottom: 100px;
            }
        }

        .project {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 10px;
            border: 1px solid gray;
            border-radius: 10px;
            padding: 40px 20px 20px;
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
                    max-width: 400px;
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
                background: none;
                cursor: pointer;
                align-self: flex-end;
                margin: 20px;
                position: absolute;
                bottom: -5px;
                right: 10px;
                border: 1px solid rgb(28, 141, 164);
                border-radius: 10px;
                padding: 5px 10px;
                min-width: 75px;
                box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
                transition: background-color 0.3s, color 0.3s;

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
                width: 85%;
                margin-block: 10px;

                .tech-item {
                    font-size: 85%;
                    background-color: rgb(28, 141, 164);
                    color: #fff;
                    padding: 7px 15px;
                    border-radius: 25px;
                    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), -1px -1px 4px rgba(255, 255, 255, 0.3);
                }
            }
        }

        @media (max-width: 700px) {
            .project {
                padding: 50px 15px 60px;
                font-size: 95%;

                .name {
                    font-size: 98%;
                }

                .carousel-wrapper {
                    width: 95%;
                    margin: 10px auto;
                    padding-block: 10px;

                    img {
                        max-width: 90%;
                    }
                }

                .button {
                    margin-block: 0;
                    bottom: 20px;
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
    }

    .image-button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }
</style>