import React from 'react';
import './WhoStyles.css';
import sneakersad from '../assets/peacechain-done.png';

const Who = () => {
  return (
    <div class='container'>
         <h4>GET TO KNOW US.</h4> 
        
        <p>
            Founded in 2023, EnStock is a streetwear brand 
            that is engaged in the design and sales of apparel and sneakers. 
       
            EnStock is an American company founded by Bronx Puerto Rican designer
            and artist Evania Torres. EnStock's name derives from Torres' bilingual 
            background, with EnStock's Spanglish translation meaning 'In Stock'.
       
            EnStock's main mission is to develop and design 
            streetwear apparel that will inspire everyone and make them feel 
            <strong> unstoppable.</strong>
        </p>
        
          <img src={sneakersad} className='Logo-AD' alt='logo6' />
        <h5> IT'S A BRONX THING.</h5>
    </div>
  )
};

export default Who;