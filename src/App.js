import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import News from './news/News';
import Players from './players/Players';
import PlayerRankings from './player_rankings/PlayerRankings';
import Matches from './matches/Matches';
import Series from './series.jsx/Series';
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/news" element={<News />} />
          <Route path="/playersRankings/:id1" element={<PlayerRankings />} />
          <Route path="/players" element={<Players />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/series" element={<Series />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
