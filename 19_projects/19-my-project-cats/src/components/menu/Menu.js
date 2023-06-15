import React, { Component } from 'react'
import {
    Route,
    Routes,
} from 'react-router-dom'
import '../../styles/menu.css'
import Dummy from '../dummy/Dummy'
import Home from '../home/Home'
import About from '../about/About'

//not found
const NotFound = (props) => <h1>The page your looking for not found</h1>

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='menu-data'>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/dummy' element={<Dummy cat={this.props.cat} />} />
                    <Route exact path='/' element={<Home />} />
                    <Route component={NotFound} />
                </Routes>
            </div>
        )
    }
}

export default Menu 