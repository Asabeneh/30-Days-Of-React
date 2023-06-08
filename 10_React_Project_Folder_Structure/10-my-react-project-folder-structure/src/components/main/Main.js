import React, { Component } from "react"
import TechList from '../techList/TechList'
import UserCard from '../user/UserCard'
import Button from '../shared/Button'
import { buttonStyles } from '../../styles/buttonStyles'

class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            techs,
            user,
            greetPeople,
            handleTime,
            changeBackground,
            count,
            addOne,
            minusOne,
        } = this.props

        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={techs} />
                    </ul>
                    <UserCard user={user} />
                    <Button
                        text='Greet People'
                        onClick={greetPeople}
                        style={buttonStyles}
                    />
                    <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
                    <Button
                        text='Change Background'
                        onClick={changeBackground}
                        style={buttonStyles}
                    />
                </div>
            </main>
        )
    }
}

export default Main