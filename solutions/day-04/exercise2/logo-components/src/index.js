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

// Images component
const Images = () =>{
  return(
    <div className='logos'>
      <img src={HTML} alt='HTML5 Logo'/>
      <img src={CSS} alt='CSS3 Logo' className='cssLogo'/>
      <img src={JS} alt='JS Logo'/>
      <img src={ReactLogo} alt='React Logo'/>
    </div>
  )
}

// Header component
const Header = () =>{
  return(
    <header className='title'>
      <h1>Front End Technologies</h1>
      <Images/>
    </header>
  )
}


const SignUpInfo = () => {
  return (
    <section>
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates.</p>
    </section>
  )
}

const Inputs = () =>{
  return (
    <section>
      <input placeholder='First name' type='text'/>
      <input placeholder='Last name' type='text'/>
      <input placeholder='Email' type='text'/>
    </section>
  )
}

const SubmitButton =  () => <center><button type='submit'>Subscribe</button></center>

// Main component
const Main = () => {
  return (
    <main>
      <div className='main-wrapper'>
        <SignUpInfo/>
        <div className='dataEntry'>
          <Inputs/>
        </div>
        <SubmitButton/>
      </div>
    </main>
  )
}

// create App component, parent
const App = () => {
  return(
    <div>
      <Header/>
      <Main/>
    </div> 
  )
}

// Render Parent Component to DOM
root.render(<App/>); 