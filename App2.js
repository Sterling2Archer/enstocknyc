import React, { useState } from 'react'
import './index.css'
import Home from './routes/Home';
import Orders from './routes/Orders';
import About from './routes/About';
import Contacting from "./routes/Contacting";
import { Route, Routes } from 'react-router-dom';
import enstock from './assets/peacechain-done_2_70x80.png';

function App() {
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="app" data-theme={theme}>
        <div className='theme-toggle'>
          <h2>Dark Theme</h2>
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
