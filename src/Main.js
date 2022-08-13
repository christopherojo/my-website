import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home.js';
import Project from './Pages/Project.js';
import NoPage from './Pages/NoPage.js';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home />}></Route>
      <Route path='project' element={<Project />}></Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default Main;