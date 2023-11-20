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
