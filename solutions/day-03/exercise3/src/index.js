// index.js
// Import React, ReactDOM, stylesheet, and image
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profileImage from './images/profileImage.jpg'

// Create root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Create JSX element, header
const userName = {
  firstName: 'Arthur',
  lastName: 'Bradshaw'
}
const title = 'Senior Developer';
const location = 'Spain';

const header = (
  <header className='header-wrapper'>
    <img src={profileImage} alt='User Profile'/> 
    <h1>{userName.firstName} {userName.lastName}<span>&#10003;</span></h1>
    <p>{title}, {location}</p>
  </header>
)

// JSX element, main
const skills = [
  'HTML' , 'CSS', 'Sass', 'JS', 'React', 'Redux', 
  'Node', 'MongoDB', 'Python', 'Flask', 'Django', 
  'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL',
  'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
];
const skillButtons = skills.map(skill=>{return <button type='button' key={skill}>{skill}</button>})

const main = (
  <div className='main-wrapper'>
    <h2>Skills</h2>
    {skillButtons}
  </div>
)

// JSX element, footer
const day = new Date().getDate()
const month = new Date().getMonth()
const year = new Date().getFullYear()
const monthArray = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const footer = (
  <div className='footer-wrapper'>
    <p>&#128337; Joined on {monthArray[month]} {day}, {year}</p>
  </div>
  
)

// JSX element, parent
const app =(
  <div className='appBorder'>
    <div className='app'>
      {header}
      {main}
      {footer}
    </div>
  </div>
)

// render root
root.render(app)