class statistics {
    static setData(data) {
        this.data = data;
    }

    static count() {
        return this.data.length;
    }

    static sum() {
        return this.data.reduce((acc, cur) => acc + cur)
    }

    static min() {
        let min = this.data[0];
        this.data.forEach(item => {
            if (min > item) {
                min = item;
            }
        });
        return min;
    }

    static max() {
        let max = this.data[0];
        this.data.forEach(item => {
            if (max < item) {
                max = item;
            }
        });
        return max;
    }

    static range() {
        return this.max() - this.min();
    }

    static mean() {
        return this.sum() / this.count();
    }

    static median() {
        const sorted = this.data.sort();
        if (this.count() % 2 == 0) {
            return (sorted[this.count()/2] + sorted[(this.count()/2)-1]) / 2; // -1 due to 0 indexing
        } else {
            return sorted[Math.floor(this.count()/2)];
        }
    }

    static mode() {
        let values = {};
        let max = this.data[0];
        this.data.forEach(d => {
            if (values[d] == undefined) {
                values[d] = 0;
            }
            values[d] += 1;
            if (values[d] > values[max]) {
                max = d;
            }
        });
        return max;
    }

    // decided to stop here as seems very repetetive as refresher task
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
statistics.setData(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 29.76
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31)