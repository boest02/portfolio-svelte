<script>
    import Sites from "./Sites.svelte";
    import ProgressBubbles from "./ProgressBubbles.svelte";
    import Choices from "./Choices.svelte";


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
    <title>Portfolio - Stephen Boettcher</title>
</svelte:head>

<article class="portfolio-wrapper">
    <h2>Portfolio</h2>
    <details open class="stuff">
        <summary class="header">
            <h3>Sequential Task Tracking Component</h3>
        </summary>
        <div class="details-content">
            <p>This is a svelte component that can take an array of tasks along with the count of completed tasks and
                render these tracking bubbles to possibly display to a user where they are in their journey on your
                site... The button shows how it can be updated in page to complete the next task. </p>
            <button class="finish-button" on:click="{completeLast}">Complete Bubbles</button>
        </div>

        <ProgressBubbles {bubbles} {completed} />
    </details>
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

        h2 {
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
</style>