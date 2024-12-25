const POST_GRAPHQL_FIELDS = `
  title
  slug
  describe
  coverImage {
    url
  }
  author {
    name
    picture {
      url
    }
  }
  updateDate
  content
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    ).then((response) => response.json());
  }

function extractBlogEntries(fetchResponse: any): any[] {
    return fetchResponse?.data?.postCollection?.items;
  }

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
    const entries = await fetchGraphQL(
      `query {
        postCollection(where: { slug_exists: true }, order: updateDate_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
      isDraftMode,
    );
    return extractBlogEntries(entries);
  }

  export const fetchContentByName = async (slug:string) => {
    const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;
  
    const query = `
      query GetContentByName($slug: String!) {
        postCollection(where: { slug: $slug }, limit: 1) {
          items {
            title
            content
            describe
          }
        }
      }
    `;
  
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { slug },
      }),
    });
  
    const {data} = await response.json();
    return data.postCollection.items[0];
  };