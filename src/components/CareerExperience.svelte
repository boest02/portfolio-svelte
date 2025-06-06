<script lang="ts">
  import Heading from "./Heading.svelte";
  import Bullets from "./Bullets.svelte";
  export let data: any[] = [];

  let ascend = false;

  const sort = (a, b) => new Date(b.startDate) - new Date(a.startDate);
  const sortDirection = (a, b, direction) =>
    direction === true ? sort(a, b) : sort(b, a);

  let experienceList: any[] = [];

  $: {
    experienceList = data.sort((a, b) => sortDirection(b, a, ascend));
  }
</script>

<article class="experience-wrapper block">
  <h2>Full Career Experience:</h2>
  <button on:click={() => (ascend = !ascend)}
    >Sort Order: {ascend ? "Oldest" : "Newest"} First</button
  >
  {#each experienceList as job}
    <section>
      <h2>
        <a target="_blank" href={job.url}>{job.name}</a>
        <span>--</span>
        <Heading title={job.position} start={job.startDate} end={job.endDate} />
      </h2>

      <section class="summary">
        <h3>Summary</h3>
        <p>{job.summary}</p>
      </section>

      <section class="highlights-wrapper">
        <h3>Highlights</h3>
        <Bullets list={job.highlights} />
      </section>
    </section>
  {/each}
</article>

<style lang="scss">
  .experience-wrapper {
    :global(.date-wrapper) {
      display: none;
    }

    .summary p {
      margin: 10px 15px;
    }
    button {
      padding: 5px 10px;
      background: transparent;
      color: #000;
      border: 1px solid gray;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background: gray;
        color: #fff;
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
      }
    }

    section {
      display: flex;
      flex-direction: column;
      margin: 15px;

      h2 {
        display: flex;
        gap: 10px;
        font-weight: 700;
        text-wrap: nowrap;
        a {
          color: #000;
        }
      }

      .highlights-wrapper {
        margin: 5px 10px;
      }
    }

    @media only screen and (max-width: 480px) {
      section {
        margin: 5px;

        h2 {
          flex-direction: column;
          gap: 0;
        }

        .highlights-wrapper {
          margin: 5px auto;
        }
      }
    }
  }
</style>
