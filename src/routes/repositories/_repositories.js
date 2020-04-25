import { GraphQLClient } from 'graphql-request';

const query = `{
  repositoryOwner(login: "mpourismaiel") {
    ... on User {
      pinnedRepositories(first:5) {
        edges {
          node {
            name
            url
            description
            primaryLanguage {
              name
              color
            }
            forks {
              totalCount
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
}`;

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: 'Bearer 88b97cf3f3507890de88a28a9cf40dbb58091b87',
  },
});

let cache = null;

export default async function getRepositories() {
  if (cache === null) {
    cache = await client
      .request(query)
      .then(res =>
        res.repositoryOwner.pinnedRepositories.edges.map(({ node }) => node),
      );
  }

  return cache;
}
