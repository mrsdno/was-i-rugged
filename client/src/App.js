import React, { useEffect } from 'react';
import Title from './components/Title';
import NewProject from './components/NewProjectModal/NewProject';
import UserInfo from './components/UserInfo'

import './app.css';
import './reset.css'

function App() {
  const title = ' NFT Project Rug Status';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <main className="main-wrapper">
      <Title></Title>
      <UserInfo></UserInfo>
      <NewProject></NewProject>
    </main>
  );
}

export default App;
