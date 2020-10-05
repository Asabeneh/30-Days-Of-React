const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
const min = ages[0];
const max = ages[ages.length - 1];

let sum = 0;
for (i = 0; i < ages.length; i++) {
  sum += ages[i];
}
const average = sum / ages.length;
const median = ages[Math.trunc(ages.length / 2)];
const range = max - min;
