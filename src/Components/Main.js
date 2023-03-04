import React from 'react';
import './MainStyles.css';
import logo from '../assets/creamnewlogo2-NB.png';
import Moment from 'react-moment';


const Main = () => {
  return (
  <div>
    <div className='App'> 
         <h1>Welcome. Buenas. </h1> 
        <img src={logo} className='App-logo' alt='logo' /> 
         <h2>GET TO KNOW US. GET TO KNOW YOU. </h2> 
    </div>

   
    <div className='moments'> 
    <strong> <Moment format="MMMM Do, YYYY hh:mma"></Moment> nyc </strong>
      </div>
</div>
  )
};

export default Main;
