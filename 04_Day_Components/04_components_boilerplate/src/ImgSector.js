import React from 'react';
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'

const ImgSector = () => {
    return (
        <>
            <div style={{ backgroundColor: "#F0F1F7", padding: "20px", textAlign: "center" }}>
                <p>Front End Technologies</p>
                <img src={htmlLogo} style={{ width: "200px", padding: "10px" }} alt="html logo" />
                <img src={cssLogo} style={{ width: "200px", padding: "10px" }} alt="css logo" />
                <img src={jsLogo} style={{ width: "200px", padding: "10px" }} alt="Javascript logo" />
                <img src={reactLogo} style={{ width: "200px", padding: "10px" }} alt="React logo" />
            </div>
        </>
    )
}
export default ImgSector;