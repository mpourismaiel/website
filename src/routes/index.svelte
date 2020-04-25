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
  import BookPreview from '../components/BookPreview.svelte';
  export let books;
  export let posts;
</script>

<style lang="scss">
  .books {
    margin: 25px -15px;
    padding: 15px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);

    [class*='-intro'] {
      margin-top: 0;
    }

    .inner {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;

      @media screen and (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  .with-more {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  :global(.more) {
    display: flex;
    align-items: center;
    color: var(--darkerAccent);

    i {
      margin-left: 5px;
    }
  }

  h3[class*='-intro'] {
    margin-top: 60px;
    font-size: 32px;
    font-weight: bold;
    color: var(--darkerAccent);

    @media screen and (max-width: 700px) {
      font-size: 22px;
    }
  }

  .blog-post {
    &:first-child {
      font-size: 16px;
      color: var(--text);

      .blog-post-summary {
        margin-left: 0;
      }
    }

    &-title {
      color: var(--lighterAccent);

      &.big h2 {
        color: var(--accent);
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 0;

        @media screen and (max-width: 700px) {
          font-size: 28px;
        }
      }

      h2 {
        font-size: 26px;
        font-weight: normal;

        @media screen and (max-width: 700px) {
          font-size: 20px;
        }
      }
    }

    &-meta {
      color: var(--info);
      font-size: 14px;
    }

    &-summary {
      font-size: 18px;
      margin-left: 10px;
    }
  }

  :global(.blog-post .more) {
    display: inline-flex;
    font-size: 0.9em;

    &,
    i {
      margin-left: 5px;
    }
  }

  mark {
    color: var(--accent);
    background-color: transparent;
  }

  .intro {
    height: 100vh;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    * {
      width: 100%;
      max-width: 500px;
      text-align: left;
    }

    .hi {
      font-size: 22px;
    }

    .name {
      display: inline;
      font-size: 40px;
      font-weight: bold;
      background-color: transparent;
      margin: 5px 0;
    }

    .subtitle {
      margin: 0;
      color: var(--info);
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="intro">
  <div class="hi">
    <mark>Hi,</mark>
    my name is
  </div>
  <div>
    <h1 class="name">Mahdi Pourismaiel</h1>
    <span class="dot">.</span>
  </div>
  <p class="subtitle">
    I am a Front-end Developer with a passion for games.
    <br />
    You can check out my
    <mark>
      <a href="https://github.com/mpourismaiel">Github!</a>
    </mark>
  </p>
</div>

<div class="books">
  <div class="with-more">
    <h3 class="books-intro">Books I recommend!</h3>
    <a class="more" rel="prefetch" href="books">
      See More
      <i class="ti ti-arrow-right" />
    </a>
  </div>
  <div class="inner">
    {#each books.slice(0, 4) as book (book.title)}
      <BookPreview {book} />
    {/each}
  </div>
</div>

<div class="blog-post-latest-title">
  <span>Latest posts</span>
</div>
<div class="blog">
  <article class="blog-post latest">
    <a class="blog-post-title big" rel="prefetch" href="blog/{posts[0].slug}">
      <h2>{posts[0].title}</h2>
    </a>
    <div class="blog-post-meta">{posts[0].date}</div>
    <div class="blog-post-summary">
      {@html posts[0].summary}
    </div>
  </article>
  {#each posts.slice(1) as post (post.title)}
    <article class="blog-post">
      <a class="blog-post-title" rel="prefetch" href="blog/{post.slug}">
        <h2>
          {post.title}
          <span class="blog-post-meta">{post.date}</span>
        </h2>
      </a>
      <div class="blog-post-summary">
        {@html post.summary}
      </div>
    </article>
  {/each}
</div>
