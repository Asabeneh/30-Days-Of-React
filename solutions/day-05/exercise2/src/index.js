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
const Header = (props) =>{
  return(
    <header className='title'>
      <h1>{props.title}</h1>
      <Images/>
    </header>
  )
}


const SignUpInfo = (props) => {
  return (
    <section>
      <h1>{props.mainTitle}</h1>
      <p>{props.signUp}</p>
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
const Main = (props) => {
  return (
    <main>
      <div className='main-wrapper'>
        <SignUpInfo mainTitle = {props.mainTitle} signUp = {props.signUp}/>
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

  const title = 'Front End Technologies';
  const mainTitle = 'Subscribe';
  const signUp = 'Sign up with your email address to receive news and updates.'

  return(
    <div>
      <Header title = {title}/>
      <Main mainTitle = {mainTitle} signUp = {signUp}/>
    </div> 
  )
}

// Render Parent Component to DOM
root.render(<App/>); 