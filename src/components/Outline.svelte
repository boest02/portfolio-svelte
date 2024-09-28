<script lang="ts">
    export let basics = {};
    export let type = '';
</script>

<article class="outline-wrapper"
         class:resume-look="{type === 'resume' }"
         class:home-look="{type === 'home' }">
    {#if !(type === 'resume')}
        <img class="my-photo" src="{basics.image}" alt="me">
    {/if}
    <section>
        <h1>{basics.name}</h1>
        <div class="info-section">
            <ul>
                <li><a href="mailto:{basics.email}">{basics.email}</a></li>
                <li>{basics.phone}</li>
                <li>{basics.location.city}, {basics.location.region}</li>
            </ul>
        </div>
    </section>
</article>

<style lang="scss">
    .outline-wrapper {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 30px;

        .my-photo {
            width: 125px;
            height: 150px;
            border-radius: 45%;
            object-fit: cover;
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
        }

        section {
            h1 {
                font-size: 1.5rem;
                font-weight: 700;
            }

            ul {
                list-style: none;
                display: flex;
                flex-wrap: wrap;

                li {
                    a {
                        color: blue;
                    }

                    &::after {
                        padding: 0 10px;
                        content: '\203B';
                    }
                }
            }
        }


        &.home-look {
            margin-bottom: 25px;

            .my-photo {
                border-radius: .4rem;
                ;
            }

            section {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;

                h1 {
                    text-decoration: underline;
                }

                ul {
                    display: block;
                    border: 1px solid #000;
                    padding: 15px 30px;
                    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.4);

                    li::after {
                        content: '';
                    }
                }
            }
        }

        &.resume-look {
            display: grid;
            place-content: center;

            h1 {
              text-align: center;
            }
        }

        @media only screen and (max-width:480px) {
            &.home-look {
                transform: scale(.75);

                h1 {
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>