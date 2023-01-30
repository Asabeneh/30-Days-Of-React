import React from "react";
import TechList from "./TechList";
class Main extends React.Component{
    render(){

        return(
            <main>
                <div className="main-wrapper">
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList tech = {this.props.tech}/>
                    </ul>
                </div>
            </main>
        )
    }
}

export default Main;