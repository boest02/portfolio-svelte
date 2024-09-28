<script>
    import iFrame from "./IFrame.svelte";
    import Tabs from "./Tabs.svelte";

    // List of tab items with labels, values and assigned components
    let items = [
        {
            label: "PCH Rewards",
            description: "This is a site that we worked on to highlight PCH's weekly grand prizes and we built this using Laravel components with a JS and SCSS to crete JS and CSS bundles",
            value: 1,
            component: iFrame,
            url: "https://rewards.pch.com/weekly-grand-prize"
        },
        {
            label: "PCH Com",
            description: "This is a new entrance into the PCH.com site that is the main site, but the site was on a system that gated it to new, unknown users so this page was create on a site we had rebuilt and we use a redirect to make it look like it is the PCH.com site",
            value: 2,
            component: iFrame,
            url: "https://www.pch.com/"
        },
        {
            label: "MPO Registration",
            description: "This is sample of a registration page that is built on the internal system that we created to support registration in a form view or as a stepped registration, this system is used to build user experiences for PCH, usually to try to onboard new users, but to also provide new ways for our users to engage with PCH",
            value: 3,
            component: iFrame,
            url: "https://mpo.pch.com/register/weekly-grand-prize"
        },
        {
            label: "MPO Prizewheel",
            description: "This is one of those stepped user experiences that we built to allow users to spin the wheel for a chance to win a prize, this is an experience built on that internal system that allows for users to get a stepped experience and this one is also fed by another system that allows the experience to be sponsored by other 3rd party companies",
            value: 4,
            component: iFrame,
            url: "https://mpo.pch.com/path/SurpriseWheel?emh=a2dad277bc104f3cad38ce219bbbf4d1&e=a2dad277-bc10-4f3c-ad38-ce219bbbf4d1"
        }
    ];
</script>

<svelte:head>
    <title>Portfolio - Stephen Boettcher</title>
</svelte:head>

<div class="portfolio-wrapper">
    <form id="formName" method="get">
        <label>
            3
            <input style="display: none;" type="checkbox" name="cBox" value="3" onchange="this.form.submit()">
        </label>
        <label>
            4
            <input style="display: none;" type="checkbox" name="cBox" value="4" onchange="this.form.submit()">
        </label>
        <label>
            5
            <input style="display: none;" type="checkbox" name="cBox" value="5" onchange="this.form.submit()">
        </label>
    </form>
    <h1>Portfolio</h1>
    <Tabs {items} />
</div>

<style lang="scss">
    .portfolio-wrapper {
        margin-top: 40px;

        h1 {
            margin: 20px 0;
            position: absolute;
            top: -40px;
            right: 10px;
            font-style: italic;
        }
    }
</style>