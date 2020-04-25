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
  .books {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;

    &-intro {
      margin-top: 0;
      font-size: 32px;
      font-weight: bold;
    }
  }
</style>

<h2 class="books-intro">Books I recommend!</h2>
<div class="books">
  {#each books as book (`${book.title} by ${book.author}`)}
    <BookPreview {book} />
  {/each}
</div>
