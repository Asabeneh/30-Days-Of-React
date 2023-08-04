console.log('Welcome!')

const array = Array()
const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

const fourYvalues = Array(4).fill('Y')
fourYvalues.push('y')
console.log(fourYvalues)
console.log(fourYvalues.lastIndexOf('y'))

const concatArrays = eightXvalues.concat(fourYvalues)
console.log(concatArrays)