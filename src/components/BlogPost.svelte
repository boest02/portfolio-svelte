<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  export let data: string = `

# Sample Blog Post

## This is a subheader

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
* With another
* Sublist inside

**Bold**

_Italic_

[Link](https://www.google.com)

![Image](/images/screenshots/in-page-placement.png)

| And this is | A table |
|-------------|---------|
| With two    | columns |`;
</script>

<section class="blog-post-wrapper block">
  <SvelteMarkdown source={data} />
</section>

<style lang="scss">
  .blog-post-wrapper {
    width: 100%;

    :global(h1) {
      font-size: 1.4rem;
      font-weight: 600;
    }

    :global(h2) {
      font-size: 1.2rem;
      font-weight: bolder;
      margin-block: 20px 10px;
      margin-inline: 2px;
    }

    :global(h3) {
      font-size: 1rem;
      font-weight: bold;
      margin-block: 20px 10px;
      margin-inline: 4px;
      &::after {
        content: ':';
      }
    }

    :global(h4) {
      font-size: 1rem;
      font-weight: 300;
      margin-top: 20px;
      margin-inline: 6px;
    }

    :global(h5) {
      font-size: 1rem;
      font-weight: 200;
      margin-top: 20px;
      margin-inline: 8px;
    }

    :global(p) {
      margin: 20px 5px;
      font-size: 0.9rem;
      line-height: 1.35;
    }

    :global(ul) {
      margin: 10px 40px 20px;
    }

    :global(ol) {
      margin: 10px 40px;
    }

    :global(img) {
      width: 50%;
      height: auto;
      max-width: 500px;
      margin: auto;
      box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);

      @media only screen and (max-width: 480px) {
        width: 90%;
      }
    }

    :global(pre) {
      background-color: hsl(219.2deg 50.55% 7.9%);
      color: #fff;
      font-size: 0.8rem;
      font-family: "Courier New", Courier, monospace;
      font-weight: 500;
      padding: 15px;
      margin-block: 20px;
      width: fit-content;
      min-width: 80%;
      border-radius: 5px;
      box-shadow: inset 10px 10px 10px rgba(255, 255, 255, 0.1);
    }

    :global(pre.html) {
      color: lime;
    }

    :global(pre.json) {
      color: yellow;
    }

    :global(pre.css) {
      color: cyan;
    }

    :global(pre.bash) {
      color: #baf770;
      font-style: italic;
    }

    :global(code) {
      white-space: pre-wrap;
    }
  }
</style>
