import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import Client from './api/client';
import Header from './components/Header';
import Ships from './components/Ships';

function App() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <ApolloProvider client={Client}>
      <div className="App">
        <CssBaseline />
        <Header showGallery={showGallery} setShowGallery={setShowGallery} />
        <Ships showGallery={showGallery} />
      </div>
    </ApolloProvider>
  );
}

export default App;
