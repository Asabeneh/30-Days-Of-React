class Statistics {
    private _ages: number[];
    constructor(ages: number[]) {
        this._ages = ages;
    }

    public count() : number{
        return this._ages.length;
    }

    public sum() : number {
        var sum = 0;
        for (var i = 0; i < this._ages.length; i++) {
            sum += this._ages[i];
        }
        return sum;
    }

    public min() : number {
        var min = this._ages[0];
        for (var i = 1; i < this._ages.length; i++) {
            if (min > this._ages[i]){
                min = this._ages[i];
            }
        }
        return min;
    }

    public max() : number {
        var max = this._ages[0];
        for (var i = 1; i < this._ages.length; i++) {
            if (max < this._ages[i]){
                max = this._ages[i];
            }
        }
        return max;
    }

    public range(): number {
        const max = this.max();
        const min = this.min();
        return max - min;
    }

    public mean(): number {
        return Math.round(this.sum()/this.count());
    }

    public median(): number {
        var sortedArray = this._ages.sort();
        // console.log(sortedArray);
        const count = this._ages.length;
        if (count % 2 == 0) {
            //paaris
            return (Math.floor(sortedArray[count/2]) + Math.round(sortedArray[count/2])) / 2;
        } else {
            //paaritu
            return sortedArray[Math.round(count/2) - 1];
        }
    }

    public mode() {
        var sortedArray = this._ages.sort();
        var hetkeArv = sortedArray[0];
        var parimArv = sortedArray[0];
        var parimStreak = 1;
        var hetkeStreak = 1;
        for (var i = 1; i < this._ages.length; i++) {
            if (sortedArray[i] == hetkeArv) {
                // parimStreak += 1;
                hetkeStreak += 1;
                // console.log(hetkeStreak)
                if (hetkeStreak > parimStreak) {
                    parimArv = hetkeArv;
                    parimStreak = hetkeStreak;
                }
            } else {
                hetkeStreak = 1;
            }
            hetkeArv = sortedArray[i];
        }
        return {'mode': parimArv, 'count': parimStreak};
    }

    public arvuKauguseRuutMeanistSumma(): number {
        const mean = this.mean();
        const count = this.count();
        var igaArvuKauguseRuutMeanist = [];
        for (var i = 0; i < count; i++) {
            const arv = Math.abs(mean - this._ages[i]);
            igaArvuKauguseRuutMeanist.push(Math.pow(arv, 2));
        }
        // console.log(igaArvuKauguseRuutMeanist)
        var sum: number = 0.0;
        for (var i = 0; i < count; i++) {
            sum += igaArvuKauguseRuutMeanist[i];
        }

        return sum;
    }

    public std(): number {
        // const mean = this.mean();
        const count = this.count();
        // var igaArvuKauguseRuutMeanist = [];
        // for (var i = 0; i < count; i++) {
        //     const arv = Math.abs(mean - this._ages[i]);
        //     igaArvuKauguseRuutMeanist.push(Math.pow(arv, 2));
        // }
        // console.log(igaArvuKauguseRuutMeanist)
        // var sum: number = 0.0;
        // for (var i = 0; i < count; i++) {
        //     sum += igaArvuKauguseRuutMeanist[i];
        // }

        return Math.sqrt(this.var());
    }

    public var(): number {
        const count = this.count();
        return this.arvuKauguseRuutMeanistSumma()/count;
    }

    public freqDist() {
        const sortedArray = this._ages.sort();
        const count = sortedArray.length;
        var arvudJaEsinemine = [];
        var hetkeArv = sortedArray[0];
        var hetkeStreak = 1;

        for (var i = 1; i < count; i++) {
            if (sortedArray[i] == hetkeArv) {
                hetkeStreak += 1;
            } else {
                arvudJaEsinemine.push([hetkeStreak, hetkeArv]);
                hetkeStreak = 1;
                hetkeArv = sortedArray[i];
            }
        }

        var newSortedArray = arvudJaEsinemine.sort(function(a, b) {
            return b[0] - a[0];
          });

        return newSortedArray;
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]