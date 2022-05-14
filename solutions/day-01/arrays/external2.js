b = document.createElement("button");
t = document.createTextNode("Click me 4");
b.setAttribute("onclick", "alert('Welcome to Day 1 of 30DaysOfReact (external multiple)')");
b.appendChild(t);
body.appendChild(b);