import getRepositories from './_repositories';

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  getRepositories().then(data => res.end(JSON.stringify(data)));
}
