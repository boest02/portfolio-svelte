<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";
  import BlogPost from "../components/BlogPost.svelte";
  import { getBlogPost } from "../ts/utils";

  type Post = {
    title: string;
    fileName: string;
  };

  const blogPosts: Post[] = [
    {
      title: "Vanilla CSS vs Tailwind CSS",
      fileName: "000001",
    },
    {
      title: "The Hidden Costs of Overloading Your Project with NPM Packages",
      fileName: "000002",
    },
    {
      title: "CSS Nesting: When to Use It and When to Avoid It",
      fileName: "000003",
    },
  ];

  let message: any = {};

  const urlParams = new URLSearchParams(window.location.search);
  const post: string = urlParams.get("post") || "000001";
  const postObj: Post =
    blogPosts.find((p) => p.fileName === post) || blogPosts[0];
  console.log("Load Post: ", { post, postObj });

  // let blogPost = getBlogPost(`/blog/${postObj.fileName}.md`).then((p) => p);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/blog/${currentPost}`
    );
    message.classList.toggle('show');
    setTimeout(() => message.classList.toggle('show'), 1200);
  }

  let currentPost = postObj.fileName;
  let blogPost = getBlogPost(`/blog/${currentPost}.md`).then((p) => p);

  const selectHandler = (evt) => {
    console.log(evt.target?.value);
    window.location = `${window.location.origin}/blog/${evt.target?.value}`;
  };

  document.body.setAttribute("data-page-name", "blog");
</script>

<svelte:head>
  <title>Stephen Boettcher - Blog</title>
  <link rel="canonical" href="https://sboettcher.com/blog" />
  <meta name="description" content="Stephen Boettcher's blog" />
</svelte:head>

<div class="blog-wrapper page-content">
  <div class="blog-selector">
    <label for="posts">Blog Selector</label>
    <select name="posts" id="posts" on:change={selectHandler}>
      {#each blogPosts as blogPost}
        {#if blogPost.fileName === currentPost}
          <option selected value={blogPost.fileName}>{blogPost.title}</option>
        {:else}
          <option value={blogPost.fileName}>{blogPost.title}</option>
        {/if}
      {/each}
    </select>
  </div>

  <div class="blog-post-layout">
    <div class="blog-post">
      {#await blogPost}
        <h2>Loading...</h2>
      {:then blogPost}
        <aside bind:this={message} class="message">Copied to clipboard!</aside>
        <div
          class="perma-link"
          on:click={copyToClipboard}
          title="copy link to clipboard"
        >
        <i class="fa-solid fa-link"></i>
        </div>

        <BlogPost data={blogPost} />
      {/await}
    </div>
  </div>
</div>

<style lang="scss">
  :global([data-page-name="blog"]) {
    --page-background-image: url("/src/images/dark-workspace-blogging-backdrop.jpg");
  }

  .blog-wrapper {
    height: fit-content;
    min-height: 100vh;
    border-radius: 10px;
    background: rgba(81, 50, 27, 0.35);
    .blog-selector {
      display: flex;
      align-items: center;
      gap: 15px;
      padding-block: 10px;
      place-self: end;
      margin-right: 30px;

      label {
        font-weight: 700;
      }

      select {
        max-width: 375px;
        height: 30px;
        text-overflow: ellipsis;
        background-color: #fff;
        color: #000;
        border-radius: 5px;
        padding-inline: 5px;
      }
    }

    .blog-post-layout {
      border: 1px solid #2c3e50;
      border-radius: 10px;
      margin: 20px;
      padding: 20px;
      height: fit-content;
      min-height: 450px;
      background-color: #f0f0f0;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    .blog-post {
      margin-top: 40px;
      padding: 20px;
      position: relative;

      .message {
        opacity: 0;
        color: #000;
        font-size: 1rem;
        font-style: italic;
        outline: 0.5px solid gray;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        padding-inline: 2px;
        position: absolute;
        right: 100px;
        height: 35px;
        width: fit-content;
        padding-inline: 10px;
        display: none;
        place-content: center;
        transition: opacity 1s;

        &:global(.show) {
          display: grid;
          animation: 1s ease-out forwards float-in-out;
        }
      }

      .perma-link {
        color: #000;
        font-size: 1.2rem;
        text-decoration: none;
        outline: 0.5px solid #000;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        padding-inline: 2px;
        position: absolute;
        right: 50px;
        top: -20px;
        height: 35px;
        width: 40px;
        display: grid;
        place-content: center;


        &::before {
          content: 'Get a link';
          width: 200px;
          left: -25%;
          font-size: .7rem;
          position: absolute;
          top: -20px;
          color: #000;
        }

        &:hover {
          background: gray;
          color: #fff;
        }
      }
    }

    // mobile
    @media only screen and (max-width: 480px) {
      width: 98%;
      font-size: 90%;

      .blog-selector {
        flex-direction: column;
        gap: 2px;
        align-items: start;
        margin: 0 auto;
        width: 95%;
        select {
          max-width: unset;
          width: 100%;
        }
      }
      .blog-post-layout {
        display: flex;
        flex-direction: column-reverse;
        width: 98%;
        margin: 20px auto;
        padding-inline: 10px;

        .blog-post {
          padding-inline: 10px;

          .perma-link {
            transform: scale(.9);
            right: 10px;
          }
        }
      }
    }
  }

  @keyframes float-in-out {
    0% {
      top: -50px;
      opacity: 0;
    }

    75% {
      top: -20px;
      opacity: .9;
    }

    100% {
      top: -20px;
      opacity: .2;
    }
  }
</style>
