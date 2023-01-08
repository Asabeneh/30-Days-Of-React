//testing if CDN are working correctly
console.log(React); // print React object to console

// get root element from index.html
const rootElement = document.querySelector('.root');

// Create JSX element for the browser
// const jsxElement = <h1>I am a JSX element</h1>

// ALL STYLING BELOW NOT USED ANYMORE 
// Add styling for the header JSX element
// const headerStyles = {
//     backgroundColor: '#61DBFB',
//     fontFamily: 'Helvetica Neue',
//     padding: 25,
//     lineHeight: 1.5,
// }

// Add styling for the main JSX element
// const mainStyles = {
//     backgroundColor: '#F3F0F5',
// }

// Add styling for the footer JSX element
// const footerStyles = {
//     backgroundColor: '#61DBFB',
// }


// Instead of using static data we can use dynamic data and inject it into JSX elements;
const welcome = 'Welcome to 30 Days Of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const author = {
    firstName: 'Adam',
    lastName: 'West'
}
const date = 'Jan 8, 2023';

// Create a header JSX element that contains title, subtitles, author or date
const header = (
    <header className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>Student: {author.firstName} {author.lastName} </p>
        <small>Date: {date}</small>
    </header>
)


// Inject array into main 
const techs = ['HTML','CSS','JavaScript'];
// tech not displayed correctly, need to fix that how?
// need to also give each list item a unique key identifier
const techsFormatted = techs.map(element =>{return <li key={element}>{element}</li>});

// Create a main JSX element that contains a title and ul tag with list items
const main = (
    <main className="main-wrapper">
        <p>Prerequisite to get started with{' '}
        <strong>
            <em>react.js:</em>
        </strong>
        </p>
        <ul>{techsFormatted}</ul>
    </main>
    
)

// Create a footer that contains a p tag 
const footer = (
    <footer className="footer-wrapper">
        <p>Copyright 2023</p>
    </footer>
)


//EXERCISE CODE.........................................

// Create a style object for the main JSX
const myStyles = {
    backgroundColor: 'lightcoral',
    fontWeight: 'bold'
}

const footerStyles ={
    backgroundColor: 'lightgrey',
    fontSize: '20px'
}

// Write your name in a JSX element and store it in a name variable
const myName = {
    firstName:'Tom',
    lastName: 'Hanks'
}
const exercise = (
    <h1>Name: {myName.firstName} {myName.lastName}</h1>
)

// Write a JSX element which displays your full name, country, title, gender, 
// email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const person = {
    fName: 'Jason',
    lName: 'Gideon',
    country: 'U.S.A',
    title: 'Doctor',
    gender: 'Male',
    email: '123@cola.com',
    number: '123-456-7890'
}
const personInfo = (
    <div style={myStyles}>
        <h1>Name: {person.fName} {person.lName}</h1>
        <p>Country of origin: {person.country}</p>
        <p>Profession: {person.title}</p>
        <p>Gender: {person.gender}</p>
        <p>Email: {person.email}</p>
        <p>Phone Number: {person.number}</p>
    </div>
)

// Write a footer JSX element
const myFooter = (
    <div style={footerStyles}>
        <p>This is the exercise footer</p>
    </div>
)





// Create parent JSX element to house all other elements
const app = (
    // use className instead of class with React
    <div className="app"> 
        {header}
        {main}
        {exercise}
        {personInfo}
        {myFooter}
        {footer}
    </div>
)

// Render JSX element using ReactDOM package
// ReactDOM render method takes 2 args
//  - React element 
//  - Root element from HTML
ReactDOM.render(app, rootElement);
