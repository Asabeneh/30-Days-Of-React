import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HTML from './images/html5-logo.png'
import CSS from './images/css3-logo.png'
import JS from './images/js-logo.png'
import ReactLogo from './images/react-logo.png'


// NEW WAY TO CREATE A ROOT IN VERSION 18
// Create React root for div in HTML
const root = ReactDOM.createRoot(document.getElementById('root'));


// create JSX element, header
const header = (
  <header className='title'>
    <h1>Front End Technologies</h1>
  </header>
)

// create JSX element, images
const images = (
  <div className='logos'>
    <img src={HTML} alt='HTML5 Logo'/>
    <img src={CSS} alt='CSS3 Logo' className='cssLogo'/>
    <img src={JS} alt='JS Logo'/>
    <img src={ReactLogo} alt='React Logo'/>
  </div>
)

const main = (
  <main>
    <div className='main-wrapper'>
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className='dataEntry'>
        <input placeholder='First name' type='text'/>
        <input placeholder='Last name' type='text'/>
        <input placeholder='Email' type='text'/>
      </div>
      <center><button type='submit'>Subscribe</button></center>
    </div>
  </main>
)

// create JSX element, parent
const app = (
  <div>
    {header}
    {images}
    {main}
  </div>
)


// Render JSX element into DOM
root.render(app); 