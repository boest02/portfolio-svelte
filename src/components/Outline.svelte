<script lang="ts">
    import Summary from "./Summary.svelte";
    export let basics = {};
</script>

<article class="outline-wrapper">
    <img class="my-photo" src="{basics.image}" alt="me">
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
<Summary summary="{basics.summary}" />

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
    }
</style>