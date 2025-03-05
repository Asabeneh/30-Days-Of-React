import React from 'react';

export default function NumGen() {
     let number = [];
     let color;
     for (let i = 1; i <= 32; i++){
          number.push(i);
     }
     let disp = number.map((num) =>
     {

          let style = { backgroundColor: `${color}` }
          let count = 0;
          if (num === 1) {
               color = '#20BE73';
          }
          if ((num-1) % 2 !== 0) {
               color = '#20BE73';
          }
          else {
               color = '#FCDA3A';
          }
          for (let j = num; j >= 1; j--){
               if (num % j === 0) {
                    count++;
               }
          }
          if (count === 2) {
               color = '#FC5E52';
          }
          return <h1 style={style}><span className="num">{num-1}</span></h1>
     }     );
     
     return (
          <section className='container'>
               <h1>30 days of react</h1>
               <h2>number generator</h2>
               <div className="numbers">
                    <div className="number">
                         {disp}
                    </div>
               </div>
          </section>
     )
}

