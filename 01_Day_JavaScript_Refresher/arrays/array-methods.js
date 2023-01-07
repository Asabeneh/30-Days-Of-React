// These are some of the available methods to deal with arrays:

// printing title, result of the method, print an empty line

function print(title, results){
    console.log("\n **********************" + title + "*********************\n")
    results.forEach(element => {
        console.log(element)
    });
    console.log('\n#######################END########################\n\n\n')
}


// Array
const arr = Array()
print('Empty Array', ['array = ' + arr])


// length
const arrayLenght1 = Array(2)
const arrayLenght2 = [1,2,3]
print('length', [
    'array1 = ' + arrayLenght1, 
    'array1 Length = ' + arrayLenght1.length,
    'array2 = ' + arrayLenght2,
    'array2 Length = ' + arrayLenght2.length
])


// concat
const arrayConcat1 = [1,2,3]
const arrayConcat2 = [4, 5, 6]
const concat = arrayConcat1.concat(arrayConcat2)
print('concat', [
    'array = ' + arrayConcat1,
    'array = ' + arrayConcat2,
    'concat = ' + concat
])


// indexOf
const arrayIndexOf = [1,2,3,4,5]
print('indexOf', [
    'array = ' + arrayIndexOf,
    'array.indexOf(5) = ' + arrayIndexOf.indexOf(5),
    'array.indexOf(5) = ' + arrayIndexOf.indexOf(0),
    'array.indexOf(5) = ' + arrayIndexOf.indexOf(1),
    'array.indexOf(5) = ' + arrayIndexOf.indexOf(6),
])


// // slice
// console.log('slice')



// // splice
// console.log('splice')



// // join
// console.log('join')


// toString
const arrayToString = [1,2,3,4,5]
print('toString', [
    'array filled with numbers = ' + arrayToString,
    'array.toString() = ' + arrayToString.toString()
])
// console.log('toString')


// // includes
const includeNumbers = [1, 2, 3, 4, 5]
const includeWebTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
] // List of web technologies
print('includes', [
    'array = ' + includeNumbers,
    'includeNumbers(5) ? ' + includeNumbers.includes(5),
    'includeNumbers(0) ? ' + includeNumbers.includes(0),
    'includeNumbers(1) ? ' + includeNumbers.includes(1),
    'includeNumbers(6) ? ' + includeNumbers.includes(6),
    '\n',
    'WebTechs = ' + includeWebTechs,
    'include(node) ? = ' + includeWebTechs.includes('Node'),
    'include(C) ? = ' + includeWebTechs.includes('C'),
])

// lastIndexOf
const arraylastIndexOf = [1,2,3,4,5,3,1,2]
print('lastIndexOf', [
    'array = ' + arraylastIndexOf,
    'array.lastIndexOf(2) = ' + arraylastIndexOf.lastIndexOf(2),
    'array.lastIndexOf(0) = ' + arraylastIndexOf.lastIndexOf(0),
    'array.lastIndexOf(1) = ' + arraylastIndexOf.lastIndexOf(1),
    'array.lastIndexOf(4) = ' + arraylastIndexOf.lastIndexOf(4),
    'array.lastIndexOf(6) = ' + arraylastIndexOf.lastIndexOf(6)
])

// // isArray
const numbersisArray1 = [1, 2, 3, 4, 5]
const variable = 100
print('isArray',[
    'array1 = ' + numbersisArray1,
    'Array.isArray(numbersisArray1) ? ' + Array.isArray(numbersisArray1),
    'variable = ' + variable,
    'Array.isArray(variable) ? ' + Array.isArray(variable)
])


// // fill

// console.log('fill')


// // push
// console.log('push')

// // pop
// console.log('pop')

// // shift
// console.log('shift')

// // unshift
// console.log('unshift')



