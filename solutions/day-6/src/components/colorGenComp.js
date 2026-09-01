import React from "react";

export default function ColorGen() {

     let hexcolor = () => {
          let color = '';
          let str = '0123456789abcdef';
          for (let i = 0; i < 6; i++) {
               let hex = Math.floor(Math.random() * str.length );
               color += str[hex]; 
          }
          return '#' + color;
     }

     
     return (
          
               <div className="colorBg" style={{ backgroundColor: `${hexcolor()}` }}>
                    <h3>{ hexcolor()}</h3>
               </div>
          
     )
}