import { web_tech } from "./webtechs"
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let new_array = []
let new_element = ""
for(let x in text)
{  
    if(text[x] == " " || text[x] == ".")
    {
        new_array.push(new_element)
        new_element = ""
    } else {
        new_element = new_element + text[x]
    }
}
console.log(new_array.length)
console.log(new_array) //2
let shopping_cart = ["Milk", "Coffee", "Tea", "Honey"]
if(shopping_cart[0] != "Meat")
{
    shopping_cart.splice(0, 0, "Meat")
}
if(shopping_cart[shopping_cart.length - 1] != "sugar")
{
    shopping_cart.splice(shopping_cart.length - 1, 0, "Sugar")
}
let like_honey = false
if(like_honey == false)
{
    shopping_cart.splice(shopping_cart.length - 1, 1)
}
shopping_cart[3] = "Green Tea"
console.log(shopping_cart) //3

console.log("untested")
let found = false
for(let i in countries)
{
    
    if(countries[i] == "Ethiopia")
    {
        console.log("ETHIOPIA")
        found = true
    }
}
if(found == false)
{
    countries.push("Ethiopia")
}
console.log(countries) //4
