import { countries } from './countries.js';


//1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
const agesOrder = ages.sort();
const minAge = agesOrder[0];
const maxAge = agesOrder[agesOrder.length - 1];

//Find the median age(one middle item or two middle items divided by two)
const medianAge = agesOrder[agesOrder.length * 0.5];

//Find the average age(all items divided by number of items)
const averageAge; //do i need 'for' loop?

//Find the range of the ages(max minus min)
const rangeOfAges = maxAge - minAge;

//Compare the value of (min - average) and (max - average), use abs() method


//2. Slice the first ten countries from the countries array
let sliceFirstTenCuuntries = countries.slice(0, 11);

//3. Find the middle country(ies) in the countries array
const middleCountries = countries[countries.length * 0.5];

//4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const firstCountries = countries.slice(0, countries.length * 0.5 + 1);
const secondCountries = countries.slice(countries.length * 0.5 - 1 , countries.length - 1)
