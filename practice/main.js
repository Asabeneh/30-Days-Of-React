import React from "react";
import { ReactDOM } from "react-dom";

// To get the root element from the HTML document
const rootElement = document.querySelector(".root");

// JSX element, header
const header = <h1>Welcome to react</h1>;

// JSX element, app
const app = <div className="app">{header}</div>;

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
