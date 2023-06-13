import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

const Input = ({ type, name, placeholder, style }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      style={style}
    />
  )
}

const inputWithStyles = (CompParam, name = 'default') => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ]
  const { backgroundColor, color } = colors.find((c) => c.name === name)

  const buttonStyles = {
    backgroundColor,
    padding: '10px 5px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color,
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewInput = inputWithStyles(Input)
const ReactInput = inputWithStyles(Input, 'react')
const InfoInput = inputWithStyles(Input, 'info')
const WarningInput = inputWithStyles(Input, 'warning')
const DangerInput = inputWithStyles(Input, 'danger')
const SuccessInput = inputWithStyles(Input, 'success')

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Higher Order Components</h1>
        <Input
          type='text'
          name='No style'
          placeholder='No style input'
        />
        <NewInput
          type='text'
          name='Default style'
          placeholder='Default Styled input'
          style='default'
        />
        <ReactInput
          type='text'
          name='React style'
          placeholder='React Styled input'
          style='react'
        />
        <InfoInput
          type='text'
          name='Info style'
          placeholder='Info Styled input'
          style='info'
        />
        <SuccessInput
          type='text'
          name='Success style'
          placeholder='Success Styled input'
          style='success'
        />
        <WarningInput
          type='text'
          name='Warning style'
          placeholder='Warning Styled input'
          style='warining'
        />
        <DangerInput
          type='text'
          name='Danger style'
          placeholder='Danger Styled input'
          style='danger'
        />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

