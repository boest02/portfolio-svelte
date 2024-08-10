<script lang="ts">
    export let profiles = {};
    console.log(profiles);
</script>

<article class="profiles-wrapper">
    <section>
        {#each profiles as profile}
        <div style="block-size: {Math.floor(Math.random() * 10 + 5)}vw;">
            <a class="profile" href="{profile.url}" target="_blank">
                <img src="{profile.icon}" alt="icon">
                <dl>
                    <dt>{profile.network}</dt>
                    <dd>{profile.username}</dd>
                </dl>
            </a>
        </div>

        {/each}
    </section>
</article>

<style lang="scss">
    .profiles-wrapper section {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        grid-template-rows: masonry;
        max-height: 350px;
        /* width: 75%; */
        margin: 10px auto 25px;
        
        @media only screen and (max-width:480px) {
            display: flex;
        }        
        
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 75px;
        }
                                
        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
                      
            padding: 10px;
            border-radius: 20px;
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
            border: .5px solid #000;
            text-decoration: none;
            color: #000;
            font-size: 70%;
            cursor: pointer;

            &:hover {
                background-color: rgba(211, 211, 211, .8);
                border: 1px solid #fff;
            }

            img {
                width: 30px;
                height: 30px;
            }

            dl {
                display: inline-flex;

                dt::after {
                    content: "/";
                    margin: 0 2px;
                }
            }
        }
    }
</style>