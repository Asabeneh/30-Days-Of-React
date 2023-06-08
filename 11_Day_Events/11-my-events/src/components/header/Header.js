import React, { Component} from 'react'

// class based component
class Header extends Component {
    constructor(props) {
      super(props)
      // the code inside the constructor run before any other code
    }
    render() {
      const {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
      } = this.props.data
  
      return (
        <header style={this.props.styles}>
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

  export default Header