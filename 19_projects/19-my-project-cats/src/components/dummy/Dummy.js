import React, { Component } from 'react'
import '../../styles/dummy.css'

const Cat = ({ cat: { name, weight, age } }) => {
    return (
        <div className='cat' key={name}>
            <h3 className='cat_name'><b>Breed:</b> {name.toUpperCase()}</h3>
            <div className='cat_text' key={name}>
                <p>
                    <span><b>Weight:</b>{weight}</span>
                </p>
                <p>
                    <span><b>Age:</b>{age}</span>
                </p>

            </div>
        </div>
    )
}

class Dummy extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='cat-info'>
                <Cat cat={this.props.cat} />
            </div>
        )
    }
}

export default Dummy
