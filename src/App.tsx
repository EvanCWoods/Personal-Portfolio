import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/root.css";
import "./Styles/colors.css";
import Landing from './Components/Landing/Landing';
import WebDevelopmentProjects from './Components/Pages/Projects/WebDevelopment/WebDevelopmentProjects';
import WebThreeProjects from './Components/Pages/Projects/Web3/WebThreeProjects';
import MachineLearningProjects from './Components/Pages/Projects/MachineLearning/MachineLearningProjects';

function App() {
  return (
    <div className="App blue-background">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects/web-development" element={<WebDevelopmentProjects />} />
          <Route path="/projects/web-3" element={<WebThreeProjects />} />
          <Route path="/projects/machine-learning" element={<MachineLearningProjects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
