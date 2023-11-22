export async function getNodeByURI(uri) {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                nodeByUri(uri: $uri) {
                  __typename
                  isContentNode
                  isTermNode
                  ... on Post {
                    id
                    title
                    date
                    uri
                    excerpt
                    content
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        mediaItemUrl
                        altText
                      }
                    }
                  }
                  ... on Page {
                    id
                    title
                    uri
                    date
                    content
                  }
                  ... on Category {
                    id
                    name
                    posts {
                      nodes {
                        date
                        title
                        excerpt
                        uri
                        categories {
                          nodes {
                            name
                            uri
                          }
                        }
                        featuredImage {
                          node {
                            altText
                            mediaItemUrl
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
      variables: {
        uri: uri
      }
    })
  });
  const { data } = await response.json();
  return data;
}
export async function getAllUris() {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllUris {
            terms {
              nodes {
                uri
              }
            }
            posts(first: 100) {
              nodes {
                uri
              }
            }
            pages(first: 100) {
              nodes {
                uri
              }
            }
          }
          `
    })
  });
  const { data } = await response.json();
  const uris = Object.values(data)
    .reduce(function (acc, currentValue) {
      return acc.concat(currentValue.nodes)
    }, [])
    .map(node => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1)
      return {
        params: {
          uri: trimmedURI
        }
      }
    })

  return uris;

}

export async function findLatestPosts() {
    const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `{
                posts(first: 4) {
                  nodes {
                    date
                    uri
                    title
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    commentCount
                    excerpt
                    featuredImage {
                      node {
                        mediaItemUrl
                        altText
                      }
                    }
                  }
                }
              }
            `
        })
    });
    const { data } = await response.json();
    return data.posts.nodes;
}

export async function PostsListQuery() {
    const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `{
                 posts(first: 1000) {
                    nodes {
                    date
                    uri
                    title
                    categories {
                        nodes {
                        name
                        }
                    }
                    tags {
                        nodes {
                        name
                        }
                    }
                    commentCount
                    excerpt
                    categories {
                        nodes {
                        name
                        uri
                        }
                    }
                    featuredImage {
                        node {
                        mediaItemUrl
                        altText
                        }
                    }
                    }
                }
            `
        })
    });
    const { data } = await response.json();
    return data.posts.nodes;
}
