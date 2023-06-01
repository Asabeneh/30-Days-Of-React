console.log('Function Exercises')

function solveQuadratic (a=0, b=0, c=0) {
    console.log('a='+a+', b='+b+', c='+c)
    let x1
    let x2
    let D = b*b - 4*a*c
    if (D<0) {
        return null
    } else if (D==0) {
        x1=-1*b / 2*a
        return x1
    } else if (D>0) {
        x1=(-1*b + Math.sqrt(D)) / 2*a 
        x2=(-1*b - Math.sqrt(D)) / 2*a 
        return {x1, x2}
    }
    console.log('-----------------')
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
