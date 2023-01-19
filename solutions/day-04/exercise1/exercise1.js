// What is the difference between a regular function and an arrow function?
//  - regular functions can be names, arrow functions cannot be named


// What is a React Component?
//  - a component is a small resusable code


// How do you make a React functional component?
// - they are naming is capitalize 


// What is the difference between a pure JavaScript function and a functional component?
// - javascript functions do not have html tags, functional components do have html tags


// How small is a React component?
// - can be one line of code


// Can we make a button or input field component?
// - yes


// Make a reusable Button component.
const Button = () => <button>Action</button>;


// Make a reusable InputField component.
const InputField = () => <input type='text' placeholder='Enter name'/>


// Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
const warning = alert('warning you need to stop');
const success = alert('success')
const AlertBox = () => {
    return(
        <div>
            {warning}
            <div>
                {success}
            </div>
        </div>
    )
}