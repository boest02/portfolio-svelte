<script>
    import Outline from "./Outline.svelte";
    import Experience from "./Experience.svelte";
    import Education from "./Education.svelte";
    import Aside from "./Aside.svelte";
    import Skills from "./Skills.svelte";
    import Strengths from "./Strengths.svelte";
    import Summary from "./Summary.svelte";

    let fetchJson = fetch('my_resume_2.json').then(res => res.json());
</script>

<svelte:head>
    <title>Resume - Stephen Boettcher</title>
</svelte:head>

<div class="resume-wrapper page-content">
    <h1>Resume</h1>
    {#await fetchJson}
        <h2>Loading...</h2>
    {:then resume}
        <Outline type="resume" basics="{resume.basics}" />
        <Summary summary="{resume.basics.summary}" />
        <Skills data={resume.skills} />
        <Experience data={resume.work} />
        <Education data={resume.education} />
    {:catch error}
    error
    {/await}
</div>

<style lang="scss">
    .resume-wrapper {
        position: relative;
        padding: 50px;

        @media only screen and (max-width:480px) {
            padding: 30px 10px;
        }

        h1 {
            font-size: 1.2rem;
            color: #ded8d8;
            position: absolute;
            right: 10px;
            top: 15px;
            font-style: italic;

            &::before,
            &::after {
                content: "*";
                padding: 0 5px;
            }
        }
    }
</style>