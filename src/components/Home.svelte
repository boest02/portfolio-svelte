<script>
    import Outline from "./Outline.svelte";
    import Experience from "./Experience.svelte";
    import Education from "./Education.svelte";
    import Aside from "./Aside.svelte";
    import Skills from "./Skills.svelte";
    import Strengths from "./Strengths.svelte";
    import Summary from "./Summary.svelte";
    import Profiles from "./Profiles.svelte";

    let fetchJson = fetch('my_resume_2.json').then(res => res.json());
    
    let summary = `<p>Hi, I am a full stack developer with over 25 years of experience in the web development industry. I have a strong background in front-end development, with expertise in HTML, CSS, and JavaScript. I have also worked on back-end development, including PHP, Python, and Node.js. I am proficient in using various frameworks such as Svelte, Vue.js, React and Angular. I am always looking for new challenges and opportunities to grow my skills and knowledge.</p> <p>In a previous life, I was a C developer working on Windows for a backup software, with my focus on moving data and controlling devices such as tape drives and tape libraries.  We worked with these through a SCSI interface and wrote code to send SCSI commands to tape drives to position to locations and then either read or write data.  We also used the interface to discover tape libraries and move tapes into and out of drives in the tape library.</p>`;
    
</script>

<svelte:head>
	<title>Home - Stephen Boettcher</title>
</svelte:head>

<div class="home-wrapper page-content">
    {#await fetchJson}
        <h2>Loading...</h2>
    {:then resume}
        <div class="head-section">
            <Outline basics="{resume.basics}" type="home" />
            <Profiles profiles={resume.basics.profiles} />
        </div>        
        <Summary {summary} title="About Me" />        
        <Skills data={resume.skills} /> 
        <Experience data={resume.work} />       
    {:catch error}
    error
    {/await}
</div>

<style lang="scss">
    .home-wrapper {
        margin-top: 40px;
        
        & > :global([class*="wrapper "]) {
            margin-bottom: 40px;
        }
        
        .head-section {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px;
            
            :global(.outline-wrapper) {
                flex-basis: 450px;
            }
            
            :global(.profiles-wrapper) {
                flex-basis: 50%;
            }
        }
    }
</style>