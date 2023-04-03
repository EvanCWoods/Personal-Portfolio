import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/root.css";
import "./Styles/colors.css";
import Landing from './Components/Landing/Landing';
import WebDevelopmentProjects from './Components/Pages/Projects/WebDevelopment/WebDevelopmentProjects';
import MachineLearningProjects from './Components/Pages/Projects/MachineLearning/MachineLearningProjects';
import Login from "./Components/Login/Login";
import ProtectedRoute from './Components/ProtectedRoutes';
import CreateBlog from './Components/CreateBlog/CreateBlog';
import Blog from './Components/Blog/Blog';
import Post from './Components/Blog/Post';
import { Box } from '@mui/material';
import ProfessionalProjects from './Components/Pages/Projects/Professional/ProfessionalProjects';

function App() {
  return (
    <Box className="blue-background">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/personal-projects" element={<WebDevelopmentProjects />} />
          <Route path="/professional-projects" element={<ProfessionalProjects />} />
          <Route path="/projects/machine-learning" element={<MachineLearningProjects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="//blog/:id" element={<Post />} />
          <Route path="/create" element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
          />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
