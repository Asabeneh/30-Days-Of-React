import React from "react";
import pichtml from '../images/htmlpng.png';
import piccss from '../images/csspng.png';
import picjs from '../images/jspng.png';
import picreact from '../images/reactpng.png';
let head = <h2>front end technologies</h2>


export default function ImgComp(){
     return (
          <section className="techCard">
               {head}
               <section className='tech'>
                    <img src={pichtml} alt='html' />
                    <img src={piccss} alt='css'/>
                    <img src={picjs} alt='js'/>
                    <img src={picreact} alt='react'/>
               </section>
          </section>
     )
}