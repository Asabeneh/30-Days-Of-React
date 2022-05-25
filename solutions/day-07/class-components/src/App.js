//index.js

import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
          <button onClick={this.greetPeople}> Greet </button>
        </div>
      </header>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)

export default Header;

