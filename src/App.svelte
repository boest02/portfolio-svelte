<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import Resume from "./pages/Resume.svelte";
  import Navigation from "./components/Navigation.svelte";

  export let url = "";

  const links = [
    {
      "path": '/',
      "component": Home,
      "name": "Home"
    },
    {
      "path": '/about',
      "component": About,
      "name": "About"
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