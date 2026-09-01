import React from 'react';
import { Pop } from './data';

export default function WorldPop() {
     let total = Pop[0].population;
     let world = Object.keys(Pop).map((key) =>
          
          <tr className='popContainer'>
               <td className="country">
                              <h2>{Pop[key].country}</h2>
               </td>
               <td className='bigBlock'>
                    <div className="chart" style={{width:`${(Pop[key].population*100)/`${total}`}%`}}></div>
               </td>
               <td className="popNumber">
                    <h2>{ Pop[key].population}</h2>
               </td>
     </tr> )
     return (
               <section className='container'>
               <h1>30 days of react</h1>
               <h2>number generator</h2>
               <h3>Ten most populated countries</h3>
               <table className="population">
                    {world}
               </table>
          </section>
          
     )
}