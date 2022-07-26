import React, { useEffect } from 'react';
import { ProjectProvider } from './utils/ProjectContext';
import ProjectList from './components/ProjectList';
import './app.css';

function App() {
  const title = ' NFT Project Rug Status';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="app">
      <h1>Was I Rugged?</h1>
      <h4 style={{ color: 'lightseagreen' }}>{title}</h4>
      {/* Provider wraps all the logic that handles/updates our state */}
      <ProjectProvider>
        <ProjectList />
      </ProjectProvider>
    </div>
  );
}

export default App;
