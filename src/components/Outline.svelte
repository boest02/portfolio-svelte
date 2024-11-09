<script lang="ts">
    export let basics = {};
    export let type = '';
</script>

<article class="outline-wrapper"
         class:resume-look="{type === 'resume' }"
         class:home-look="{type === 'home' }">
    {#if !(type === 'resume')}
        <div class="my-photo"></div>
    {/if}
    <section>
        <h1>{basics.name}</h1>
        <div class="info-section">
            <ul>
                <li>{basics.location.city}, {basics.location.region}</li>
                <li>{basics.phone}</li>
                <li><a href="mailto:{basics.email}">{basics.email}</a></li>
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
            width: 120px;
            height: 125px;
            border-radius: 45%;
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
            background-image: url(/src/images/Me.JPG);
            background-size: cover;
            background-position: 0% 35%;
        }

        section {
            min-width: 350px;
            margin-inline: 0 10px;
            margin-block: 0 10px;
            h1 {
                font-size: 1.5rem;
                font-weight: 700;
                font-family: 'Courier New', Courier, monospace;
            }

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;

                li {
                    a {
                        color: blue;
                    }
                }
            }
        }


        @media only screen and (max-width:480px) {

        }
    }
</style>