import React from "react";

let skillset = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'];
let skills = skillset.map((skill) => <button className='skill'>{skill}</button>)

export default function UserCard(props) {
     return (
          <section className="card">
               <img src={props.person} alt="person" className='person' />
               <div className="details">
                    <h2>asabeneh yeatayeh</h2>
                    <img src="https://img.icons8.com/color/48/000000/ok--v1.png" className='icon' alt='icon'/>
               </div>
               <p>senior developer, finland</p>
               <div className="skills">
                    <h2>skills</h2>
                    {skills}
               </div>
               <p>joined on aug 30, 2020</p>
      </section>
     )
}