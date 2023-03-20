let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let new_array = []
let new_element = ""
for(let x in text)
{  
    if(text[x] == " ")
    {
        new_array.push(new_element)
        new_element = ""
    } else {
        new_element = new_element + text[x]
    }
}
console.log(new_array.length)
console.log(new_array)