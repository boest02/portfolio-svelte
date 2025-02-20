<script lang="ts">
  import Heading from "./Heading.svelte";
  import Bullets from "./Bullets.svelte";
  export let data: any[] = [];

  const experienceList = data.slice(0, 3);
  let pastExperience: { [key: string]: any[] } = {};

  const consolidateByCompany = (jobs: any[]) => {
    jobs.forEach((job) => {
      if (job.resume) {
        pastExperience[job.name] === undefined &&
          (pastExperience[job.name] = []);
        pastExperience[job.name].push(job);
      }
    });
  };

  consolidateByCompany(data.slice(3));
</script>

<section class="experience-wrapper block">
  <h2>Experience:</h2>
  {#each experienceList as job}
    <section>
      <h2>
        <div>{job.name} -</div>
        <Heading title={job.position} start={job.startDate} end={job.endDate} />
      </h2>

      <div class="highlights-wrapper">
        <Bullets list={job.highlights} />
      </div>
    </section>
  {/each}

  <h2>Past Experience:</h2>
  <div class="past-experience-wrapper">
    {#each Object.keys(pastExperience) as company}
      <section>
        <h2>{company}</h2>
        {#each pastExperience[company] as job}
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

    .past-experience-wrapper {
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
