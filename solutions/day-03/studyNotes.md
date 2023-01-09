1. Module 
    - function(s) that can be exported and imported when needed
    - In React we import modules

    ex: <!--  math.js -->
        - export const addTwo = (a,b) => a+b;
        - export default (function doSomeMath(){
            return{
                addTwo
            }
        }) 
        <!-- index.js -->
        <!-- imports the function with or without extension  -->
        - import doSomeMath from './math.js'; <!-- this way when using DEFAULT in export -->
        <!-- since addTwo has no default need to destructure it -->
        - import {addTwo} from './math.js';

2. Create-react-app
- in command line: npx create-react-app 'folder name'
- npm start to run react app on localhost 3000

3. React boilerplate
- 3 folders
    - node_modules
        - stores all node packages of the React app
    - public
        - index.html
            - only HTML file in entire app
        - favicon.ico
            - icon file
        - manifest.json
            - used to make app a progressive web app
        - other images
            - open graph images 
        - robots.txt 
            - info if website allows web scraping
    - src
        - App.css, index.css
            - CSS stylesheets
        - index.js
            - file connects all components with index.html
        - App.js
            - file where most presentational components are imported
        - serviceWorker.js
            - used to add progressive web app features
        - setupTests.js
            - to write testing cases
    