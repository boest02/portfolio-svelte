<script>
    import Sites from "../components/Sites.svelte";
    import ProgressBubbles from "../components/ProgressBubbles.svelte";
    import Choices from "../components/Choices.svelte";

    import ToolTip from "../components/ToolTip.svelte";


    let bubbles = [
        {
            name: 'Design',
            icon: '&#9956;'
        },
        {
            name: 'Build',
            icon: '1'
        },
        {
            name: 'Deploy',
            icon: '2'
        },
        {
            name: 'Finish',
            icon: '&#9745;'
        }
    ];

    let completed = 2;

    const completeLast = () => {
        completed = 3;
    }

    document.body.setAttribute("data-page-name", "portfolio");

</script>

<svelte:head>
    <title>Stephen Boettcher - Portfolio</title>
    <link rel="canonical" href="https://steveb-portfolio.netlify.app/portfolio">
    <meta name="description" content="Stephen Boettcher's portfolio">
</svelte:head>

<article class="portfolio-wrapper">
    <h2>Portfolio</h2>
    <section class="bubble-tracking">
        <details open class="stuff">
            <summary class="header">
                <h3>Sequential Progress Tracking Component</h3>
            </summary>
            <div class="details-content">
                <p>This is a svelte component that can take an array of tasks along with the count of completed
                    tasks/progress and
                    render these tracking bubbles to possibly display to a user where they are in their journey on your
                    site... The button shows how it can be updated in page to complete the next task. </p>
                <button class="finish-button" on:click="{completeLast}">Complete Bubbles</button>
            </div>

            <ProgressBubbles {bubbles} {completed} />
        </details>
    </section>
    <section class="tool-tips">
        <details class="stuff">
            <summary class="header">
                <h3>Custom Tooltips</h3>
            </summary>
            <div class="details-content">
                <p style="margin: 0px 10px 20px;">Click one of the tooltip icons to see more info about the element associated with the tooltip. Can be used to add further info for users...</p>
                <ToolTip logo="https://cdn-icons-png.flaticon.com/512/4412/4412363.png" position="left"
                    header="Paragraph Info to Expand on...">
                    <div slot="element" style="border: 1px solid #fff; border-radius: 10px; padding: 10px;">
                        <p
                            style="padding: 5px; font-weight: 600; font-family: 'Courier New', Courier, monospace; font-style: italic;">
                            This is a paragraph that I can add a help icon to and on click will be able to show further
                            info on the content in this paragraph</p>
                    </div>
                    <div slot="tip-content">
                        <h3>Custom Tooltip</h3>
                        <p style="max-width: 500px; margin: 10px auto;">Add any info you want with whatever markup is needed to expand on the element in the page that you want to add more context too...  You can provide an icon image to be used as the clickable tooltip and as the icon in this pop-up...</p>
                        <p style="max-width: 500px;margin: 15px auto; padding: 5px; border-radius: 10px; outline: .5px solid goldenrod;">Note: This will be anchored to the tooltip icon on Desktop or appear as a centered modal on Mobile screens...</p>
                    </div>
                </ToolTip>
                <div style="padding: 20px;"></div>
                <div class="flex-wrapper">
                    <ToolTip
                        logo="https://e7.pngegg.com/pngimages/197/447/png-clipart-paw-dog-computer-icons-dog-animals-logo-thumbnail.png"
                        position="right" header="Image Further Info">
                        <div slot="element">
                            <img class="info-test-image"
                                src="https://img.freepik.com/premium-photo/cute-puppy-white-background-vector-illustration-cartoon-dog_1057-17943.jpg"
                                alt="dog playing">
                        </div>
                        <div slot="tip-content">
                            <div style="width: max(20vw, 100px); margin: 0px auto;">
                                <p style="margin: 5px auto">This info tip can have any markup in it and it will position to the icon.. <span style="font-weight: 700;color: red;">Above</span> or <span style="font-weight: 700; color: green;">Below</span> the click area depending on how the screen is scrolled...</p>
                                <p style="margin: 5px auto">It will appear on the <span style="font-weight: 700;">Left</span> or <span style="font-weight: 700;">Right</span> of the click area based on configuration</p>
                            </div>
                        </div>
                    </ToolTip>
                    <ToolTip
                        logo="https://p1.hiclipart.com/preview/73/341/273/dev-c-plus-plus-icons-dev6-png-clipart.jpg"
                        position="left" header="Image Further Info">
                        <div slot="element">
                            <div style="border: 3px solid magenta; border-radius: 10px; padding: 10px;">
                                <img class="info-test-image"
                                    src="https://static-00.iconduck.com/assets.00/web-developer-illustration-1004x1024-wcqgbag3.png"
                                    alt="developer">
                                <h2>Web Developer</h2>
                            </div>
                        </div>
                        <div slot="tip-content">
                            <h3>Info about this dev picture</h3>
                            <p>This will show on click of the icon and will close in three ways:</p>
                            <ol style="margin: 10px 30px;">
                                <li>Click 'X' to close</li>
                                <li>Click behind to close</li>
                                <li>Scroll page away from click area</li>
                            </ol>
                        </div>
                    </ToolTip>
                </div>
            </div>
        </details>
    </section>
    <section class="pch-sites">
        <details class="stuff">
            <summary class="header">
                <h3>Publishers Clearing House Sites</h3>
            </summary>
            <div class="details-content">
                <p>These are some of the sites at PCH that I worked directly on in either building from scratch or
                    adding
                    new features to.</p>
                <Sites />
            </div>
        </details>
    </section>
