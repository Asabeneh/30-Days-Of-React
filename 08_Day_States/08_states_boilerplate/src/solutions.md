/*Coding pattern 
class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
     //declare button variable here 
      changeBackground,
      printCountries,
     
    
    } = this.props
       return (
       //Event hadler 
        <Button text="Print Country" onClick={printCountries} style={buttonStyles} />
          </div>
          </div>
        
        </div>
      </main>
      
     
    )
  }
}

//Declare in App


class App extends React.Component {
  //state, not used yet
  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
  }
//Button function 
 printCountries = () => {
   // const firstCountry = countriesData[0]
    console.log('afghanisthan')
  } 
 return (
      <Main
         //prop 
          changeBackground={this.changeBackground}
          //declare it here 
          printCountries = {this.printCountries}
       
        />
  
    )
  }
}

Variable, eventhadler, function, prop 
*/


/*
//using this.state.image is very annoying 

//create the component 
class PrintImages extends React.Component {
  
 
  constructor(props) {
    super(props)
  }

  //step 2: initialize state 

   state = { 
  imageLink: 'https://countryflagsapi.netlify.app/flag/NL.svg'
  }

  //step 3: create a function 

    printCountries = () => {
    let firstCountry = 'https://countryflagsapi.netlify.app/flag/AF.svg'
    let secondCountry =  'https://countryflagsapi.netlify.app/flag/DE.svg'
    
    let imageLink = this.state.imageLink === firstCountry ? secondCountry :firstCountry
    this.setState ({
      imageLink
    })
    
    //console.log(firstCountry )
   // console.log(firstCountry)

   //imageLink = this.printCountries()
  render() {

    return (
    <>
      <div id ="country-container" >
      <img id="flag-image" src={this.state.imageLink} width="100" height="100"></img>
      <div>
          
      <Button text="Print Country" onClick={this.printCountries} style={buttonStyles} />
      </div>
      </div>
      </>
    )
  }
}

step 4: Declare the component 
   <PrintImages />
  }
*/