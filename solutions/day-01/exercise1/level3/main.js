const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//1
ages.sort();
console.log('Max:', ages.at(-1));
console.log('Min:', ages[0]);
console.log(
    'Median age:',
    (ages[Math.floor(ages.length / 2)] + ages[Math.ceil(ages.length / 2)]) / 2
);
const average = ages.reduce((res, e) => res += e, 0) / ages.length;
console.log(
    'Average age:',
    average
);
console.log(
    'Range of the ages:',
    ages.at(-1) - ages[0]
);
const compare = Math.abs(ages[0] - average) - Math.abs(ages.at(-1) - average);
console.log(
    'Compare the value of (min - average) and (max - average):\n',
    compare > 0 ? '(min - average) > (max - average)'
        : compare == 0 ? '(min - average) = (max - average)'
            : '(min - average) < (max - average)'
);
//1.1
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/Asabeneh/30-Days-Of-JavaScript/data/countries.js';
document.head.appendChild(script);
script.onload = () => {
    console.log(countries.slice(0, 10))
    //2
    countries.length & 1 == 0 ?
        console.log(
            'Middle countries: ',
            countries[countries.length / 2 - 1],
            countries[countries.length / 2]
        ) : console.log('Middle country: ', countries[Math.floor(countries.length / 2)]);
    //3
    let left;
    let right;
    countries.length & 1 == 0 ?
        [
            left = countries.slice(0, countries.length / 2),
            right = countries.slice(countries.length / 2),
        ] :
        [
            left = countries.slice(0, Math.ceil(countries.length / 2)),
            right = countries.slice(Math.ceil(countries.length / 2)),
        ]
    console.log('Left: ', left, 'Right: ', right);
}
