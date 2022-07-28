import React, { useEffect } from "react";
import { SchemaLink } from "@apollo/client/link/schema";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Title from "./components/Title";
import NewProject from "./components/NewProjectModal/NewProject";
import UserInfo from "./components/UserInfo";

import "./app.css";
import "./reset.css";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const title = " NFT Project Rug Status";
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <ApolloProvider client={client}>
      <main className="main-wrapper">
        <Title></Title>
        <UserInfo></UserInfo>
        <NewProject></NewProject>
      </main>
    </ApolloProvider>
  );
}

export default App;
