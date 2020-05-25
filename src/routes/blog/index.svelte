<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style lang="scss">
  @import '../../utils/theme';

  h2,
  ul {
    grid-column: 2;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .posts-list {
    margin-top: 20px;
  }

  .section-title,
  .post-title {
    font-size: 18px;
    font-weight: bold;
    color: var(--white);
  }

  .post-title {
    margin: 0;
    text-shadow: 0 0 4px transparent;
    transition: all 0.2s ease-out;
  }

  .post-meta,
  .post-summary {
    color: var(--muted);
  }

  .post-meta {
    margin-bottom: 10px;
  }

  .post-summary {
    transition: all 0.2s ease-out;

    :global(p) {
      margin: 0;
    }
  }

  .post {
    &:not(:last-child) {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #{transparentize($primary, 0.8)};
    }

    &:hover {
      .post-title {
        color: var(--primary);
        text-shadow: 0 0 4px var(--primary);
      }

      .post-summary {
        color: var(--white);
      }
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="posts container">
  <h2 class="section-title">Latest Posts</h2>
  <ul class="posts-list">
    {#each posts as post (post.slug)}
      <li class="post">
        <a href="blog/{post.slug}" rel="prefetch">
          <h3 class="post-title">{post.title}</h3>
        </a>
        <div class="post-meta">
          <time>{post.date}</time>
        </div>
        <div class="post-summary">
          {@html post.summary}
        </div>
      </li>
    {/each}
  </ul>
</section>
