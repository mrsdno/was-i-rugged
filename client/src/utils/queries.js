import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
   query projects {
      projects {
        name
        picture
        discord
        twitter
        status
      }
    }
`;