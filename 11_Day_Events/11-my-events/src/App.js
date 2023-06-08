import React, { Component } from 'react'
import Header from './components/header/Header'
import FlyingBox from './components/flyingBox/FlyingBox'

class App extends Component {
  state = {
    width: 10,
    height: 5,
    styles: {
      marginTop: 0,
      marginLeft: 0,
    }
  }

  getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  handleMouseOver = (e) => {
    const screen = this.getWindowDimensions()
    
    console.log(screen)
    this.setState({
      styles: {
        top: Math.floor(Math.random() * (screen.height - this.state.height)),
        left: Math.floor(Math.random() * (screen.width - this.state.width)),
      }
    })
  }

  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Daniil',
        lastName: 'Kapustin',
      },
      date: 'Jun 8, 2023',
    }

    return (
      <div className="App" >
        <Header
          data={data}
        />

        <FlyingBox
          styles={this.state.styles}
          handleMouseOver={this.handleMouseOver}
        />
      </div>
    )
  }
}

export default App;
