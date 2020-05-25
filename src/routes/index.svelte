<script context="module">
  function fetchBooks(_this) {
    return _this.fetch(`books.json`).then(res => res.json());
  }

  function fetchPosts(_this) {
    return _this.fetch(`blog.json`).then(res => res.json());
  }

  export function preload() {
    return Promise.all([fetchPosts(this), fetchBooks(this)]).then(
      ([posts, books]) => ({
        posts,
        books,
      }),
    );
  }
</script>

<script>
  export let posts;
</script>

<style lang="scss">
  @import '../utils/theme';

  .section-title {
    font-size: 18px;
    font-weight: bold;
    color: var(--white);
  }

  .about {
    h2,
    .info {
      grid-column: 2;
    }

    .info {
      padding-bottom: 20px;
      margin-bottom: 30px;
      border-bottom: 1px solid #{transparentize($muted, 0.7)};
    }

    p {
      margin: 0 0 5px;
      color: var(--muted);
    }

    a {
      color: var(--white);
      transition: all 0.2s ease-out;
      text-shadow: 0 0 4px transparent;

      &:hover,
      &:focus,
      &:active {
        color: var(--primary);
        text-shadow: 0 0 4px var(--primary);
      }
    }
  }

  .posts {
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
        border-bottom: 1px solid #{transparentize($muted, 0.7)};
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
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<section class="about container">
  <h2 class="section-title">About Me</h2>
  <div class="info">
    <p>
      My name is Mahdi Pourismaiel. I am a web developer, specializing in front
      end development. I use React, Svelte, Hugo and Gatsby to do my work.
    </p>
    <p>
      I'm very proud of the work I do with Okkur Labs, and I also work on my own
      fun projects.
    </p>
    <p>
      You can check out my work on my
      <a href="https://github.com/mpourismaiel">Github profile</a>
      .
    </p>
  </div>
</section>

<section class="posts container">
  <h2 class="section-title">Latest Posts</h2>
  <ul class="posts-list">
    {#each posts as post (post.slug)}
      <li class="post">
        <a href="blog/{post.slug}" rel="prefetch">
          <h3 class="post-title">{post.title}</h3>
          <div class="post-meta">
            <time>{post.date}</time>
          </div>
          <div class="post-summary">
            {@html post.summary}
          </div>
        </a>
      </li>
    {/each}
  </ul>
</section>
