import React from 'react';
import Winter from '../images/winter.jpg';
import Spring from '../images/spring.jpg';
import Summer from '../images/summer.jpg';
import Autumn from '../images/autumn.jpg';
export default function Season() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
     const time = new Date();
     const mon = time.getMonth();
     const month = months[mon].toUpperCase();
     console.log(mon);
     let sbg = (mon === 11 || mon === 0 || mon === 1) ? `${Winter}` : (mon === 2 || mon === 3 || mon === 4) ? `${Spring}` : (mon === 5 || mon === 6 || mon === 7) ? `${Summer}` : `${Autumn}`;
     if (mon === 6 || mon === 5 ) {
          
          console.log(true);
     }
     let bgStyle = {
         backgroundImage:`url(${sbg})`
     }
     let btnStyle = {
          fontSize: '20px',
          outline: 'none',
          border: 'none',
          borderRadius:'1rem',
          padding: '.8rem 2rem',
          backgroundColor: '#40c9c0',
          color:'#fff'
     }
     return (
          <section style={bgStyle}>
               <button style={btnStyle}>Season</button>
               <h1>{ month}</h1>
          </section>
     )
}