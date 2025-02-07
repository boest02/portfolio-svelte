
<script lang="ts">
  import { Link } from "svelte-routing";
  import BlogPost from "../components/BlogPost.svelte";
  import { getBlogPost } from "../ts/utils";
  import Blog from "./Blog.svelte";

  type Post = {
    title: string,
    fileName: string
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

  const urlParams = new URLSearchParams(window.location.search);
  const post: string = urlParams.get('post') || "000001";
  const postObj: Post = blogPosts.find(p => p.fileName === post) || blogPosts[0];
  console.log("Load Post: ", {post, postObj});

  let blogPost = getBlogPost(`/blog/${postObj.fileName}.md`).then((p) => p);

  document.body.setAttribute("data-page-name", "post");

</script>

<svelte:head>
  <title>Stephen Boettcher - Post: {postObj.title}</title>
  <link rel="canonical" href={`https://sboettcher.com/post?post=${postObj.fileName}`} />
  <meta name="description" content="Stephen Boettcher's Blog Post" />
</svelte:head>

<div class="post-wrapper page-content">
  <Link to='blog'>Back to Blogs...</Link>
  <div class="blog-post">
    {#await blogPost}
      <h2>Loading...</h2>
    {:then blogPost}
      <BlogPost data={blogPost} />
    {/await}
  </div>
</div>

<style lang="scss">
  :global([data-page-name="post"]) {
    --page-background-image: url("/src/images/dark-workspace-blogging-backdrop.jpg");
  }

  :global(.post-wrapper > a) {
    color: #000;
    position: absolute;
    top: 25px;
    right: 50px;
  }

  .post-wrapper {
    padding: 50px 40px;
    position: relative;

    // mobile
    @media only screen and (max-width: 480px) {


    }
  }
</style>
