import React from 'react';


const skills = ['HTML', 'CSS', 'JS', 'React', 
    'SaaS', 'Redux','Node','MongoDB', 'Python',
    'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis',
    'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku',
    'Git'
  ]



  
//repeat elements inside the box
export default function Hexacolor ({ skillIndex })  {
 
   
  
    return (
      
   
        <h2>{skills[skillIndex]}</h2>
       
    )
  
}