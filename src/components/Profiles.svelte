<script lang="ts">
    export let profiles = {};
    console.log(profiles);
</script>

<article class="profiles-wrapper">
    <section>
        {#each profiles as profile}
        <div>
            <a class="profile" href="{profile.url}" target="_blank">
                <img src="{profile.icon}" alt="icon">
                {profile.network}
            </a>
        </div>

        {/each}
    </section>
</article>

<style lang="scss">
    .profiles-wrapper section {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;

        .profile {
            display: flex;
            align-items: center;
            gap: 10px;
            color: blue;

            img {
                width: 30px;
                height: 30px;
            }
        }
    }
</style>