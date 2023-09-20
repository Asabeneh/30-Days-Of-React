// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import reactLogo from './images/react_logo.png'

// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js'
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
// JSX element, header 

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <img src={asabenehImage} alt='asabeneh image' />
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
      <div style={{ backgroundColor: "#F0F1F7" }}>
        <h3 style={{ textAlign: "center" }}>Front End Technologies</h3>
        <br />
        <img src={htmlLogo} style={{ width: "250px" }} alt='html logo' />
        <img src={cssLogo} style={{ width: "250px" }} alt='css logo' />
        <img src={reactLogo} style={{ width: "250px" }} alt='react image' />
      </div>
      <br />
      <div style={{ backgroundColor: "#C2E6F4", padding: "10px" }}>
        <h3 style={{ textAlign: "center" }}>SUBSCRIBE</h3>
        <p style={{ textAlign: "center" }}>Sign up with your email address to receive news and updates.</p>
        <br />
        <div style={{ textAlign: "center", }}>
          <input style={{ padding: "10px", margin: "5px" }} placeholder='First name' />
          <input style={{ padding: "10px", margin: "5px" }} placeholder='Last name' />
          <input style={{ padding: "10px", margin: "5px" }} placeholder='Email' />
          <br />
          <br />
          <button style={{ backgroundColor: "#F37474", padding: "10px", border: "none", width: "250px", color: "#FFF" }}>Subscribe</button>
          <br />
        </div>
      </div>
      <br />
      <div style={{ backgroundColor: "#F0F1F7", width: "100%" }}>
        <div style={{ padding: "20px", width: "98%", backgroundColor: "#FFF", margin: "auto", height: "400px" }}>
          <img src={asabenehImage} alt='asabeneh image' style={{ width: "150px", borderRadius: "50%" }} />
          <p style={{ fontWeight: "500" }}>Asabeneh Yetayeh</p>
          <p style={{ fontSize: "13px" }}>Senior Developer, Finland</p>
          <strong>Skills</strong>
          <br />
          <br />
          <div>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>HTML</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>CSS</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Sass</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>JS</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>React</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Redux</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Node</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>MongoBD</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Python</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Flask</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Django</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>NumPy</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Pandas</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Data Analysis</span>
            <br /><br />
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>MySQL</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>GraphQL</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>D3.js</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Gatsby</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Docker</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", margin: "3px", borderRadius: "10px" }}>Heroku</span>
            <span style={{ backgroundColor: "#2ACFCF", color: "#FFF", padding: "10px", borderRadius: "10px" }}>Git</span>
          </div>
          <br />
          <p style={{ fontSize: "13px" }}>Joined on Aug 30, 2020</p>
        </div>
      </div>
    </div>
  </main >
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
