// index.js
// Import React, ReactDOM, stylesheet, and image
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileImage from './images/profileImage.jpg'

// Get root from HTML file
const root = ReactDOM.createRoot(document.getElementById('root'))


// Component is a small, reusable code
// - can be function or class based components
//      - functional are presentational, stateless, dumb
//      - class are conatiners, statefull, smart
// Component name must start with uppercase and if two words be camel case

// React Component Syntax
// const jsx = () =>{
    // return jsx
//}


// dynamic data
const welcome = 'Welcome to 30 Days Of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const author = {
    firstName: 'Clark',
    lastName: 'Gable'
}
const date = 'Jan 18th, 2023';


// Header component
const Header = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>Instructor: {author.firstName} {author.lastName}</p>
                <small>Date: {date}</small>
            </div>
        </header>
    )
}

const numOne = 3
const numTwo = 2

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
)
const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge = (
    <p>
        {' '}
        {author.firstName} {author.lastName} is {age} years old
    </p>
)

// User card component
const UserCard = () => {
    return (
        <div className='imageDiv'>
            <img src={profileImage} alt='profile' />
            <h2>{author.firstName} {author.lastName}</h2>
        </div>
    )
}

const techs = ['HTML', 'CSS', 'JavaScript'];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// Main component
const Main = () => {
    return (
        <main>
            <div className='main-wrapper'>
                <p>Prerequisite to get started react.js:</p>
                <ul>
                    {techsFormatted}
                </ul>
                {result}
                {personAge}
            </div>
            <UserCard />
        </main>
    )

}

const copyRight = '2023'

// footer component
const Footer = () => {
    return (
        <footer>
            <div className='footer-wrapper'>
                <p>Copyright &copy;{copyRight}</p>
            </div>
        </footer>
    )
}

const buttonStyles = {
    margin: '10px',
    padding: '10px 20px',
    background: 'rgb(0,255,0)',
    border: 'none',
    borderRadius: 5,
}
const Button = () => <button style={buttonStyles}>action</button>

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

const HexaColor = () => <div>Randome hex color: {hexaColor()}</div>


// App parent component
const App = () => {
    return (
        <div className='app'>
            <Header />
            <Main />
            <Button/>
            <HexaColor/>
            <Footer />
        </div>
    )
}

// render root, pass it the parent component
root.render(<App/>)