import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/root.css";
import "./Styles/colors.css";
import Landing from './Components/Landing/Landing';
import WebDevelopmentProjects from './Components/Pages/Projects/WebDevelopment/WebDevelopmentProjects';
import WebThreeProjects from "./Components/Pages/Projects/Web3/WebThreeProjects";
import MachineLearningProjects from './Components/Pages/Projects/MachineLearning/MachineLearningProjects';
import Login from "./Components/Login/Login";
import ProtectedRoute from './Components/ProtectedRoutes';
import CreateBlog from './Components/CreateBlog/CreateBlog';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="blue-background">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects/web-development" element={<WebDevelopmentProjects />} />
          <Route path="/projects/web-3" element={<WebThreeProjects />} />
          <Route path="/projects/machine-learning" element={<MachineLearningProjects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
