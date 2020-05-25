<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style lang="scss">
  .post {
    grid-column: 2;
  }

  .actions {
    margin-bottom: 20px;

    .action {
      display: flex;
      align-items: center;
      color: var(--muted);
      font-weight: bold;

      i {
        margin-right: 5px;
      }
    }
  }

  .post-title {
    color: var(--white);
    font-size: 22px;
    font-weight: bold;
  }

  .post-title {
    margin: 0;
    text-shadow: 0 0 4px transparent;
    transition: all 0.2s ease-out;
  }

  .post-meta {
    color: var(--muted);
  }

  .post-meta {
    margin-bottom: 10px;
  }

  .post-content {
    color: var(--white);
  }

  .post-content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .post-content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .post-content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .post-content :global(ul) {
    line-height: 1.5;
  }

  .post-content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="container">
  <article class="post">
    <div class="actions">
      <a href="blog" rel="prefetch" class="action">
        <i class="gg-arrow-left" />
        <span>Back</span>
      </a>
    </div>
    <h1 class="post-title">{post.title}</h1>
    <div class="post-meta">
      <time>{post.date}</time>
    </div>

    <div class="post-content">
      {@html post.html}
    </div>
  </article>
</div>
