<script lang="ts">
    import { getContext } from 'svelte';
    import Outline from "../components/Outline.svelte";
    import Experience from "../components/Experience.svelte";
    import Education from "../components/Education.svelte";
    import Aside from "../components/Aside.svelte";
    import Skills from "../components/Skills.svelte";
    import Strengths from "../components/Strengths.svelte";
    import Summary from "../components/Summary.svelte";
    import { type resume } from "../ts/resume";

    const resumeType: string    = getContext("resumeType");
    const resumeFiles: { [key: string]: string } = getContext("resumeFiles");

    let fetchJson = fetch(resumeFiles[resumeType]).then(res => res.json());

    document.body.setAttribute("data-page-name", "resume");

</script>

<svelte:head>
    <title>Stephen Boettcher - Resume</title>
    <link rel="canonical" href="https://sboettcher.com/resume">
    <meta name="description" content="Stephen Boettcher's resume">
</svelte:head>

<div class="resume-wrapper page-content">
    <h1>Resume</h1>
    {#await fetchJson}
        <h2>Loading...</h2>
    {:then resume}
        <Outline type="resume" basics="{resume.basics}" />
        <Summary summary="{resume.basics.res_summary}" />
        <Skills data={resume.skills} />
        <Experience data={resume.work} />
        <Education data={[resume.education[0]]} />
    {:catch error}
    error
    {/await}
</div>

<style lang="scss">
    .resume-wrapper {
        position: relative;
        padding: 50px 75px;

        @media only screen and (max-width:480px) {
            padding: 30px 10px;
            margin: 10px;
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