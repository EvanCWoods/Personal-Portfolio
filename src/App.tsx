import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingAbout from './Components/LandingPage/LandingAbout';
import "./Styles/root.css";
import "./Styles/colors.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingAbout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
