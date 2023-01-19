import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profileImage from './images/profileImage.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color  
}

const HexaColor = () => <div style={{backgroundColor: hexaColor()}} className='hex'>{hexaColor()}</div>

// add HexaColor component to array
const Colors = ()=>{
  const arrColors = [];
  // Add 5 Hexacolor components to the array
  for(let i = 0; i < 5; i++){
    arrColors.push(<HexaColor key={i}/>)
  }
  // return all elements of the array
  return (
    <div className='colorsContainer'>
      {arrColors} 
    </div>
    
  )
}

//..................................................//

//profile card

const userName = {
  firstName: 'Arthur',
  lastName: 'Bradshaw'
}
const title = 'Senior Developer';
const location = 'Spain';

//  profile header component
const Header = () => {
  return(
    <header className='header-wrapper'>
      <img src={profileImage} alt='User Profile'/> 
      <h1>{userName.firstName} {userName.lastName}<span>&#10003;</span></h1>
      <p>{title}, {location}</p>
    </header>
  )
}

const skills = [
  'HTML' , 'CSS', 'Sass', 'JS', 'React', 'Redux', 
  'Node', 'MongoDB', 'Python', 'Flask', 'Django', 
  'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL',
  'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
];
const skillButtons = skills.map(skill=>{return <button type='button' key={skill}>{skill}</button>})

// profile main component
const ProfileMain = () => {
  return(
    <div className='main-wrapper'>
      <h2>Skills</h2>
      {skillButtons}
    </div>
  )
}

const day = new Date().getDate()
const month = new Date().getMonth()
const year = new Date().getFullYear()
const monthArray = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

// profile footer component
const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <p>&#128337; Joined on {monthArray[month]} {day}, {year}</p>
    </div>
  )
}

//Profile card component, parent
const Profile =() =>{
  return (
    <div className='appBorder'>
      <div className='app'>
        <Header/>
        <ProfileMain/>
        <Footer/>
      </div>
    </div>
  )
}

//Main component, parent
const Main = ()=>{
  return(
    <div>
      <Colors/>
      <Profile/>
    </div>
  )
}

root.render(<Main/>);