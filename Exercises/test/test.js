// const arr = ['Finland', 'Estonia', 'Sweden', 'Norway']
// const arr2 = []
// arr.forEach((country) => arr2.push(country.toUpperCase()))
// console.log(arr2)


// const arr = [1,2,3,4,5]
// let sum = 0

// const add = (num,i,arr) =>{
//   sum+=num
// }
// arr.forEach(add)
// console.log(sum)

// const hey = () => {
//   console.log('hey')
// }
// function hello() {
//   console.log('hello')
// }
// hello()
// hey()

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
// const newarr = []
// countries.forEach(x => {
//   if (x.includes('land')) {
//     newarr.push(x)
//   }
  
// });
// console.log(countries.map((country) => country.toUpperCase()))
// console.log(countries.filter((country) => !country.includes('land')))
// console.log(newarr)

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const sum = numbers.reduce((x, y) => x + y)
// console.log(sum) // 55

// const numbers = [1, 2, 3, 4, 5]
// const value = numbers.reduce((acc, cur) => acc * cur ,0)
// console.log(value) // 0


class Person {
  constructor (firstName, lastName, age, country, city, score = 0, skills = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = score
    this.skills = skills
  }

  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki', 13, ['html', 'css', 'js', 'react']);
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo', 0, ['html']); // Corrected skills

// console.log(person1.city);      // Helsinki
// console.log(person1.skills);    // ['html', 'css', 'js', 'react']
// console.log(person2.city);      // Espoo
// console.log(person2.skills);

// const showDateTime = () => {
//     let now = new Date()
//     let year = now.getFullYear()
//     let month = now.getMonth() + 1
//     let date = now.getDate()
//     let hours = now.getHours()
//     let minutes = now.getMinutes()
//     if (hours < 10) {
//       hours = '0' + hours
//     }
//     else if (hours > 12) {
//         hours -=12
//     }

//     let datee = `${year}/${month}/${date}`
//     let Time = `${hours}:${minutes}`
//     return datee + "," + Time
// }

// console.log(showDateTime()) // 2019/10/12 12:46

