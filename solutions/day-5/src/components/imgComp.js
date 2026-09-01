import React from "react";
let head = <h2>front end technologies</h2>


export default function ImgComp(props){
     return (
          <section className="techCard">
               {head}
               <section className='tech'>
                    <img src={props.pichtml} alt='html' />
                    <img src={props.piccss} alt='css'/>
                    <img src={props.picjs} alt='js'/>
                    <img src={props.picreact} alt='react'/>
               </section>
          </section>
     )
}