import logo from './logo.svg';
import asabeneh from './asabeneh.jpg'
import tick from './tick.png'
import styles from'./styles.css';
import Hexacolor from './Hexacolor';
export default function App () {
    const image = require('./asabeneh.jpg')
    const tick = require('./tick.png')
    const skills = ['HTML', 'CSS', 'JS', 'React', 
        'SaaS', 'Redux','Node','MongoDB', 'Python',
        'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis',
        'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku',
        'Git'
      
      ]
  

 return (   

<>

    <img id ="image" src = {image}  ></img>
    <div >

    </div>
   <div id="name-tag">
    <h1>Asabeneh Yetayeh</h1>
    <img id ="tick" src = {tick}  ></img>
    </div>
    <p>Senior developer</p>
<div id="skills">
    <h2>Skills</h2>
  
   
</div>
<div id="skills-container">
 
    {skills.map((_, index) => (
        <div id ="skill-box">
      <Hexacolor key={index} skillIndex={index} />
      </div>
    ))}
 
</div>
 </>

)}


