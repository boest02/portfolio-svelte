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

    let summary = `<p>Hello! I’m a seasoned front-end web developer with over 25 years of experience in the software industry. My journey in technology began with a strong foundation in C programming, where I worked on backup software for Windows, focusing on data movement and device control using SCSI interfaces. This early experience honed my problem-solving skills and attention to detail, which have been invaluable in my transition to web development.</p>
    <p>Today, I specialize in front-end development, with deep expertise in HTML, CSS, and JavaScript. Over the years, I've mastered modern frameworks like Svelte, Vue.js, React, and Angular, allowing me to craft dynamic, responsive, and user-friendly web applications. My background also includes experience in back-end development, particularly with PHP, Python, and Node.js, giving me a well-rounded skill set that bridges both the client and server sides of web development.</p>
    <p>I’m always eager to take on new challenges, constantly seeking opportunities to expand my skills and stay ahead of the curve in the ever-evolving world of technology.</p>`;

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
        <Experience data={resume.work} includeNonHighlights="true"/>
    {:catch error}
    error
    {/await}
</div>

<style lang="scss">
    .home-wrapper {
        margin-top: 40px;

        & > :global([class*="wrapper "]) {
            margin: 25px 40px;
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