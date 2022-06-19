import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { News, Home, About } from './pages';
import { Header, Footer } from './layout';

import './App.css';

function App(){

  return(
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      {/* Reoute [path][element] / */}
    </Routes>
      <Header />
      <News />
      {/* <Home />
      <About /> */}
      <Footer />
    </>
  );

};

export default App;
