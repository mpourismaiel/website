<script>
  export let book;
</script>

<style lang="scss">
  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;

    @media screen and (max-width: 700px) {
      max-height: 200px;
    }
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--accent);

    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
  }

  .author {
    font-size: 14px;
    font-weight: normal;
    color: var(--info);
    margin: 0;
  }
</style>

<div>
  <a rel="prefetch" href="books/{book.slug}">
    <img src={book.cover} alt={book.title} />
    <h2 class="title">{book.title}</h2>
  </a>
  <h4 class="author">By {book.author}</h4>
</div>
