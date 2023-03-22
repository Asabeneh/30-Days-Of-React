
function web_tech()
{
    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
    ]
    return webTechs
}


function country() 
{
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
  return countries
}

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
let c = country()
for(let i in c)
{
    
    if (c[i] == "Ethiopia")
    {
        console.log("ETHIOPIA")
        found = true
    }
}
if(found == false)
{
 c.push("Ethiopia")
}
console.log(c) //4
found = false
t = web_tech()
for(let i in t)
{
    if(t[i] == "Sass")
    {
        found = true
        console.log("Sass is a cSS preprocess")
    }
}
if(found == false)
{
    t.push("Sass")
}
console.log(t) //5
let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
let backEnd = ['Node', 'Express', 'MongoDB']

let fullstack = frontEnd + backEnd
console.log(fullstack)
