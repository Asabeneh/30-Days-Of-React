import React, { Component} from 'react'

class Footer extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <footer style={this.props.styles}>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
      )
    }
  }

export default Footer  