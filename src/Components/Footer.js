import React from 'react';
import './FooterStyles.css';

const Footer = () => {
  return (
    <div className='footer'> 
      <a href="/" className='btn'>home </a>
      <a href="/about" className='btn'>about us </a>
      <a href="/orders" className='btn'>releases </a>
      <a href="/contacting" className='btn'>contact us </a>
      <strong> &copy;Evania Torres 2023</strong>

    </div>
  )
};

export default Footer;
