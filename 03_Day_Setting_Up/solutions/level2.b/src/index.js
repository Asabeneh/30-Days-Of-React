import React from "react"
import ReactDOM from "react-dom/client"

import "./style/style.css"

const form = (
  <div className="form-wrapper">
    <div className="form">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
      </div>
      <button>Subscribe</button>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {form}
  </React.StrictMode>
);
