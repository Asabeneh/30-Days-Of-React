import React from "react";

export default function ColorGen(props) {
     // let numColor = prompt('Enter the number of colors you want:', 0);
          let arr = Array(props.numColor).fill(0);

     let hexcolor = () => {
          let color = '';
          let str = '0123456789abcdef';
          for (let i = 0; i < 6; i++) {
               let hex = Math.floor(Math.random() * str.length );
               color += str[hex]; 
          }
          return '#' + color;
     }

     let sixColor = arr.map((i) => <div className="color" style={{ backgroundColor: `${hexcolor()}` }}>
          <h1>{ hexcolor()}</h1>
     </div>);
     // console.log(hexcolor());
     
     return (
          <section className="colorGen">
               {sixColor}
          </section>
     )
}