<script lang="ts">
    import { type resume } from "../ts/resume";

    export let basics: resume["basics"];
    export let type: string = '';
    export let exclude: string = '';
</script>

<article class="outline-wrapper" class:resume-look="{type === 'resume' }" class:home-look="{type === 'home' }">
    {#if !(type === 'resume')}
    <div class="my-photo"></div>
    {/if}
    <section>
        <div class="heading-wrapper">
            <h1>{basics.name}</h1>
            <h2>{basics.label}</h2>
            <div class="location-wrapper">{basics.location.city}, {basics.location.region} {basics.location.postalCode}
            </div>
            <div>{basics.phone}</div>
        </div>
        <div class="info-section">
            <ul>
                <li>
                    <a target="_blank" href="mailto:{basics.email}" title="Email">
                        <i class="fa-solid fa-envelope"></i>
                        {basics.email}
                    </a>
                </li>
                {#if exclude !== 'portfolio'}
                <li>
                    <a target="_blank" href="https://{basics.portfolio_url}" title="Portfolio">
                        <i class="fa-solid fa-briefcase"></i>
                        {basics.portfolio_url}
                    </a>
                </li>
                {/if}
                <li>
                    <a target="_blank" href="https://{basics.linkedin_url}" title="LinkedIn">
                        <i class="fa-brands fa-linkedin"></i>
                        {basics.linkedin_url}
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://{basics.github_url}" title="GitHub">
                        <i class="fa-brands fa-github"></i>
                        {basics.github_url}
                    </a>
                </li>
            </ul>
        </div>
    </section>
</article>

<style lang="scss">
    .outline-wrapper {
        display: flex;
        justify-content: start;
        align-items: flex-start;
        gap: 30px;
        width: 100%;

        .my-photo {
            width: 120px;
            height: 125px;
            min-width: 95px;
            min-height: 95px;
            border-radius: 25%;
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
            background-image: url(/src/images/me-2.png);
            background-size: cover;
            background-position: center;
            border: 1px solid #ccc;
        }

        section {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 20px;

            h1 {
                font-size: 1.5rem;
                font-weight: 900;
            }

            h2 {
                font-size: 1.1rem;
                font-weight: 600;
            }

            .info-section {
                justify-self: right;
            }

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                gap: 5px 10px;

                li {
                    font-size: 95%;

                    a {
                        color: #000;

                        i {
                            margin-right: 5px;
                        }
                    }
                }
            }
        }


        @media only screen and (max-width:480px) {
            width: 95%;

            .my-photo {
                display: none;
            }

            section {
                flex-direction: column;
                gap: 10px;
                min-width: none;
                width: 95%;
                margin: 10px auto;

                .info-section {
                    width: 95%;
                    min-width: none;
                }
            }
        }
    }
</style>