import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


// class component
// eslint-disable-next-line 
class Example extends React.Component{ // comment above with disable warning of unused component in terminal
  // render() function renders an object. 
  // object has a return with content in it
  render(){
    return(
      <h1>class based component</h1>
    )
  }
}


// App component
class App extends React.Component{
  // props is a means to send data from parent to child components
  constructor(props){
    super(props);
    
  }
  render(){
    //create props for Header and Main components
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Steve',
        lastName: 'Rodgers',
      },
      date: 'Jan 30, 2023',
    }

    const techs = ['HTML', 'CSS', 'JavaScript'];

    return(
      <div className="app">
        <Header data = {data}/>
        <Main tech = {techs}/>
        <Footer/>
      </div>
      
    )
  }
}

export default App;