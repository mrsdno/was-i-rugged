const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Project {
    _id: ID
    name: String
    picture: String
    discord: String
    twitter: String
    status: String
  }

  type Query {
    projects: [Project]
  }

  type Mutation {
    addProject(name: String!, picture: String, discord: String, twitter: String, status: String): Project
    deleteProject(id: ID!): Project
  }
`;

module.exports = typeDefs;
