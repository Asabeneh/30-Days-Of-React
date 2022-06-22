import React from 'react';
import ReactDOM from 'react-dom';

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Montserrat',
  padding: 25,
  lineHeight: 1,
  TextAlign: 'center',
}


const header = (
  <header style={headerStyles}>
   <div className='header-wrapper'>
     <h1>Welcome to React Test App</h1>
     <p>Abhishek Ranjan</p>
     </div>
     </header>
)

// JSX element, main

const mainStyles = {
  backgroundColor: '#F3F0F5',
  fontFamily: 'Helvetica',
} 

const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

// JSX element, footer

const footerStyles = {
  backgroundColor: '#61DBFB',
} 

const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2022</p>
  </footer>
)
 //JSX element, app , a container or a parent 
  const app = (
    <div className="app">
    {header}
    {main}
    {footer}
    
    </div>
  )


const rootElement = document.getElementById('root');
ReactDOM.render( app , rootElement);

