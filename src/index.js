import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter> {/* by this we provide contrext to out app and we pass inf ofrom parent to all children (to all News, Home etc) */}
    <App />
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);
