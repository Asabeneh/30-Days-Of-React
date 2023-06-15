import React, { Component } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    NavLink,
} from 'react-router-dom'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './styles/common.css'
import { cats } from './data/cats'

const Navbar = () => (
    <div className='menu-wrapper'>
        <div className='menu-box'>
            <NavLink className='menu-point' to='/'>HOME</NavLink>
        </div>
        <div className='menu-box'>
            <NavLink className='menu-point' to='/about'>ABOUT</NavLink>
        </div>
        <div className='menu-box'>
            <NavLink className='menu-point' to='/dummy'>DUMMY DATA</NavLink>
        </div>
    </div>
)

class App extends Component {
    state = {
        data: [],
        cat: {},
    }

    componentDidMount() {
        // this.fetchCountryData()
        this.loadStaticData()
    }
    fetchCountryData = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds'
        try {
            const response = await axios.get(url)
            const data = await response.data
            this.setState({
                data,
            })
        } catch (error) {
            console.log(error)
        }
    }

    loadStaticData = () => {
        this.state.data = cats

        const idx = Math.round(Math.random() * cats.length)
        const formattedCats = this.state.data
            .map((cat) => {
                return {
                    name: cat.name,
                    weight: parseInt(cat.weight.metric.substr(cat.weight.metric.indexOf('-') + 2)),
                    age: parseInt(cat.life_span.substr(cat.life_span.indexOf('-') + 2)),
                }
            })
        this.state.cat = formattedCats[idx]
        console.log(`loadStaticData: data.length: ${this.state.data.length} cat.name: ${this.state.cat.name}`)
    }

    render() {

        this.loadStaticData()

        const avCat = this.state.data
            .map((cat) => {
                return {
                    name: cat.name,
                    weight: parseInt(cat.weight.metric.substr(cat.weight.metric.indexOf('-') + 2)),
                    age: parseInt(cat.life_span.substr(cat.life_span.indexOf('-') + 2)),
                }
            })
            .reduce((w, c) => {
                return {
                    name: 'Cats',
                    weight: w.weight += c.weight / this.state.data.length,
                    age: w.age += c.age / this.state.data.length,
                }
            }
                , { name: 'Cats', weight: 0, age: 0 })

        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Navbar />
                    <Menu cat={this.state.cat} />
                    <Footer
                        cats={avCat}
                        count={this.state.data.length}
                    />
                </div >
            </Router>
        )
    }
}

export default App