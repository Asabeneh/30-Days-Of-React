/*Let's try to develop a program which calculate measure of central tendency 
of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
In addition to those measures find the min, max, count, percentile, and frequency distribution of 
the sample. You can create a class called Statistics and create all the functions which do statistical 
calculations as method for the Statistics class. Check the output below. */

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    constructor(ages){
        this.ages = ages
    }
    count(){
        return this.ages.length
    }
    sum(){
        return this.ages.reduce((a,b)=>{return a + b});
    }
    min(){
        return Math.min(...this.ages);
    }
    max(){
        return Math.max(...this.ages);
    }
    range(){
        return this.max() - this.min();
    }
    mean(){
        return Math.ceil(this.sum() / this.count());
    }
    median(){
        return this.ages.sort()[Math.floor(this.count()/2)];
    }
    mode(){
        let mode = 0, count = 0, num = {};
        this.ages.sort().forEach((element,index,array) => {
            if(num[element]){ //add each number to object
                num[element]++; //increment key if object added already
            }else{
                num[element] = 1; 
            }
            
            if(count < num[element]){ // check if highest stored count is smaller than processed number
                mode = array[index]; // store number
                count = num[element]; // store count of number
            }

        });
        return`(${mode}, ${count})`
    }
    describe(){
        return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRange: ${this.range()}
Mean: ${this.mean()}\nMedian: ${this.median()}\nMode: ${this.mode()}`;
    }

}

let statistics = new Statistics(ages);
console.log(statistics.describe())

// only did up to Mode
// Skipped the rest since I don't know how to find variance, standard deviations and frequencey distribution

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// you output should look like this
// console.log(statistics.describe())
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