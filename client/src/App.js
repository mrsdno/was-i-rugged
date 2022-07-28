import React, { useEffect } from 'react';
import Title from './components/Title';
import { ProjectProvider } from './utils/ProjectContext';
import ProjectList from './components/ProjectList';
import NewProject from './components/NewProject'

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
      <NewProject></NewProject>
    </main>
  );
}

export default App;
