<script>
    import Experience from "../components/Experience.svelte";

    let fetchJson = fetch('my_resume_2.json').then(res => res.json()).then(jsn => { console.log("JSON:", jsn); return jsn; });

    document.body.setAttribute("data-page-name", "career");
</script>

<svelte:head>
	<title>Career - Stephen Boettcher</title>
</svelte:head>

<div class="career-wrapper page-content">
    {#await fetchJson}
        <h2>Loading...</h2>
    {:then resume}
        <Experience data={resume.work} includeNonHighlights="true" />
    {:catch error}
    error
    {/await}
</div>