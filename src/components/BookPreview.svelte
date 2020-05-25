<script>
  export let book;
</script>

<style lang="scss">
  @import '../utils/theme';

  .book {
    display: grid;
    grid-template-columns: 58px 1fr;

    &:not(:last-child) {
      border-bottom: 1px solid #{transparentize($primary, 0.8)};
    }

    img {
      grid-column: 1;
      grid-row: 1 / 3;
      margin: 10px 10px 10px 0;
      width: 48px;
      height: 48px;
      object-fit: cover;

      @media screen and (max-width: 700px) {
        max-height: 200px;
      }
    }

    .title {
      grid-column: 2;
      font-size: 18px;
      font-weight: bold;
      margin: 10px 0 0;
      color: var(--white);
      text-shadow: 0 0 4px transparent;
      transition: all 0.2s ease-out;

      @media screen and (max-width: 700px) {
        font-size: 18px;
      }
    }

    &:hover,
    &:active,
    &:focus {
      .title {
        color: var(--primary);
        text-shadow: 0 0 4px var(--primary);
      }
    }

    .author {
      grid-column: 2;
      font-size: 14px;
      font-weight: normal;
      color: var(--muted);
      margin: 0;
    }
  }
</style>

<a rel="prefetch" href="books/{book.slug}" class="book">
  <img src={book.cover} alt={book.title} />
  <div>
    <h2 class="title">{book.title}</h2>
    <h4 class="author">By {book.author}</h4>
  </div>
</a>
