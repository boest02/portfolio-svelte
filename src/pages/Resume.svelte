<script lang="ts">
  import { getContext } from "svelte";
  import Outline from "../components/Outline.svelte";
  import Experience from "../components/Experience.svelte";
  import Education from "../components/Education.svelte";
  import Skills from "../components/Skills.svelte";
  import Summary from "../components/Summary.svelte";

  import { type resume } from "../ts/resume";

  let resumeType: string = "dev";
  let resumeConsolidated: boolean = true;

  const resumeFiles: { [key: string]: string } = getContext("resumeFiles");

  $: fetchJson = fetch(resumeFiles[resumeType]).then((res) => res.json());

  document.body.setAttribute("data-page-name", "resume");
</script>

<svelte:head>
  <title>Stephen Boettcher - Resume</title>
  <link rel="canonical" href="https://sboettcher.com/resume" />
  <meta name="description" content="Stephen Boettcher's resume" />
</svelte:head>

<div class="resume-wrapper page-content">
  <h1>Resume</h1>

  <div class="tool-bar">
    <div class="resume-type">
      <label for="resume-type">View Me As...</label>
      <select id="resume-type" bind:value={resumeType}>
        <option value="dev">Full-Stack Developer</option>
        <option value="ba">Technical PM & BA</option>
        <option value="hardware">Systems Engineer</option>
        <option value="sales">Sales Engineer</option>
      </select>
      <label
        >Company Consolidation:
        <input
          type="checkbox"
          id="consolidated"
          bind:checked={resumeConsolidated}
        />
      </label>
    </div>
    <button on:click={() => window.print()}>Print Me</button>
  </div>

  {#await fetchJson}
    <h2>Loading...</h2>
  {:then resume}
    <Outline type="resume" basics={resume.basics} />
    <Summary summary={resume.basics.res_summary} title={resume.basics.label} />
    <Skills data={resume.skills} />
    <Experience data={resume.work} consolidated={resumeConsolidated} />
    <Education data={[resume.education[0]]} />
  {:catch error}
    error
  {/await}
</div>

<style lang="scss">
  .resume-wrapper {
    position: relative;
    padding: 90px 75px;

    .tool-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      position: relative;
      top: -30px;
      border: 1px solid #000;
      border-radius: 5px;
      padding: 5px 20px;
      width: 100%;

      .resume-type {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      label {
        font-weight: bold;
      }

      select {
        padding: 5px;
        margin-right: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 1rem;
        color: #333;
        cursor: pointer;
      }

      button {
        padding: 5px 10px;
        border: 1px solid #007bff;
        border-radius: 5px;
        background-color: #427bb7;
        color: #fff;
        cursor: pointer;
        font-size: 1rem;

        &:hover {
          background-color: #0056b3;
        }
      }
    }

    @media only screen and (max-width: 480px) {
      padding: 35px 10px;
      margin: 10px;
      .tool-bar {
        top: 20px;
        margin-bottom: 20px;
        flex-direction: column;
        justify-content: center;
        .resume-type {
          flex-direction: column;
          justify-content: center;
        }
      }
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
