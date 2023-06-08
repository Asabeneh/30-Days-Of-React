import React, { Component } from "react"
import is_checked from '../../images/is_checked.png'
import clock_pict from '../../images/clock.png'

const isCheckedLogo = (
    <div>
        <img className='is-checked' src={is_checked} alt='is checked' />
    </div>
)
const clock = (
    <div className='clock-wrapper'>
        <img className='clock' src={clock_pict} alt='clock' />
    </div>
)

const SkillsList = ({ skills }) => {
    const skillsMap = skills.map((skill, i) => (
        <div className='skill' key={i}>{skill}</div>
    ))

    return skillsMap
}

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            dev,
        } = this.props

        return (
            <main>
                <div className='card-wrapper'>
                    <div className='photo-wrapper'>
                        <div className='avatar-wrapper'>
                            <img className='avatar' src={dev.avatar} alt='avatar' />
                        </div>
                    </div>
                    <div className='name-and-check'>
                        <div>{dev.firstName} {dev.lastName}</div>
                        {isCheckedLogo}
                    </div>
                    <div className='position-wrapper'>{dev.position}, {dev.country}</div>
                    <div className='skills-wrapper'>
                        <SkillsList skills={dev.skills} />
                    </div>
                    <div className='cardFooter'>
                        <div className='clock-wrapper'>{clock}</div>
                        <div className='join'><small>{dev.joinDate}</small></div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Card