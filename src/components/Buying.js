import React from 'react';
import './BuyingStyles.css';
import jordan1 from '../assets/ES-J2_1500x600-12.jpg';
import jordan2 from '../assets/ES-J2-23_3_2000x2000.png';
import jordan3 from '../assets/ES-J3_1500x600.png'; 

const Buying = () => {
  return (
    <div>
      <center><h6>EnStock x Jordan: April 2023 FIRST RELEASE</h6> </center>
      <center> <p>AIR JORDAN 1 RETRO HIGH UNIVERSITY "BRONX BLUES"</p> </center> 

        <div className='jordans-view'>
          <br></br>
         <center> <img src={jordan3} height={200} className='Third-Jordans' alt='logo3' /> </center>

        <br></br>

         <center> <img src={jordan1} height={250} className='First-Jordans' alt='logo4' /> 
         <img src={jordan2} height={310} className='Second-Jordans' alt='logo5' /> </center> 
        </div>

    <div>
        <center> 
          <a href="" className='btn'>notify me </a>
        </center>
        </div>
        
    </div>
  )
};

export default Buying;