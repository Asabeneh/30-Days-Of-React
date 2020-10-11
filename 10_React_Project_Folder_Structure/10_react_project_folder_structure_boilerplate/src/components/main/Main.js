import React from 'react'
import Button from '../shared/Button'
import HexaColr from '../color/HexaColor'
import Country from '../country/Country'
import UserCard from '../user/UserCard'
import { buttonStyles } from '../../styles/button-styles'


// TechList Component
// class base component
class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

const Message = ({ message }) => (
  <div
    style={{
      border: '2px solid #61dbfb',
      margin: 25,
      padding: 10,
    }}
  >
    <h3>{message}</h3>
  </div>
)
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)
const Welcome = (props) => (
  <div style={{ border: '2px solid rgb(0,255,0', margin: 10, padding: 10 }}>
    <h2>Welcome to 30 Days Of React</h2>
  </div>
)

// Main Component
// Class Component
class Main extends React.Component {
  render() {
    const {
      techs,
      greetPeople,
      handleTime,
      loggedIn,
      handleLogin,
      message,
      country,
      user,
    } = this.props
    console.log(message)

    const status = loggedIn ? <Welcome /> : <Login />
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>

          <UserCard user={user} />

          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text='Show Time'
              onClick={handleTime}
              style={buttonStyles}
            />{' '}
            <Button
              text='Greet People'
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && (
              <p>
                Please login to access more information about 30 Days Of React
                challenge
              </p>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? 'Logout' : 'Login'}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
          <HexaColr />
          <HexaColr />
          <Country country={country} />
        </div>
      </main>
    )
  }
}

export default Main
