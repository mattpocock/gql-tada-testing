import { graphql } from "gql.tada";

const query = graphql(
  `
    query MyQuery {
      users {
        id
        name
        posts {
          id
          title
        }
      }
    }
  `,
);
