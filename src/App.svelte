<script lang="ts">
  import { Router, Route, navigate } from "svelte-routing";
  import { setContext } from 'svelte';
  import Home from "./pages/Home.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import Resume from "./pages/Resume.svelte";
  import Blog from "./pages/Blog.svelte";
  import Career from "./pages/Career.svelte";
  import Navigation from "./components/Navigation.svelte";

  export let url = "";

  const urlParams = new URLSearchParams(window.location.search);
  const resType = urlParams.get('type') || "fe_dev";
  const page = urlParams.get('page') || "";
  const post = urlParams.get('post') || "";


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
      "path": '/resume',
      "component": Resume,
      "name": "Resume"
    },
    {
      "path": '/career',
      "component": Career,
      "name": "Career"
    },
    {
      "path": '/portfolio',
      "component": Portfolio,
      "name": "Portfolio"
    },
    {
      "path": '/blog',
      "component": Blog,
      "name": "Blog"
    }
  ];

  const navExcludeList: string[] = [

  ];

  console.log("parse url:", window.location.pathname.split('/'));

  console.log(`\\${page}`);
  if(page) navigate(post ? `\\${page}?post=${post}` : `\\${page}`);


</script>

<Router {url}>
  <Navigation links={links} exclude={navExcludeList}/>
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