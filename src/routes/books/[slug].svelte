<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`books/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { book: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let book;
</script>

<style lang="scss">
  .book {
    grid-column: 2;
    display: flex;

    img {
      width: 300px;
      margin-right: 15px;
    }

    &-meta {
      color: var(--muted);
    }

    :global(.review) {
      color: var(--white);
    }

    .details {
      width: 100%;
    }
  }

  h1 {
    color: var(--white);
  }

  h3 {
    font-size: 20px;
    margin: 50px 0 10px;
    color: var(--white);
  }

  .with-more {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .more {
    display: inline-flex;
    align-items: center;

    i {
      margin-left: 5px;
    }
  }
</style>

<svelte:head>
  <title>{book.title}</title>
</svelte:head>

<section class="container">
  <article class="book">
    <img src={book.cover} alt={book.title} />
    <div class="details">
      <div class="info">
        <h1>{book.title}</h1>
        <div class="book-meta">
          Author:
          <b class="more">
            <a class="more" target="blank" href={book.authorLink}>
              {book.author}
            </a>
            <i class="ti ti-arrow-right" />
          </b>
        </div>
        <div class="book-meta">
          Genre:
          <b>{book.genre}</b>
        </div>
        <div class="book-meta">
          <div class="with-more">
            <div class="info">
              Goodreads Rating:
              <b>{book.rating}/5</b>
            </div>
            <a class="more" target="blank" href={book.link}>
              See More on Goodreads!
              <i class="ti ti-arrow-right" />
            </a>
          </div>
        </div>
      </div>

      {#if book.review}
        <div class="review">
          <h3>What do I think about it?</h3>
          {@html book.review}
        </div>
      {/if}
    </div>
  </article>
</section>
