import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

/*
CODE FOR GITHUB PAGES (HASH ROUTER)

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link } from 'react-router-dom';
import './index.css'
import App from './App';

ReactDOM.render(
    <HashRouter basename="/">     
       <App />
       
      <div className='footer'>
       <div className="container">         
          <Link to="/" className='btn'>home </Link>
          <Link to="/about" className='btn'>about us </Link>
          <Link to="/orders" className='btn'>releases </Link>
          <Link to="/contacting" className='btn'>contact us </Link>      
         
        <strong> &copy;Evania Torres 2023</strong>
      </div>
   </div>   
</HashRouter>,
  document.getElementById('root')
);

/*
