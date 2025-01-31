import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'



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
      bgColor
    
    } = this.props
    return (
  
      <main style={{ backgroundColor: bgColor, color: "black" }}>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button text="Change Background" onClick={changeBackground} style={buttonStyles} />
        
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
          <p>Love</p>
         {/* <p>Copyright {this.props.date.getFullYear()}</p> */}
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  /*
  state = {
    bgColor: '',
  };
  */

   state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
  }
  //This would cause you to change color in 2 clicks 
  //mainBgColor = this.state.styles.backgroundColor
  //otherElementBgColor = this.state.styles.color
  
  //Without initialization you would need 2 clicks
  /*
  state = {
    mainBgColor: "white",
    otherElementBgColor: "", // Instead of an empty string
  };
 */
    // Function to toggle main background color
    toggleMainBg = () => {
     
      this.setState({
        backgroundColor: this.state.backgroundColor === "white" ? "purple" : "white",
      
      });
    };
  // Function to toggle header and footer background color
  toggleHeaderFooterBg = () => {
    this.setState({
      otherElementBgColor: this.state.otherElementBgColor === "" ? "purple" : "",
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
        {this.state.backgroundColor }
        <Header data={data} backgroundColor={this.state.otherElementBgColor} />

        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          bgColor={this.state.backgroundColor}
        />
       <Footer backgroundColor={this.state.otherElementBgColor} />
      </div>
      
      
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)












