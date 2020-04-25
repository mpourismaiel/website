import posts from './_posts.js';

const contents = JSON.stringify(
  posts.map(({ title, slug, summary, date }) => {
    return {
      title,
      slug,
      summary,
      date,
    };
  }),
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
