import './App.css';
import React from 'react';
import MainNavbar from './components/MainNavbar';
import HomeImage from './components/HomeImage';
import JustVisited from './components/JustVisited';
import Favorites from './components/Favorites';
import Recommendation from './components/Recommendations';

function App() {
  return (
          <>
          {/* <Navbar /> */}
          <HomeImage />
          <JustVisited />
          <Favorites />
          <Recommendation />
          </>
  );
}

export default App;
