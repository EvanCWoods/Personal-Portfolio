import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/root.css";
import "./Styles/colors.css";
import { LandingPage } from './Components/LandingPage/LandingPage';
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
