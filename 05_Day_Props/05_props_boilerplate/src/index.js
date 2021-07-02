import React from 'react'
import ReactDOM from 'react-dom'
import { data, user, info } from './Card/CardInfo'
import UserCard from './Card/Card'
import TechList from './Skills/techin'
import techs from './Skills/tech'
import asabenehImage from './images/asabeneh.jpg'
import FooterData from './Footer/FooterData'
import showDate from './Footer/date'


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
  // const data = {
  //   welcome: 'Welcome to 30 Days Of React',
  //   title: 'Getting Started React',
  //   subtitle: 'JavaScript Library',
  //   author: {
  //     firstName: 'Asabeneh',
  //     lastName: 'Yetayeh',
  //   },
  //   date: new Date(), // date needs to be formatted to a human readable format
  // }
  const date = new Date()
  // const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  // const user = { ...data.author, image: asabenehImage }

  // const handleTime = () => {
  //   alert(showDate(new Date()))
  // }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      {/* <Header data={data} /> */}
      <UserCard user={user}
        info={info} />
      <TechList techs={techs} />
      <FooterData date={showDate(new Date())} />
      {/* <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      /> */}
      {/* <Footer copyRight={date} /> */}
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
