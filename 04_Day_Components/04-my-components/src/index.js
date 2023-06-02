// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import dev_av from './images/dev_photo.png'
import is_checked from './images/is_checked.png'
import clock_pict from './images/clock.png'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
    background: bgColor
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

const welcome = 'Welcome to 30 Days Of React'
const greeting = 'Getting Started React'
const annotation = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh'
}
const student = {
  firstName: 'Daniil',
  lastName: 'Kapustin'
}
const date = 'Jun 2, 2023'


// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{greeting}</h2>
      <h3>{annotation}</h3>
      <p>Instructor: {author.firstName} {author.lastName}</p>
      <p>Student: {student.firstName} {student.lastName}</p>
      <small>{date}</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <div>
        {/* Generate five different hexa colors every time */}
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
)

const dev = {
  firstName: 'Daniil',
  lastName: 'Kapustin',
  position: 'Senior Developer',
  country: 'Russia',
  isChecked: true,
  skills: ['PL/SQL', 'PL+', 'Java', 'Oracle', 'JS', 'HTML', 'Git'],
  joinDate: 'May 30, 2023'
}
const devPhoto = (
  <div className='avatar-wrapper'>
    <img className='avatar' src={dev_av} alt='avatar' />
  </div>
)
const isCheckedLogo = (
  <div>
    <img className='is-checked' src={is_checked} alt='is checked' />
  </div>
)
const clock = (
  <div className='clock-wrapper'>
    <img className='clock' src={clock_pict} alt='clock' />
  </div>
)

const SkillsList = () => {
  const skillsMap = dev.skills.map((skill) => (
    <div className='skill'>{skill}</div>
  ))

  return skillsMap
}

const Card = () => (
  <main>
    <div className='card-wrapper'>
      <div className='photo-wrapper'>{devPhoto}</div>
      <div className='name-and-check'>
        <div>{dev.firstName} {dev.lastName}</div>
        {isCheckedLogo}
      </div>
      <div className='position-wrapper'>{dev.position}, {dev.country}</div>
      <div className='skills-wrapper'>
        <SkillsList />
      </div>
      <div className='cardFooter'>
        <div className='clock-wrapper'>{clock}</div>
        <div className='join'><small>{dev.joinDate}</small></div>
      </div>
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Card />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
