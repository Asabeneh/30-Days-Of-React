import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import './index.css';
import { countriesData } from './data/countries.js'
import { countryCodes } from './data/countryCodes.js';
import { countryIsoCode } from './data/isoCode.js'
import { countriesAppended } from './data/countriesAppended.js';
// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    //console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      
    } = this.props.data

    return (
      //this works 
   /*   <header style={{ backgroundColor: this.props.backgroundColor }}> */
     <header style={{ backgroundColor: this.props.backgroundColor }}> 
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}
// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class PrintImages extends React.Component {
  
 
  constructor(props) {
    super(props)
  }
 


  state = {   
    country: {
      imageLink: `https://countryflagsapi.netlify.app/flag/${countriesAppended[132].code}.svg`,
      countryName: `${countriesAppended[132].name}`,
  capital: `${countriesAppended[132].capital}`, 
  population: `${countriesAppended[132].population}`,
  currency: `${countriesAppended[132].currency}`,
  },
  }



    
  printCountries = () => {
   // console.log('country ISO codes', countryIsoCode[0])
 
    //console.log('countires appended', countriesAppended[0].code)
   // console.log('random number', getRandomIntInclusive(0,140))
   function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  let randomNumberOne = getRandomIntInclusive(0,138)
  let randomNumberTwo = getRandomIntInclusive(0,138)
  let randomCountry =   {
      imageLink: `https://countryflagsapi.netlify.app/flag/${countriesAppended[132].code}.svg`,
      countryName: `${countriesAppended[132].name}`,
  capital: `${countriesAppended[132].capital}`, 
  population: `${countriesAppended[132].population}`,
  currency: `${countriesAppended[132].currency}`,
  }


 console.log('random country',randomCountry)
  let firstCountryObject = {
    imageLink: `https://countryflagsapi.netlify.app/flag/${countriesAppended[randomNumberOne].code}.svg`,
    countryName: `${countriesAppended[randomNumberOne].name}`,
capital: `${countriesAppended[randomNumberOne].capital}`, 
population: `${countriesAppended[randomNumberOne].population}`,
currency: `${countriesAppended[randomNumberOne].currency}`,
}


let secondCountryObject = {
  imageLink: `https://countryflagsapi.netlify.app/flag/${countriesAppended[randomNumberTwo].code}.svg`,
  countryName: `${countriesAppended[randomNumberTwo].name}`,
capital: `${countriesAppended[randomNumberTwo].capital}`, 
population: `${countriesAppended[randomNumberTwo].population}`,
currency: `${countriesAppended[randomNumberTwo].currency}`,
}
console.log('firstCountry object',firstCountryObject)
  console.log('second country object', secondCountryObject)


   // let firstCountry = `https://countryflagsapi.netlify.app/flag/${countriesAppended[randomNumberTwo].code}.svg`
    //let secondCountry =   `https://countryflagsapi.netlify.app/flag/${countriesAppended[randomNumberTwo].code}.svg`
    
    //let imageLink = this.state.imageLink === firstCountry ? secondCountry :firstCountry
    //let  countryName = this.state.country.countryName 
 let country = this.state.country == firstCountryObject ? secondCountryObject: firstCountryObject
    this.setState ({
      country
   
    })
    
    //console.log(firstCountry )
   // console.log(firstCountry)


  
  }
  //imageLink = this.printCountries()
  render() {
   
    return (
    <>
     
      <div id ="country-container" style={{backgroundColor: this.props.backgroundColor}} >
    <div id="image-container">
      <img id="flag-image" src={this.state.country.imageLink} width="100" height="100"></img>
      </div>
      <div id ="info-container"></div>
      <b>Country Name:</b><p>{this.state.country.countryName}</p>  
      <b>Capital:</b><p>{this.state.country.capital}</p>
      <b>Population:</b><p>{this.state.country.population}</p>
      <b>Currency:</b><p>{this.state.country.currency}</p>
      <div>
        
      <Button text="Change Country" onClick={this.printCountries} style={buttonStyles} />
      </div>
      </div>
      </>
    )
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      printCountries,
      bgColor
    
    } = this.props
    return (
  
      <main style={{ backgroundColor: bgColor, color: "black" }}>
        <div className='main-wrapper'>
       
          <div id ="flag-image-div">
        
       
      
          </div>
          <div id ="background-button">
          <Button text="Change Background" onClick={changeBackground} style={buttonStyles} />
          </div>
          
          </div>
        
      </main>
      
     
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer style = {{backgroundColor: this.props.backgroundColor, position: 'relative'}}>
        <div className='footer-wrapper'>
          <p>Copyright 2025</p>
         {/* <p>Copyright {this.props.date.getFullYear()}</p> */}
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  

   state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
  }

    // Function to toggle main background color
    toggleMainBg = () => {
     
      this.setState({
        backgroundColor: this.state.backgroundColor === "white" ? "#2a176b" : "white",
      
      });
    };
  // Function to toggle header and footer background color
  toggleHeaderFooterBg = () => {
    this.setState({
      otherElementBgColor: this.state.otherElementBgColor === "" ? "#2a176b" : "",
    });
  };

  // Single function to change both backgrounds
  
  changeBackground = () => {
    this.toggleMainBg();
    this.toggleHeaderFooterBg();
    console.log('click')
   /* 
    this.setState({
    backgroundColor: this.state.styles.backgroundColor === "white" ? "purple" : "white",
    color: this.state.styles.color=== "" ? "purple" : "",
  });
  */
  };
  printCountries = () => {
    const firstCountry = 'AF'
    //console.log(firstCountry )
    //console.log(firstCountry)
    return firstCountry
  } 
  /*
  state = {
    mainBgColor: "white", // Initial background for Main
    headerFooterBgColor: "blue", // Initial background for Header & Footer
  };
  */
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
 
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
 
  changeBackgroundHeader = () => {
        this.state.styles.backgroundColor = 'red'
        this.setState({ backgroundColor: this.state.styles.backgroundColor })
  }

 render() {

    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    
    }
  
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }
     const styles = 'red'
    return (
     
      <div className='app'  >
   
        <Header data={data} backgroundColor={this.state.otherElementBgColor} />

        <PrintImages  backgroundColor={this.state.otherElementBgColor} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          printCountries = {this.printCountries}
          bgColor={this.state.backgroundColor}
        />
       
       <Footer backgroundColor={this.state.otherElementBgColor} />
      </div>
      
      
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)










