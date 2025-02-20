<script>
    import { getContext } from 'svelte';
    import CareerExperience from "../components/CareerExperience.svelte";

    const resumeType = getContext("resumeType");
    const resumeFiles = getContext("resumeFiles");

    let fetchJson = fetch(resumeFiles[resumeType]).then(res => res.json()).then(jsn => jsn);

    document.body.setAttribute("data-page-name", "career");
</script>

<svelte:head>
	<title>Stephen Boettcher - Career</title>
    <link rel="canonical" href="https://sboettcher.com/career">
    <meta name="description" content="Stephen Boettcher's career">
</svelte:head>

<div class="career-wrapper page-content">
    {#await fetchJson}
        <h2>Loading...</h2>
    {:then resume}
        <CareerExperience data={resume.work} includeNonHighlights="true" />
    {:catch error}
    error
    {/await}
</div>