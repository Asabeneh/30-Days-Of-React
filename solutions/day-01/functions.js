function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
function addTwoNumbers(num1, num2) {
    return num1 + num2
}

function printFullName() {
    let firstName = 'Derrek'
    let lastName = 'Gass'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
function areaOfCircle(radius) {
    let area = Math.PI * radius * radius
    return area
}
  
function square(side) {
    return side * side
}

let numbers = [10, 20, 30, 40, 50]
function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function sumAllNums() {
    console.log(arguments)
}
