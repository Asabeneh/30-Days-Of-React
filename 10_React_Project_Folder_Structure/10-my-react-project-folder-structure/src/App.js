import React, { Component } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import devPhoto from './images/dev_photo.png'
import asabeneh from './images/asabeneh.jpg'

class App extends Component {
    state = {
        count: 0,
        styles: {
            backgroundColor: '',
            color: '',
        },
    }

    changeBackground = () => {
        if (this.state.styles.backgroundColor == '') {
            this.setState({ styles: { backgroundColor: 'black', color: 'white' } })
        } else {
            this.setState({ styles: { backgroundColor: '', color: '' } })
        }
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

        // copying the author from data object to user variable using spread operator
        const user = { ...data.author, image: asabeneh }

        //developer
        const dev = {
            firstName: 'Daniil',
            lastName: 'Kapustin',
            position: 'Senior Developer',
            country: 'Russia',
            isChecked: true,
            skills: ['PL/SQL', 'PL+', 'Java', 'Oracle', 'JS', 'HTML', 'Git'],
            joinDate: 'May 30, 2023',
            avatar: devPhoto
        }

        return (
            <div className='app' style={this.state.styles}>
                {this.state.backgroundColor}
                <Header
                    data={data}
                    styles={this.state.styles}
                />
                <Main
                    user={user}
                    techs={techs}
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                    changeBackground={this.changeBackground}
                    addOne={this.addOne}
                    minusOne={this.minusOne}
                    count={this.state.count}
                />
                <Card
                    dev={dev}
                />
                <Footer
                    date={new Date()}
                    styles={this.state.styles}
                />
            </div>
        )
    }
}

export default App