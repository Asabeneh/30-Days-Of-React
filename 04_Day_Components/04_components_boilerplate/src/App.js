import React from "react";
import imageAsa from './images/asabeneh.jpg'

const buttonStyle = {
    width : 200,
    padding: '0.5rem 1rem',
    backgroundColor: 'crimson',
    color: 'white',
    border: 'none',
    borderRadius: 4
}

const inputStyle = {
    border: 'none',
    padding: '0.5rem 1rem',
    backgroundColor: '#a4a4a4',
    borderRadius: 4
}

const inputContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: 13,
    padding: '1rem'
}

const container = {
    textAlign: 'center'
}

const skillStyle = {
    padding: '0.5rem',
    backgroundColor: 'purple',
    color: 'white',
    margin: '0.5rem',
    borderRadius: 4
}

const user = {
    name: 'Asabenah Yetayeh',
    title: 'Senior Developer,Finland',
    skills : ['HTML', 'Css', 'Sass', 'Scss', 'Js', 'React', 'Redux']
}

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const ReUsableButton = props => <button style={buttonStyle}> { props.text } </button>;
const ReUsableInput = props => <input style={inputStyle} type={ props.type } placeholder={ props.placeholder } />;
const ColorfulBox = props => <div style={{ backgroundColor: props.color, width:'100%', padding: '1rem' }}>{ props.color }</div>

const Exercise1 = () => (
    <div style={ container }>
        <h3>Subscribe</h3>
        <p>Sign bilmem ne ol sonra dön götüne koy.</p>
        <div style={inputContainer}>
            <ReUsableInput type="text" placeholder="First Name" />
            <ReUsableInput type="text" placeholder="Last Name" />
            <ReUsableInput type="text" placeholder="Email" />
        </div>
        <ReUsableButton text="seks" />
    </div>
)

const Exercise3 = () => {
    return(
        <div>
            <img src={imageAsa} style={{width:100,borderRadius:'50%'}} alt={'asa'}/>
            <h4>{user.name}</h4>
            <p>{user.title}</p>
            <div style={{padding:'1rem'}}>
                {
                    user.skills.map( skill => <span style={skillStyle}> {skill} </span> )
                }
            </div>
        </div>
    )
}

// The App, or the parent or the container component
export const App = () => (
    <div className='app'>
        <Exercise1/>
        <ColorfulBox color={hexaColor()}/>
        <ColorfulBox color={hexaColor()}/>
        <ColorfulBox color={hexaColor()}/>
        <ColorfulBox color={hexaColor()}/>
        <Exercise3/>
    </div>
)