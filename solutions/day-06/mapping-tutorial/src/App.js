import React from "react";
import Numbers from "./Numbers";
import Skills from "./Skills";

const App = () => {
    const numbers = [1,2,3,4,5];

    // array of arrays
    const skills = [
        ['HTML', 10],
        ['CSS', 7],
        ['JavaScript', 9],
        ['React', 8],
    ]
    return (
        <div className="container">
            <div>
                <h1>Numbers List</h1>
                <ul>
                    <Numbers numbers = {numbers}/>
                </ul>

                <ul>
                    <Skills skills= {skills}/> {/*pass array of arrays as property to Skills component */}
                </ul>

            </div>
        </div>
    )
}

export default App;