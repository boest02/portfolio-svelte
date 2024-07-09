<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import Portfolio from "./components/Portfolio.svelte";
  import Resume from "./components/Resume.svelte";
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

</style>