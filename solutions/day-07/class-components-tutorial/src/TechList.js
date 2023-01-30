import React from "react";

class TechList extends React.Component{
    render(){
        const {tech} = this.props;
        const techsFormatted = tech.map((tech) => <li key={tech}>{tech}</li>)
        return(
            techsFormatted
        )
    }
}

export default TechList;