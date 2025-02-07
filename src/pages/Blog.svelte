<script lang="ts">
  import BlogPost from "../components/BlogPost.svelte";
  import { getBlogPost } from "../ts/utils";

  const blogPosts = [
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

  let blogPost = getBlogPost("/blog/000001.md").then((post) => post);

  document.body.setAttribute("data-page-name", "blog");

  const loadBlogPost = async (fileName: string) => {
    console.log(`/blog/${fileName}.md`);
    blogPost = getBlogPost(`/blog/${fileName}.md`).then((post) => post);
  };
</script>

<svelte:head>
  <title>Stephen Boettcher - Blog</title>
  <link rel="canonical" href="https://sboettcher.com/blog" />
  <meta name="description" content="Stephen Boettcher's blog" />
</svelte:head>

<div class="blog-wrapper page-content">
  <h1>Blog Posts</h1>
  <div class="blog-post-layout">
    <div class="blog-post">
      {#await blogPost}
        <h2>Loading...</h2>
      {:then blogPost}
        <BlogPost data={blogPost} />
      {/await}
    </div>
    <div class="blog-post-list">
      <h2>All Posts...</h2>
      <ul>
        {#each blogPosts as blogPost}
          <li>
            <button
              class="blog-post-link"
              on:click={() => loadBlogPost(blogPost.fileName)}
              title={blogPost.title}
            >
              {blogPost.title}
            </button>
          </li>
        {/each}
      </ul>
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

    h1 {
      color: #fff;
      text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    }

    .blog-post-layout {
      display: grid;
      grid-template-columns: 3fr 1.2fr;
      gap: 20px;
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
      padding: 20px;
    }
    .blog-post-list {
      padding: 0 20px;
      border-left: 2px solid gray;
      h2 {
        margin-bottom: 5px;
      }
      ul {
        list-style: none;
        padding-block: 15px;
        border-top: 2px solid gray;

        li {
          margin-bottom: 10px;

          .blog-post-link {
            cursor: pointer;
            border: none;
            padding: 2px 0;
            margin: 0;
            width: min(325px, 25vw);
            text-align: left;
            background: rgba(0, 0, 0, 0.1);
            color: #000;
            white-space: nowrap; /* Prevents text from wrapping */
            overflow: hidden; /* Hides overflowing text */
            text-overflow: ellipsis;

            &:hover {
              color: #fff;
              background-color: rgba(0, 0, 0, 0.3);
              outline: 1px solid gray;
            }
          }
        }
      }
    }

    // mobile
    @media only screen and (max-width: 480px) {
      width: 98%;
      font-size: 90%;
      .blog-post-layout {
        display: flex;
        flex-direction: column-reverse;
        width: 98%;
        margin: 20px auto;
        padding-inline: 10px;

        .blog-post {
          padding-inline: 10px;
        }

        .blog-post-list {
          border: none;

          ul {
            height: 100px;
            overflow-y: scroll;
          }

          .blog-post-link {
            width: 100%;
          }

        }
      }
    }
  }
</style>
