import React, { Component } from "react"

class TechList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { techs } = this.props
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
}

export default TechList