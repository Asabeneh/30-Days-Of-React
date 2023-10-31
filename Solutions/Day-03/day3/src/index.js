import React from 'react';
import ReactDOM from 'react-dom/client';

// const header = (
//   <header>
//     <h1>Welcome to 30 Days Of React</h1>
//     <h2>Getting Started React</h2>
//     <h3>JavaScript Library</h3>
//   </header>
// )



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className = 'rounded outerbox' style = {{background: 'lightblue'}}>

      <h1 className='text'>
        Subscribe
      </h1>

      <p className='text'>  
        Sign up with your email address to recieve news and updates 
      </p>

      <div>

      <input 
        className = 'rounded input' 
        type = "text" 
        id="firstname" 
        name="firstname" 
        placeholder='First Name'
      />
      <input 
        className = 'rounded input' 
        type = "text" 
        id="lastname" 
        name="lastname" 
        placeholder='Last Name'
      />
      <input 
        className = 'rounded input' 
        type = "text" 
        id="email" 
        name="email" 
        placeholder='Email'
      />
      </div>

      <button className='button-9'>
        Subscribe
      </button>
    </div>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


