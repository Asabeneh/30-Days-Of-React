// Exercise 1 - Level 1

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

const newArray = Array(6).fill('cats');
newArray.push(7)

const itCompanies = Array('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon')

for (let i = 0; i<itCompanies.length; i++) {
    return (itCompanies[i].toLowerCase())
}

const store = itCompanies.pop()
const string = itCompanies.join(', ')
const sentence = string + " and " + store + " are big IT Companies."
// return sentence

for (let i = 0; i < itCompanies.length; i++) {
    let index = itCompanies.indexOf(itCompanies[i]) 
    index != -1
    ? console.log('This company does exist in the array')
    : console.log('This company does not exist in the array')
    }

for (let i = 0; i < itCompanies.length; i++) {
        
    if (itCompanies[i].includes('o'))  {
        let matcher = itCompanies[i].match(/o/g).length
        if (matcher > 1) {
            return itCompanies[i]
        }
    } 
}

const sliced = itCompanies.slice(itCompanies.length-3, itCompanies.length)

const middle = itCompanies[Math.floor((itCompanies.length)/2)]

const middleIndex = Math.floor((itCompanies.length)/2)

itCompanies.splice(middleIndex,1)

itCompanies.length = 0



