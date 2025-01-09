<script>
    document.body.setAttribute("data-page-name", "career");
</script>

<svelte:head>
	<title>Blog - Stephen Boettcher</title>
</svelte:head>

<div class="blog-wrapper page-content">
    <h1>Blog</h1>
    <h3>Coming Soon...</h3>
    <img class="main-image" src="https://sismo.app/wp-content/uploads/2019/02/under-construction-gif-11.gif" alt="under construction" />
</div>

<style lang="scss">
    .blog-wrapper {
        margin: 40px 20px;
        padding: 20px;
        min-height: 70vh;
        display: grid;
        place-items: center;

        h1 {
            margin: 20px;
            font-size: 34px;
            place-self: start left;
        }

        h3 {
            font-size: 24px;
            font-family: 'Courier New', Courier, monospace;
            font-style: italic;
        }

        .main-image {
            width: 100%;
            max-width: 1000px;
            border-radius: 20px;
            box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
        }
    }
</style>