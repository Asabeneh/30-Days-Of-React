// index.js
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import asabenehImage from './images/asabeneh.jpg'
import './styles/index.css'

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

// CSS styles in JavaScript Object
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

// class based component
const Header = ({ data: {
                  welcome,
                  title,
                  subtitle,
                  author: { firstName, lastName },
                  date,
                },
                backgroundColor,
                color }) => {

  const styles = { backgroundColor, color }
  return (
    <header style={styles}>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

// TechList Component
// class base component
const TechList = ({ techs }) => {
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted

}

// Main Component
// Class Component
const Main = ({
                techs,
                user,
                greetPeople,
                handleTime,
                changeBackground,
                count,
                addOne,
                minusOne,
              }) => {

  return (
    <main>
      <div className='main-wrapper'>
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button
          text='Greet People'
          onClick={greetPeople}
          style={buttonStyles}
        />
        <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
        <Button
          text='Change Background'
          onClick={changeBackground}
          style={buttonStyles}
        />
        <Count count={count} addOne={addOne} minusOne={minusOne} />
      </div>
    </main>
  )
}


// Footer Component
// Class component
const Footer = ({ date, backgroundColor, color }) => {
  const styles = { backgroundColor, color }
  console.log(styles)
  return (
    <footer style={styles}>
      <div className='footer-wrapper'>
        <p>Copyright {date.getFullYear()}</p>
      </div>
    </footer>
  )
}

const App = (props) => {
  const [count, setCount] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('')
  const [color, setColor] = useState('')

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
  const addOne = () => {
    setCount(count + 1)
  }

  // method which subtract one to the state
  const minusOne = () => {
    setCount(count - 1)
  }
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  const changeBackground = () => {
    if (backgroundColor === '') {
      setBackgroundColor('black')
      setColor('white')
    } else {
      setBackgroundColor(
        '')
      setColor('black')
    }
  }

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: 'Oct 7, 2020',
  }
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const styles={backgroundColor, color}

  return (
    <div className='app'  style={styles}>
      <Header data={data} backgroundColor={backgroundColor} color={color} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        changeBackground={changeBackground}
        addOne={addOne}
        minusOne={minusOne}
        count={count}
      />
      <Footer date={new Date()} backgroundColor={backgroundColor} color={color} />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);