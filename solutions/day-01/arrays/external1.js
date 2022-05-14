let b = document.createElement("button");
let t = document.createTextNode("Click me 3");
b.setAttribute("onclick", "alert('Welcome to Day 1 of 30DaysOfReact (external)')");
b.appendChild(t);
body.appendChild(b);