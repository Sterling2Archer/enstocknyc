import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Orders from './routes/Orders';
import About from './routes/About';
import Contacting from "./routes/Contacting";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacting' element={<Contacting />} />
      </Routes>
    </>
  )
};

export default App;

/*

Code for GitHub Pages

import React, { useState } from 'react'
import './App.css'
import Home from './routes/Home';
import Orders from './routes/Orders';
import About from './routes/About';
import Contacting from "./routes/Contacting";
import { Route, Routes } from 'react-router-dom';
import enstock from './assets/peacechain-done25.png';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="app" data-theme={theme}>  <Navbar />
        <div className='theme-toggle'> 
        <img onClick={switchTheme} src={enstock} class="enstocknyc" alt="ESNYC" />
       
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacting' element={<Contacting />} />
        </Routes>

        </div>
      </div>
  );
}

export default App;
/*
