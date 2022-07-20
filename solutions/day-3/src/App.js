import './App.css';
import pichtml from './images/htmlpng.png';
import piccss from './images/csspng.png';
import picjs from './images/jspng.png';
import picreact from './images/reactpng.png';
import person from './images/person.jpg';
let head = <h2>front end technologies</h2>
let skillset = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'];
let skills = skillset.map((skill) => <button className='skill'>{skill}</button>)

function App() {
  return (
    <div className="App">
      {/* level-2.1 */}
      <section className="techCard">
        {head}
        <section className='tech'>
          <img src={pichtml} alt='html' />
          <img src={piccss} alt='css'/>
          <img src={picjs} alt='js'/>
          <img src={picreact} alt='react'/>
        </section>
      </section>

      {/* level-2.2 */}

      <section className='sub'>
        <div>
          <h2>subscribe</h2>
          <p>Sign up with your eamil address to receive news and updates</p>
          <form action="*">
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
            <input type="text" placeholder='Email' />
          </form>
          <button>Subscribe</button>
        </div>
      </section>

      {/* level-3 */}
      
      <section className="card">
        <img src={person} alt="person" className='person' />
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
    </div>
  );
}

export default App;
