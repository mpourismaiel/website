const books = [
  {
    title: 'Sapiens: A Brief History of Humankind',
    slug: 'sapiens-brief-history-humankind',
    author: 'Yuval Noah Harari',
    cover: '/books/sapiens.jpg',
  },
  {
    title: 'World War Z',
    slug: 'world-war-z',
    author: 'Max Brooks',
    cover: '/books/wwz.jpg',
  },
  {
    title: 'iWoz',
    slug: 'iwoz',
    author: 'Gina Smith and Steve Wozniak',
    cover: '/books/iwoz.jpg',
  },
  {
    title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
    slug: 'elon-musk-quest-for-fantastic-future',
    link: 'https://www.goodreads.com/book/show/25541028-elon-musk',
    author: 'Ashlee Vance',
    authorLink: 'https://www.goodreads.com/author/show/761595.Ashlee_Vance',
    genre: 'Biography, Nonfiction, Business',
    rating: '4.2',
    cover: '/books/elonmusk.jpg',
    review: `
    <p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
    `,
  },
  {
    title: 'Rework',
    slug: 'rework',
    author: 'David Heinemeier Hansson and Jason Fried',
    cover: '/books/rework.jpg',
  },
  {
    title: 'Remote: Office Not Required',
    slug: 'remote-office-not-required',
    author: 'David Heinemeier Hansson and Jason Fried',
    cover: '/books/remote.jpg',
  },
  {
    title: 'Lord of the Rings',
    slug: 'lord-of-the-rings',
    author: 'J. R. R. Tolkien',
    cover: '/books/lotr.jpg',
  },
  {
    title: 'The Silmarillion',
    slug: 'the-silmarillion',
    author: 'J. R. R. Tolkien',
    cover: '/books/silmarillion.jpg',
  },
];

books.forEach(book => {
  if (book.review) {
    book.review = book.review.replace(/^\t{3}/gm, '');
  }
});

export default books;
