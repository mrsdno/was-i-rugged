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
`;

module.exports = typeDefs;
