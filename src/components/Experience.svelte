<script lang="ts">
  import Heading from "./Heading.svelte";
  import Bullets from "./Bullets.svelte";
  export let data: any[] = [];
  export let consolidated: boolean = true;

  let sliceCount: number = 5;

  const consolidateByCompany = (jobs: any[]) =>
    jobs.reduce((acc, job) => {
      acc[job.name] =
        acc[job.name] === undefined ? [job] : [...acc[job.name], job];
      return acc;
    }, []);

  $: experienceList = consolidated
    ? consolidateByCompany(data.slice(0, sliceCount))
    : data.slice(0, sliceCount);
</script>

<section class="experience-wrapper block">
  <h2>Experience:</h2>
  {#if !consolidated}
    {#each experienceList as job}
      <section>
        <h2>
          <div>{job.name} -</div>
          <Heading
            title={job.position}
            start={job.startDate}
            end={job.endDate}
          />
        </h2>
        <div class="highlights-wrapper">
          <Bullets list={job.highlights} />
        </div>
      </section>
    {/each}
  {:else}
    <div class="consolidated-experience-wrapper">
      {#each Object.keys(experienceList) as company}
        <section>
          <h2>{company}</h2>
          {#each experienceList[company] as job}
            <Heading
              title={job.position}
              start={job.startDate}
              end={job.endDate}
            />
            <div class="highlights-wrapper">
              <Bullets list={job.highlights} />
            </div>
          {/each}
        </section>
      {/each}
    </div>
  {/if}
</section>

<style lang="scss">
  .experience-wrapper {
    section {
      display: flex;
      flex-direction: column;
      margin: 15px;

      h2 {
        display: flex;
        gap: 10px;
        font-weight: 700;
        text-wrap: nowrap;
      }

      .highlights-wrapper {
        margin: 5px 10px;
      }
    }

    .consolidated-experience-wrapper {
      section {
        margin: 0 15px;

        :global(.heading-wrapper) {
          margin: 5px 20px;
        }

        .highlights-wrapper {
          margin: 0 45px 5px;

          :global(.bullets-wrapper) {
            margin: 0 20px;
            font-size: 95%;
          }
        }
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