</article>

<style lang="scss">
    :global([data-page-name="portfolio"]) {
        --page-background-image: url(/src/images/portfolio-background.jpg);
    }

    :global([data-page-name="portfolio"] main) {
        background: rgba(50, 50, 211, 0.25);
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
    }

    :global(details::marker) {
        content: ' +';
        color: #fff;
        font-size: 1.2em;
    }

    .portfolio-wrapper {
        margin-top: 40px;
        padding: 20px;
        min-height: 70vh;

        .flex-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        &>h2 {
            margin: 20px 0;
            position: absolute;
            top: -50px;
            right: 10px;
            font-style: italic;
        }

        p {
            color: #fff;
        }

        .stuff {
            position: relative;

            .header {
                margin: 20px 10px;

                h3 {
                    position: absolute;
                    top: 0px;
                    left: 40px;
                    font-size: 1.5rem;
                    font-weight: 700;
                    font-family: 'Courier New', Courier, monospace;
                }

                &::marker {
                    content: ' +';
                    color: #fff;
                    font-size: 1.5em;
                    font-weight: 700;
                }
            }

            &[open] {
                border: .5px dashed #fff;
                border-radius: 10px;
                margin-bottom: 40px;
                padding-bottom: 20px;

                .header {
                    h3 {
                        top: 20px;
                    }

                    &::marker {
                        content: ' -';
                    }
                }

                .details-content {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    width: 90%;
                    margin: 10px auto;

                    p {
                        font-size: 1rem;
                        font-weight: 500;
                        font-style: italic;
                    }

                    .info-test-image {
                        width: 350px;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 10px;
                    }
                }

            }

            .finish-button {
                width: fit-content;
                padding-inline: 10px;
                height: 40px;
                margin-top: 10px;
                font-size: 1rem;
                font-weight: 500;
                border-radius: 5px;
                border: 1px solid black;
                background-color: white;
                box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
                color: #000;

                &:hover {
                    background-color: #000;
                    color: #fff;
                    font-style: italic;
                    font-weight: 700;
                }
            }
        }
    }

    @media only screen and (max-width:480px) {

        :global([data-page-name="portfolio"] main) {
            width: 95%;
            margin: 20px auto;
        }
        .portfolio-wrapper {
            width: 95%;
            margin: auto;

            &>h2 {
                display: none;
            }

            .stuff {
                .header {
                    h3 {
                        font-size: 1.2rem;
                    }
                }

                &[open] {
                    .details-content {
                        margin: 30px auto;
                        width: 95%;

                        p {
                            font-size: .8rem;
                        }

                        .info-test-image {
                            width: 250px;
                        }

                    }

                    .finish-button {
                        font-size: .8rem;
                    }
                }
            }
        }
    }
</style>