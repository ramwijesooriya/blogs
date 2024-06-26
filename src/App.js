// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddPostPage from './components/AddPostPage';
import Blogs from './components/Blogs';

import BlogListPage from './components/BlogListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Header />


     <Router>
      <Routes>
        <Route path="/" element={<Blogs/>} />
        <Route path="/AddPostPage" element={<AddPostPage/>} />
        <Route path="/BlogListPage" element={<BlogListPage/>} />
       


        
      </Routes>
</Router>
      <Footer />

    </div>
  );
};

export default App;
