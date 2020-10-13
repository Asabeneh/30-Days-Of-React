const person = {
    firstName: 'Derrek',
    lastName: 'Gass',
    age: 32,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+3584545454545',
    getLocation: function () {
        return `${this.city}, ${this.country}`
    }
}
  
console.log(person.getFullName())
console.log(person.firstName, person.age)

console.log(person['firstName'])
console.log(person.getLocation())

person.nationality = 'American'
person.country = 'America'
person.title = 'Software Developer Engineer'
person.skills.push('React')
person.skills.push('Node.js')
person.isMarried = false

person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
person.setName = function (first, last) {
    this.firstName = first
    this.lastName = last
}

console.log(person)
console.log(person.getPersonInfo())

const dupPerson = Object.assign({}, person)
dupPerson.setName('Stewart', 'Glass')
console.log(dupPerson.getPersonInfo())

const values = Object.values(dupPerson)
console.log(values)

const keys = Object.keys(dupPerson)
console.log(keys)

const entries = Object.entries(dupPerson)
console.log(entries)

console.log(dupPerson.hasOwnProperty('skills'))