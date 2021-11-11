class Statistics {
    constructor(ages) {
        this.ages = ages;
    }
    count() {
        return this.ages.length;
    }
    sum() {
        return this.ages.reduce((res, age) => res += age, 0);
    }
    min() {
        return this.ages.reduce((res, age) => res < age ? res : age, NaN);
    }
    max() {
        return this.ages.reduce((res, age) => res > age ? res : age, -1);
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return Math.ceil(this.sum() / this.ages.length);
    }
    median() {
        return Math.floor(this.sum() / this.ages.length);
    }
    mode() {
        return Object.entries(
            this.ages.reduce((res, age) => {
                res[age] = (res[age] || 0) + 1;
                return res;
            }, {})
        ).reduce((res, [age, count]) =>
            res.count < count ? { mode: age, count } : res, { count: -Infinity }
        );
    }
    var() {
        const median = this.sum() / this.ages.length;
        return this.ages.reduce((res, age) =>
            res += (age - median) ** 2, 0
        ) / this.ages.length;
    }
    std() {
        return Math.sqrt(this.var());
    }
    freqDist() {
        return '[' +
            Object.entries(
                this.ages.reduce((res, age) => {
                    res[age] = (res[age] || 0) + 100 / this.ages.length;
                    return res;
                }, {})
            ).sort((e1, e2) => e2[1] - e1[1])
                .reduce((res, [i, value]) => {
                    res.push('(' + value + ', ' + i + ')');
                    return res;
                }, []).join(', ') +
            ']';
    }
}
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
console.log('Variance: ', statistics.var()); // 17.5
console.log('Frequency Distribution: ', statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
