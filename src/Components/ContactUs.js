import React from 'react';
import './ContactUsStyling.css';
import emailus from '../assets/contactus.jpg';
import signup from '../assets/signuplogo.jpg';

const ContactUs = () => {
  return (
    <div className='contacts'>
        <center>
            <img src={emailus} height={425} className='mailing' alt='third' />
            
            <img src={signup} height={425} className='signing' alt='fifth' />
        </center>



    </div>

  )
};

export default ContactUs;
