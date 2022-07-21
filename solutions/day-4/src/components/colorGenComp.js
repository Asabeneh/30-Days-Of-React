import React from "react";


export default function ColorGen() {
     let str = '0123456789abcdef';
     let hexColor = () => {
          let color = '';
          for (let i = 0; i < 6; i++) {
               let hex = Math.floor(Math.random() * str.length);
               color += str[hex];
          }
          return '#' + color;
     }
     let style = {
          backgroundColor: '{hexColor}',
     }
     return (
          <section className="colorGen">
               <div className="colorContainer" style={style}
               >
                    {hexColor()}
               </div>
               <button>Genarate</button>
          </section>
     )
}

// I DO NOT KNOW WHAT I AM DONING WRONG IN MY CODE. BUT ICAN'T SEE THE CHANGE OF BACKGROUND COLOR AFTER GIVING THE HEIGHT AND WIDTH TO THE COLOR CONTAINER