<script>
    import Summary from "./Summary.svelte";
    import Experience from "./Experience.svelte";
    import Education from "./Education.svelte";
    import Aside from "./Aside.svelte";
    import Skills from "./Skills.svelte";
    import Strengths from "./Strengths.svelte";
    
    let fetchJson = fetch('my_resume.json').then(res => res.json());
</script>

<svelte:head>
	<title>Resume - Stephen Boettcher</title>
</svelte:head>

<div class="resume-wrapper page-content">
    <h1>Resume</h1>
    {#await fetchJson}
        waiting...
    {:then resume}     
        <Summary summary="{resume['SUMMARY']}" />  
        <Experience data={resume['EXPERIENCE']} />
        <Education data={resume['EDUCATION']} />
        <Aside>
            <Skills data={resume['TECHNICAL']}/>
            <Strengths data={resume['STRENGTHS']} />
        </Aside>      
    {:catch error}
        error
    {/await}
</div>