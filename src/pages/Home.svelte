<script>
    import Outline from "../components/Outline.svelte";
    import Education from "../components/Education.svelte";
    import Aside from "../components/Aside.svelte";
    import Skills from "../components/Skills.svelte";
    import Strengths from "../components/Strengths.svelte";
    import Summary from "../components/Summary.svelte";
    import Profiles from "../components/Profiles.svelte";

    let fetchJson = fetch('my_resume_2.json').then(res => res.json()).then(jsn => { console.log("JSON:", jsn); return jsn; });

    let summary = `<p>Hello! I’m a seasoned front-end web developer with over 25 years of experience in the software industry. My journey in technology began with a strong foundation in C programming, where I worked on backup software for Windows, focusing on data movement and device control using SCSI interfaces. This early experience honed my problem-solving skills and attention to detail, which have been invaluable in my transition to web development.</p>
    <p>Today, I specialize in front-end development, with deep expertise in HTML, CSS, and JavaScript. Over the years, I've mastered modern frameworks like Svelte, Vue.js, React, and Angular, allowing me to craft dynamic, responsive, and user-friendly web applications. My background also includes experience in back-end development, particularly with PHP, Python, and Node.js, giving me a well-rounded skill set that bridges both the client and server sides of web development.</p>
    <p>I’m always eager to take on new challenges, constantly seeking opportunities to expand my skills and stay ahead of the curve in the ever-evolving world of technology.</p>`;

    document.body.setAttribute("data-page-name", "home");

</script>

<svelte:head>
    <title>Home - Stephen Boettcher</title>
</svelte:head>

<div class="home-wrapper page-content">
    {#await fetchJson}
    <h2>Loading...</h2>
    {:then resume}
    <div class="head-section">
        <Outline basics="{resume.basics}" type="home" />
        <Profiles profiles={resume.basics.profiles} />
    </div>
    <Summary summary={resume.basics.summary} title="About Me" />
    <Skills data={resume.skills} />
    {:catch error}
    error
    {/await}
</div>

<style lang="scss">
    .home-wrapper {
        margin-top: 40px;
        animation: 3s 1 forwards fade-in, 1s 1 forwards slide-in;

        &> :global([class*="wrapper "]) {
            margin: 25px 40px;
        }

        .head-section {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px;

            :global(.outline-wrapper) {
                flex-basis: 450px;
            }

            :global(.profiles-wrapper) {
                flex-basis: 50%;
            }
        }
    }

    @media only screen and (max-width:480px) {
        .home-wrapper {
            margin-top: 20px;

            &> :global([class*="wrapper "]) {
                margin: 15px;
            }
        }
    }

    @keyframes slide-in {
        from {
            transform: translateY(20%);
        }

        to {
            transform: translateY(0%);
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>