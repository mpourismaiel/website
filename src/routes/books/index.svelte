<script context="module">
  export function preload() {
    return this.fetch(`books.json`)
      .then(res => res.json())
      .then(books => ({ books }));
  }
</script>

<script>
  import BookPreview from '../../components/BookPreview.svelte';
  export let books;
</script>

<style lang="scss">
  .books-intro,
  .books {
    grid-column: 2;
  }

  .books-intro {
    font-size: 18px;
    font-weight: bold;
    color: var(--white);
  }

  .books {
    margin-top: 20px;
  }
</style>

<section class="container">
  <h2 class="books-intro">Books I recommend!</h2>
  <div class="books">
    {#each books as book (`${book.title} by ${book.author}`)}
      <BookPreview {book} />
    {/each}
  </div>
</section>
