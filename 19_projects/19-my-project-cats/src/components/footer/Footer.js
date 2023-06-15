import React, { Component } from 'react'
import '../../styles/footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className='cats-wrapper'>
                    <h2>Cats paradise</h2>
                    <p>There are {this.props.count} cat breeds in the api</p>
                    <div className='cat-average'>
                        On average a cat can weight about {' '}
                        <div className='cat-weight-age'>{Math.round(this.props.cats.weight * 100) / 100}</div> Kg and live {' '}
                        <div className='cat-weight-age'>{Math.round(this.props.cats.age * 100) / 100}</div> years.
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer