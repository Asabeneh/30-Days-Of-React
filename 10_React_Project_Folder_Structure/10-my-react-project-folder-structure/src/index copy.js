import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import react_logo from './images/react_logo.png'
import js_logo from './images/js_logo.png'
import is_checked from './images/is_checked.png'
import clock_pict from './images/clock.png'
import dev_av from './images/dev_photo.png'


// Fuction to show month date year
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

//logo
const ShowLogos = ({ logos }) => {
  const logoList = logos.map((logo) =>
    <div className='logo-div'>
      <img className='logo-img' src={logo.img} alt={logo.descr} />
    </div>)
  return logoList
}

const MainLogo = ({ frontEndTech, logos }) => (
  <main>
    <div className='main-wrapper'>
      <div className='h2-wrapper'>
        {frontEndTech}
      </div>
      <div className='blocks-wrapper'>
        <ShowLogos logos={logos} />
      </div>
    </div>
  </main>
)

//Subscribe section
const ShowInput = ({ inputs }) => {
  const inputsList = inputs.map((input) =>
    <div className='input-div'>
      <input className='input-name' type='text' placeholder={input.placeholder}></input>
    </div>
  )
  return inputsList
}

const Subscribe = ({ header, subscribeAnnotation, inputs }) => (
  <main>
    <div className='subscribe-wrapper'>
      <h1 className='h1-wrapper'>{header}</h1>
      <div className='annotation'>{subscribeAnnotation}</div>
      <div className='input-wrapper'>
        <ShowInput inputs={inputs} />
      </div>
    </div>
  </main>
)

//Developer card

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const frontEndTech = 'Front End Technologies'

  const logos = [
    { img: html_logo, descr: 'html logo' },
    { img: css_logo, descr: 'css logo' },
    { img: js_logo, descr: 'js logo' },
    { img: react_logo, descr: 'react logo' },
  ]

  const header = 'Subscribe'
  const subscribeAnnotation = 'Sign up with your email address to receive news and updates.'
  const inputs = [
    { placeholder: 'First name' },
    { placeholder: 'Last name' },
    { placeholder: 'Email' }
  ]

  const dev = {
    firstName: 'Daniil',
    lastName: 'Kapustin',
    position: 'Senior Developer',
    country: 'Russia',
    isChecked: true,
    skills: ['PL/SQL', 'PL+', 'Java', 'Oracle', 'JS', 'HTML', 'Git'],
    joinDate: 'May 30, 2023',
    avatar: dev_av
  }

  return (
    <div className='app'>
      <Header data={data} />
      {/* <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      /> */}
      <MainLogo
        frontEndTech={frontEndTech}
        logos={logos}
      />

      <Subscribe
        header={header}
        subscribeAnnotation={subscribeAnnotation}
        inputs={inputs}
      />

      <Card
        dev={dev}
      />

      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
