// math.js
export const addTwo = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b

export default(function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  }
})()
