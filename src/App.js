import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { News, Home, About, NotFound } from './pages'; // or use import * as Pages from './pages';  ==> then use   <Route path="about" element={<Pages.About />} />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
      <Footer />
    </>
  );

};

export default App;
