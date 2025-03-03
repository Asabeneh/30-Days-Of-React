// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import img from './images/frontend_technologies.png'
// To get the root element from the HTML document


// JSX element, app
const app = (
  <div className='app'>
   <img src={img} alt="nice pics" width="100%"></img>
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)