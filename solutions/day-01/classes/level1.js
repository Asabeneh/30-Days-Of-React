// 1
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    makeNoise() {
        return "Generic Animal Noise!"
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }

    makeNoise() {
        return "Bark!"
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }

    makeNoise() {
        return "Meow!"
    }
}

// 2
let dog = new Dog("Hund", 10, "Black", 3)
console.log(dog.makeNoise())
let cat = new Cat("Katt", 105, "Black and White", 4)
console.log(cat.makeNoise())

// 3
class Statistics {
    constructor(nums) {
        this.nums = nums
    }
    
    count() {
        return this.nums.length
    }
    sum() {
        return this.nums.reduce((prev, curr) => prev + curr, 0)
    }
    min() {
        return this.nums.sort()[0]
    }
    max () {
        return this.nums.sort()[this.count() - 1]
    }
    range() {
        return this.max() - this.min()
    }
    mean() {
        return this.sum() / this.count()
    }
    median() {
        return this.nums.sort()[Math.floor(this.count() / 2)]
    }
    mode() {
        let obj = {mode : 0, count : 0}
        let current = {mode : 0, count : 0}
        this.nums.sort().forEach(e => {
            if (current.mode != e) {
                if (current.count > obj.count)
                    obj = current
                current = {mode : e, count : 0}
            }
            current.count++
        });
        return obj
    }
    var() {
        return this.nums.sort().reduce((p, c) => p + Math.pow(c - this.mean(), 2), 0) / this.count() - 1
    }
    std() {
        return Math.sqrt(this.var())
    }
    freqDist() {
        let freqDists = []
        let current = 0
        let last = 0
        this.nums.sort().forEach(e => {
            if (last != e && last != 0) {
                freqDists.push({count : current / this.count() * 100, num : last})
                current = 0
            }
            last = e
            current++
        })
        return freqDists.sort((a,b) => b.count - a.count)
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = new Statistics(ages)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]