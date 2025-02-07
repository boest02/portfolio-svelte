<script lang="ts">
  import { Router, Route, navigate } from "svelte-routing";
  import { setContext } from 'svelte';
  import Home from "./pages/Home.svelte";
  import Career from "./pages/Career.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import Resume from "./pages/Resume.svelte";
  import Blog from "./pages/Blog.svelte";
  import Navigation from "./components/Navigation.svelte";

  export let url = "";

  const urlParams = new URLSearchParams(window.location.search);
  const resType = urlParams.get('type') || "fe_dev";
  const page = urlParams.get('page') || "";


  setContext("resumeType", resType);

  let resumeFiles = {
    fe_dev: "resume_dev.json",
    full_stack: "resume_full.json",
    tpm: "resume_tpm.json"
  };

  setContext("resumeFiles", resumeFiles);

  const links = [
    {
      "path": '/',
      "component": Home,
      "name": "Home"
    },
    {
      "path": '/portfolio',
      "component": Portfolio,
      "name": "Portfolio"
    },
    {
      "path": '/resume',
      "component": Resume,
      "name": "Resume"
    },
    {
      "path": '/blog',
      "component": Blog,
      "name": "Blog"
    }
  ];

  // direct route with page=<page name>
  console.log(`\\${page}`);
  if(page) navigate(`\\${page}`);

</script>

<Router {url}>
  <Navigation links={links} />
  <main class="main-content">
    {#each links as link}
    <Route path="{link.path}">
      <svelte:component this={link.component} />
    </Route>
    {/each}
  </main>
</Router>

<style>
  :global(:root) {
    --page-background-image: url(/src/images/page-background.jpg);
  }
</style>