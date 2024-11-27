<script>
    import iFrame from "./IFrame.svelte";
    import Tabs from "./Tabs.svelte";

    // List of tab items with labels, values and assigned components
    export let sites = [
        {
            label: "PCH Rewards",
            description: "This is a site that we worked on to highlight PCH's weekly grand prizes and we built this using Laravel components with a JS and SCSS to crete JS and CSS bundles",
            value: 1,
            component: iFrame,
            url: "https://rewards.pch.com/weekly-grand-prize?emh=9253b3c1784ce6dcca92f3f7973802cbc7cab47c502d7e2a908ff1dd0c48c49f&e=2dd99a78-50ee-45d4-858a-41c8869a580a"
        },
        {
            label: "PCH Com",
            description: "This is a new entrance into the PCH.com site that is the main site, but the site was on a system that gated it to new, unknown users so this page was create on a site we had rebuilt and we use a redirect to make it look like it is the PCH.com site",
            value: 2,
            component: iFrame,
            url: "https://www.pch.com?emh=9253b3c1784ce6dcca92f3f7973802cbc7cab47c502d7e2a908ff1dd0c48c49f&e=2dd99a78-50ee-45d4-858a-41c8869a580a"
        },
        {
            label: "MPO Prizewheel",
            description: "This is one of those stepped user experiences that we built to allow users to spin the wheel for a chance to win a prize, this is an experience built on that internal system that allows for users to get a stepped experience and this one is also fed by another system that allows the experience to be sponsored by other 3rd party companies",
            value: 4,
            component: iFrame,
            url: "https://mpo.pch.com/path/SurpriseWheel?emh=9253b3c1784ce6dcca92f3f7973802cbc7cab47c502d7e2a908ff1dd0c48c49f&e=2dd99a78-50ee-45d4-858a-41c8869a580a"
        }
    ];
</script>

<Tabs items={sites} />
