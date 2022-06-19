import React from 'react';

import { News, Home, About } from './pages';
import { Header, Footer } from './layout';

import './App.css';

function App(){

  return(
    <>
      <Header />
      <News />
      <Home />
      <About />
      <Footer />
    </>
  );

};

export default App;
