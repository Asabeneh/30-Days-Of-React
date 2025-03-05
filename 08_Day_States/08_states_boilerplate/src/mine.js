// index.js
import React from 'react'

const dog = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';
const cat = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg';

export default class Mine extends React.Component {

    // declaring state
    state = {
        count: 0,
        imgLink: cat
    }

    changeUrl = () => {
        if( this.state.imgLink === dog ){
            this.setState({ imgLink : cat })
        }else {
            this.setState({ imgLink : dog })
        } 
    }

  render() {
    // accessing the state value
    const count = this.state.count

    return (
      <div className='App'>
        <img src={ this.state.imgLink } alt='cat' />
        <button onClick={this.changeUrl}>Change ulaaan</button>
        <h1>{count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add One
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrease One
        </button>
      </div>
    )
  }
}
