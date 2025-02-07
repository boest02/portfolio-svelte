<script lang="ts">
  import { getContext } from "svelte";
  import Outline from "../components/Outline.svelte";
  import Education from "../components/Education.svelte";
  import Aside from "../components/Aside.svelte";
  import Skills from "../components/Skills.svelte";
  import Strengths from "../components/Strengths.svelte";
  import Summary from "../components/Summary.svelte";
  import Profiles from "../components/Profiles.svelte";
  import Projects from "../components/Projects.svelte";
  import { type resume } from "../ts/resume";

  interface ResumeFiles {
    [key: string]: string;
  }

  const resumeType = getContext<string>("resumeType");
  const resumeFiles = getContext<ResumeFiles>("resumeFiles");

  console.log("Home", resumeFiles);

  let fetchJson = fetch(resumeFiles[resumeType])
    .then((res) => res.json())
    .then((jsn) => {
      console.log("JSON:", jsn);
      return jsn;
    });

  document.body.setAttribute("data-page-name", "home");
</script>

<svelte:head>
  <title>Stephen Boettcher - Resume and Portfolio</title>
  <link rel="canonical" href="https://sboettcher.com/" />
  <meta name="description" content="Stephen Boettcher's resume and portfolio" />
</svelte:head>

<div class="home-wrapper page-content">
  {#await fetchJson}
    <h2>Loading...</h2>
  {:then resume}
    <div class="head-section">
      <Outline basics={resume.basics} type="home" />
    </div>
    <Summary
      summary={resume.basics.home_summary}
      title="About Me -"
      homeLook={true}
    />

    {#if resume.projects.length}
      <Projects data={resume.projects} />
    {/if}
  {:catch error}
    {error}
  {/await}
</div>

<style lang="scss">
  :global([data-page-name="home"]) {
    --page-background-image: url("/src/images/dark-moody-blue-color-old-cement.avif");
  }

  .home-wrapper {
    margin-top: 40px;
    animation:
      3s 1 forwards fade-in,
      1s 1 forwards slide-in;

    & > :global([class*="wrapper "]) {
      margin: 25px 40px;
    }

    .head-section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding-block: 30px 10px;
      width: 95%;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 480px) {
    .home-wrapper {
      margin-top: 20px;

      & > :global([class*="wrapper "]) {
        margin: 15px;
      }
    }
  }

  @keyframes slide-in {
    from {
      transform: translateY(20%);
    }

    to {
      transform: translateY(0%);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
