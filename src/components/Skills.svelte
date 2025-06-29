<script lang="ts">
  import Lists from "./Lists.svelte";
  import Table from "./Table.svelte";

  export let data: { name: string; keywords: string[] }[] = [];
</script>

<section class="skills-wrapper block">
  <h2>Skills:</h2>
  <div class="skills-layout">
    {#each data as skill}
      <Table title={skill.name} list={skill.keywords} />
    {/each}
  </div>
</section>

<style lang="scss">
  .skills-layout {
    margin: 0 10px;   

    @media (max-width: 700px) {
      
    }
  }
</style>
