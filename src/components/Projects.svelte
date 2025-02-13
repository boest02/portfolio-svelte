<script lang="ts">
    import Filter from './Filter.svelte';
    import Project from './Project.svelte';
    import ProjectCard from './ProjectCard.svelte';
    import Dialog from "../components/Dialog.svelte";

    export let data: any[] = [];
    export let type = 'bullets';

    let displayData: any[] = [];
    let more = false;
    let projectsElement: any = null;
    let dialogProject: any = null;
    let dialog:HTMLDialogElement | null = null;

    const openDialog = (project: any) => {
        dialog.open(Project, project);
    }

    const closeDialog = () => {
        dialogProject = null;
    }

    const dataProvider = (newData: any[]) => {
        displayData = newData;
    }

    dataProvider(data.map(project => ({ ...project, more: false })).sort((a, b) => a.name.localeCompare(b.name)));
</script>


<section class="projects-wrapper" bind:this={projectsElement}>
    <h2>My Projects -</h2>
    <Filter type="Projects..." list="{data}" callBack={dataProvider} />
    <div class="layout" class:alternate="{type === 'alternate'}">
        {#each displayData as project}
        <ProjectCard project="{project}" >
            <button slot="button" on:click={() => openDialog(project)}>Show Me</button>
        </ProjectCard>
        {/each}
    </div>
    <div class="no-records">Sorry no Projects to display...</div>
</section>
<Dialog bind:this={dialog} on:close={closeDialog}></Dialog>


<style lang="scss">
    .projects-wrapper {

        h2 {
            font-size: 125%;
            font-weight: bold;
            color: rgb(28, 141, 164);
            margin-bottom: 10px;
        }

        .no-records {
            display: none;
        }

        .layout {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;

            &:empty+.no-records {
                display: block;
                font-style: italic;
                margin: 20px;
                padding-bottom: 100px;
            }
        }
    }
</style>