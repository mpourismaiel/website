import books from './_books.js';

const contents = JSON.stringify(books);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
