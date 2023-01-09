// Index.js
// Import React, ReactDOM, and Image
import React from 'react';
import ReactDOM from 'react-dom';
import Garfield from './images/img1.jpeg'

// Get root from HTML file
const rootElement = document.getElementById('root')


// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Jaspreet',
  lastName: 'Chatha'
}
const date = 'Jan 9, 2023'

const header = (
  <header>
    <div className='header-wrapper'>
      {/* creating dynamic data */}
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Student: {author.firstName} {author.lastName}</p>
      <small>Date: {date}</small>
    </div>
  </header>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript'];
const techsFormatted = techs.map(tech=>{return <li key={tech}>tech</li>});

const num1 = 3;
const num2 = 2;

const result = (
  <p>
    {num1} + {num2} = {num1 + num2}
  </p>
)

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// add an image 
const user = (
  <div>
    <img src={Garfield} alt='Garfield Comic Strip'/> 
  </div>
)


const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started{' '} 
        <strong>
          <em>react.js:</em>
        </strong>
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

// JSX element, footer
const copyright = 'Copyright 2023';

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyright}</p>
    </div>
  </footer>
)


// JSX element, app, container or parent
const app =(
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)
// Render JSX on DOM 
ReactDOM.render(app,rootElement);