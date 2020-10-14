class Person {
    constructor(firstName='Ivy', lastName='Graham', age=30, country='USA', city='Santa Cruz', gender='Female') {
        console.log(this) // should be empty upon instantiation
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
        this.gender = gender
    }
    // class methods
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    set setScore(score) {
        this.score += score
    }
    get getSkills() {
        return this.skills
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = 
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let pronoun = this.gender =='Male'? 'He' : 'She'
        let formattedSkills = skills ? `${pronoun} knows ${skills}` : ''
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkill() {
        const skills = [
            'JavaScript',
            'React Native',
            'HTML',
            'SaSS',
            'Java',
            'Python'
        ]
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

class Student extends Person{
    saySomething() {
        console.log('I am a child of the Person class')
        console.log(`I am ${this.firstName}.`)
        console.log(this.getPersonInfo())
    }
}


const person1 = new Person()
console.log(person1)
person1.setScore = 1
person1.setSkill = 'Acupuncture'
person1.setSkill = 'Herbal Medicine'
person1.setSkill = 'Mantic Arts'
person1.setSkill = 'Traditional Chinese Medicine'
console.log(person1.getSkills)
console.log(person1.getPersonInfo())

const person2 = new Person('Derrek', 'Gass', 32, 'USA', 'Santa Cruz', 'Male')
console.log(person2)
person2.setScore = 1
person2.setSkill = 'JavaScript'
person2.setSkill = 'React Native'
person2.setSkill = 'HTML'
person2.setSkill = 'SaSS'
person2.setSkill = 'Java'
person2.setSkill = 'Python'
console.log(person2.getSkills)
console.log(person2.getPersonInfo())

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())

const student1 = new Student('Tobias', 'the Cat', 10, 'USA', 'Santa Cruz', 'Male')
student1.setSkill = 'Meowing'
student1.setSkill = 'Purring'
console.log(student1.saySomething())