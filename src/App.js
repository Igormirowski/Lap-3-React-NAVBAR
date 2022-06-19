import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { News, Home, About } from './pages';
import { Header, Footer } from './layout';

import './App.css';

function App(){

  return(
    <>

      <Header />
      <Routes>
      <Route path="/" element={<News />} />  {/* when I go to this url / I want to render Home */}
      {/* Reoute [path][element] / */}
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
    </Routes>
      <Footer />
    </>
  );

};

export default App;
