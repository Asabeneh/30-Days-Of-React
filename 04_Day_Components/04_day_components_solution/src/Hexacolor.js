import React from 'react';


const skills = ['HTML', 'CSS', 'JS', 'React', 
    'SaaS', 'Redux','Node','MongoDB', 'Python',
    'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis',
    'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku',
    'Git'
  ]



  
//repeat elements inside the box
//We can use skillIndex as well instead of props keyword
export default function Hexacolor ({ props })  {
 
   
  
    return (
      
   
        <h2>{skills[props]}</h2>
       
    )
  
}
