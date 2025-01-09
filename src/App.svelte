<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Career from "./pages/Career.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import Resume from "./pages/Resume.svelte";
  import Blog from "./pages/Blog.svelte";
  import Navigation from "./components/Navigation.svelte";

  export let url = "";

  const links = [
    {
      "path": '/',
      "component": Home,
      "name": "Home"
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

</script>


<Router {url}>
  <Navigation links={links} />
  <main class="main-content">
    {#each links as link}
      <Route path="{link.path}" component="{link.component}" />
    {/each}
  </main>
</Router>

<style>
  :global(:root) {
    --page-background-image: url(/src/images/page-background.jpg);
  }
</style>