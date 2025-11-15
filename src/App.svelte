<script lang="ts">
  import { Router, Route, navigate } from "svelte-routing";
  import { setContext } from "svelte";
  import Home from "./pages/Home.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import Resume from "./pages/Resume.svelte";
  import Blog from "./pages/Blog.svelte";
  import Career from "./pages/Career.svelte";
  import Contact from "./pages/Contact.svelte";
  import Navigation from "./components/Navigation.svelte";

  export let url = "";

  const urlParams = new URLSearchParams(window.location.search);
  const resType = urlParams.get("type") || "dev";
  const page = urlParams.get("page") || "";
  const post = urlParams.get("post") || "";

  setContext("resumeType", resType);

  let resumeFiles = {
    dev: "resume_dev.json",
    hardware: "resume_hw.json",
    ba: "business_analyst.json",
    sales: "resume_sales.json",
  };

  setContext("resumeFiles", resumeFiles);

  const links = [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/resume",
      component: Resume,
      name: "Resume",
    },
    {
      path: "/career",
      component: Career,
      name: "Career",
    },
    {
      path: "/contact",
      component: Contact,
      name: "Contact",
      hide: true
    },
    {
      path: "/portfolio",
      component: Portfolio,
      name: "Portfolio",
    },
    {
      path: "/blog",
      component: Blog,
      name: "Blog",
    },
  ];

  console.log("parse url:", window.location.pathname.split("/"));

  console.log(`\\${page}`);
  if (page) navigate(post ? `\\${page}?post=${post}` : `\\${page}`);
</script>

<Router {url}>
  <Navigation {links} />
  <main class="main-content">
    {#each links as link}
      <Route path={link.path}>
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
