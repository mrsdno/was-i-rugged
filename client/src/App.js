import React, { useEffect, useState } from "react";
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
import Home from "./pages/Home";

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


  const dataSaved = localStorage.getItem('saved');
  const saved = JSON.parse(dataSaved);


  const renderHome = () => {
    if (saved === 'true') {
      return (
      <div><NewProject />
          <Home />
        </div>
      )
    } else
      console.log('result is false', saved);
  }


  return (
    <ApolloProvider client={client}>
      <main className="main-wrapper">
        <Title></Title>
        <UserInfo></UserInfo>
        {renderHome()}
      </main>

    </ApolloProvider>
  );
}

export default App;
