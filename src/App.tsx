import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import JustVisited from './components/JustVisited';
import Favorites from './components/Favorites';
import Recommendation from './components/Recommendations';

function App() {
  return (
          <>
          <Navbar />
          <JustVisited />
          <Favorites />
          <Recommendation />
          </>
  );
}

export default App;