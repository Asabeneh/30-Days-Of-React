// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// class animal{
//     constructor (name, age, color, legs){
//         this.name = name
//         this.age = age
//         this.color = color
//         this.legs = legs
//     }
// }

// Create a Dog and Cat child class from the Animal Class.
// class dog extends {
//     constructor (name, age, color, legs){
//         super(name, age, color, legs)
//         this.sound = 'woofff'
//     }
// },
// class cat extends {
//     constructor (name, age, color, legs){
//         super(name, age, color, legs)
//         this.sound = 'meow'
//     }
// }

// Exercises Level 2
// Override the method you create in Animal class

// > done in the above 

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile,
// and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical 
// calculations as method for the Statistics class. Check the output below.
// class Statistics {
//     constructor(data) {
//         this.data = data;
//     }

//     // Mean: The average of all numbers
//     mean() {
//         return this.data.reduce((acc, cur) => acc + cur) / this.data.length;
//     }

//     // Median: The middle value when the numbers are sorted
//     median() {
//         const sorted = [...this.data].sort((a, b) => a - b);
//         const middle = Math.floor(sorted.length / 2);
//         if (sorted.length % 2 === 0) {
//             return (sorted[middle - 1] + sorted[middle]) / 2;
//         } else {
//             return sorted[middle];
//         }
//     }

//     // Mode: The value that appears most frequently
//     mode() {
//         const frequency = {};
//         let maxFreq = 0;
//         let modes = [];
        
//         this.data.forEach((value) => {
//             frequency[value] = (frequency[value] || 0) + 1;
//             if (frequency[value] > maxFreq) {
//                 maxFreq = frequency[value];
//             }
//         });

//         for (const key in frequency) {
//             if (frequency[key] === maxFreq) {
//                 modes.push(Number(key));
//             }
//         }
//         return modes;
//     }

//     // Range: The difference between the max and min value
//     range() {
//         return Math.max(...this.data) - Math.min(...this.data);
//     }

//     // Variance: The average of the squared differences from the mean
//     variance() {
//         const meanValue = this.mean();
//         const squaredDiffs = this.data.map((value) => Math.pow(value - meanValue, 2));
//         return squaredDiffs.reduce((acc, cur) => acc + cur) / this.data.length;
//     }

//     // Standard Deviation: The square root of variance
//     standardDeviation() {
//         return Math.sqrt(this.variance());
//     }

//     // Min: The smallest number in the data
//     min() {
//         return Math.min(...this.data);
//     }

//     // Max: The largest number in the data
//     max() {
//         return Math.max(...this.data);
//     }

//     // Count: The number of values in the data
//     count() {
//         return this.data.length;
//     }

//     // Percentile: Returns the value below which a given percentage of data falls
//     percentile(percent) {
//         const sorted = [...this.data].sort((a, b) => a - b);
//         const index = Math.floor(percent / 100 * sorted.length);
//         return sorted[index];
//     }

//     // Frequency Distribution: Shows how frequently each value occurs
//     frequencyDistribution() {
//         const frequency = {};
//         this.data.forEach((value) => {
//             frequency[value] = (frequency[value] || 0) + 1;
//         });
//         return frequency;
//     }
// }


// Test the class
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const stats = new Statistics(ages);

console.log("Mean:", stats.mean());                   // Mean ,🎯
console.log("Median:", stats.median());               // Median 🎯
console.log("Mode:", stats.mode());                   // Mode 
console.log("Range:", stats.range());                 // Range 🎯
console.log("Variance:", stats.variance());           // Variance 🎯
console.log("Standard Deviation:", stats.standardDeviation()); // Standard Deviation 🎯
console.log("Min:", stats.min());                     // Min 🎯
console.log("Max:", stats.max());                     // Max 🎯
console.log("Count:", stats.count());                 // Count 🎯
console.log("50th Percentile:", stats.percentile(50)); // 50th Percentile (Median) 🎯
console.log("Frequency Distribution:", stats.frequencyDistribution()); // Frequency Distribution 🎯
