import React, { Component } from 'react'
import '../../styles/home.css'

//home
class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('Home page')
        return (
            <div className='home'>
                <h2>Home</h2>
                <p>This is home page</p>
            </div>
        )
    }
}

export default Home