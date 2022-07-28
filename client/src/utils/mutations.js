import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!,
    $picture: String,
    $discord: String,
    $twitter: String,
    $status: String
  ) {
    addProject(
      name: $name,
      picture: $picture,
      discord: $discord,
      twitter: $twitter,
      status: $status
    ) {
      _id
      name
      picture
      discord
      twitter
      status
    }
  }
`;

