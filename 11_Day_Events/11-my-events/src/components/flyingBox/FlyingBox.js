import React, { Component } from 'react';

class FlyingBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            handleMouseOver,
        } = this.props

        return (
            <main>
                <div className='box-wrapper'>
                    <div className='flying-box' onMouseOver={handleMouseOver} style={ this.props.styles }>
                        30 Days of React
                    </div>
                </div>
            </main>
        )
    }
}

export default FlyingBox