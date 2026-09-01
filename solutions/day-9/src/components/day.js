import React from 'react';
import Morning  from '../images/morning.jpg'; 
import Noon  from '../images/noon.jpg'; 
import Evening  from '../images/evening.jpg'; 
import Night  from '../images/night.jpg'; 
export default function Day() {
     let [day, setDay] = React.useState('');
     let now = new Date();
     let time = now.getHours();
     
     let btnStyle = {
          fontSize: '20px',
          outline: 'none',
          border: 'none',
          borderRadius:'1rem',
          padding: '.8rem 2rem',
          backgroundColor: '#40c9c0',
          color:'#fff'
     }
     let bg = (time >= 4 && time < 12) ? `${Morning}` : (time >= 12 && time < 16) ? `${Noon}` : (time >= 16 && time < 19) ? `${Evening}` : `${Night}`;
     let bgStyle = {
          backgroundImage:`url(${bg})`
     }
     function change() {
          
          setDay(function () {
               
               if (time >= 4 && time < 12) {
                    return 'Morning'
               } else if (time >= 12 && time < 16) {
                    return 'Noon'
               } else if (time >= 16 && time < 19) {
                    return 'Evening'
               } else {
                    return 'Night'
               }
          });
     }
     return (
          <section style={bgStyle}>
               <button style={btnStyle} onClick={change} type='submit'>Show Time</button>
               <h1>{day}  { time} </h1>
          </section>
     )
}