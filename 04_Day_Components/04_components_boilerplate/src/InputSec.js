import React from 'react';

const InputSec = () => {
    return (
        <>
            <div style={{ backgroundColor: "#C2E6F4", padding: "10px" }}>
                <h3 style={{ textAlign: "center" }}>SUBSCRIBE</h3>
                <p style={{ textAlign: "center" }}>Sign up with your email address to receive news and updates.</p>
                <br />
                <div style={{ textAlign: "center", }}>
                    <input style={{ padding: "10px", margin: "5px" }} placeholder='First name' />
                    <input style={{ padding: "10px", margin: "5px" }} placeholder='Last name' />
                    <input style={{ padding: "10px", margin: "5px" }} placeholder='Email' />
                    <br />
                    <br />
                    <button style={{ backgroundColor: "#F37474", padding: "10px", border: "none", width: "250px", color: "#FFF" }}>Subscribe</button>
                    <br />
                </div>
            </div>
        </>
    )
}

export default InputSec