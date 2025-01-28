import React from 'react'
import ReactDom from 'react-dom'


class App extends React.Component {
  //declaring state 

  state = {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOsR0U0cMQrip5q8C330243NWFIMVT0306A&s',
    buttonName: 'Click to see your pet'
 
}
  changeAnimal = () => {
    let dogURL =
      'https://images.pexels.com/photos/236622/pexels-photo-236622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    let catURL =
      'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      let image = this.state.image === catURL ? dogURL : catURL
      this.setState({ image })
    
    }
    changeButtonName = () => {
      
      let buttonDog = 'dog'; 
      let buttonCat = 'cat'
    let  buttonName=this.state.buttonName === buttonDog ? buttonCat : buttonDog
      this.setState({ buttonName });
  };
  handleButtonClick = () => {
    this.changeAnimal();
    this.changeButtonName();
  };
   
  render() {
   
    //accessing the state value 
    const count = this.state.count 
     // method which add one to the state

 
    return (
      <div className='App'>
        <h1>{count} </h1>
        <h1>30 Days Of React</h1>
        <div className='animal'>
        <img src={this.state.image} alt='animal' />
        </div>

        <button onClick={this.handleButtonClick} className="btn btn-add">
      {this.state.buttonName}
    </button>
        
      </div>

    
    )
  }
}
const rootElment = document.getElementById('root')
ReactDom.render(<App />, rootElment)