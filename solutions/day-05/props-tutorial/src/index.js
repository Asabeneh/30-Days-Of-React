import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// props is a special keyword, stand for properties
// - used to pass data from one parent component to a child component

//component using props example
const User = (props) => {
  return (
    <div>
      <h1>{props.firstname} {props.lastName}</h1>
      <small>{props.country}</small>
    </div>
  )
}
// call component and give it 3 properties, firstname, lastname, country
<User firstname = 'Clark' lastName = 'Gable' country = 'America' />




// Header component
const Header = (props) =>{
  return(
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}


// number props components
const Age = (props) => {
  return(
    <div>
      The person is {props.age} years old. 
    </div>
  )
}
const Weight = (props) => {
  return(
    <div>
      <p>The weight of the object on earth is {props.weight} N.</p>
    </div>
  )
}

// boolean props component
const Status = (props) =>{
  let status = props.status ? 'Old enough to drive' : 'Too young for driving';
  return(
    <p>{status}</p>
  )
}

// array props component
const Skills = (props) =>{
  const skillList = props.skills.map((skill)=> <li key={skill}>{skill}</li>)
  return(
    <ul>{skillList}</ul>
  )
}

// object props component
const Objects = (props) =>{
  return (
    <div>
      <h3>{props.obj.greeting}</h3>
      <h3>{props.obj.question}</h3>
    </div>
  )
}

// function props component
const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )

}

// parent component
const App = () =>{

  // string props
  const welcome = 'Welcome to 30 Days Of React';
  const title = 'Getting Started React';
  const subtitle = 'JavaScript Librarby';
  const firstName ='Tony';
  const lastName = 'Stark';
  const date = 'Jan 20th, 2023'

  //number props
  let currentYear = 2023;
  let birthYear = 1820;
  const age  = currentYear - birthYear;
  const gravity =  9.81;
  const mass = 75;

  // boolean props
  let status = age >= 18

  // object prop
  const data = {
    greeting: 'Welcome to the object component!',
    question: 'Can you see this question?'
  }

  // Function prop
  const sayHi = () =>{
    alert('Hi');
  }
  return (
    <div className='app'>
      {/* string component */}
      <Header 
        welcome = {welcome}
        title = {title}
        subtitle = {subtitle}
        firstName = {firstName}
        lastName = {lastName}
        date = {date}
      /> {/*pass property to Header component*/}

      {/* number components */}
      <Age age= {age}/>
      <Weight weight = {gravity * mass} />  

      {/* boolean component */}
      <Status status={status}/>

      {/* array component */}
      <Skills skills={['HMTL', 'CSS', 'JavaScript']}/>

      {/* object component */}
      <Objects obj = {data}/>

      {/* function component */}
      <Button text = 'Say Hi' onClick = {sayHi}/>

    </div>
  )
}



root.render(<App/>);

