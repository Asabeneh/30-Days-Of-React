import React from "react";
import ColorGen from "./colorGenComp";


export default function HexaDeci() {
     let color = Array(32).fill(0);
     let colors = color.map( ()=> <ColorGen />)
     return (
          <section className='container'>
               <h1>30 days of react</h1>
               <h2>Hexadecimal colors</h2>
               <div className="colors">
                    {colors}
               </div>
     </section>
     )
}