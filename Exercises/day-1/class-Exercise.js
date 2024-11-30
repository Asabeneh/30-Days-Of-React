// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class animal{
    constructor (name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}

// Create a Dog and Cat child class from the Animal Class.
class dog extends {
    constructor (name, age, color, legs){
        super(name, age, color, legs)
        this.sound = 'woofff'
    }
},
class cat extends {
    constructor (name, age, color, legs){
        super(name, age, color, legs)
        this.sound = 'meow'
    }
}

// Exercises Level 2
// Override the method you create in Animal class

// > done in the above 

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile,
// and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical 
// calculations as method for the Statistics class. Check the output below.


// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// console.log(statistics.describe())
// // you output should look like this

// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]