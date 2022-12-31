// console.log for script in index.html
console.log('External: Welcome to 30DaysOfJavaScript');

// concate 2 arrays
const firstList = [1,2,3];
const secondList = [4,5,6];
const thirdList = firstList.concat(secondList);
console.log(`Concatination of [1,2,3] and [4,5,6] is ${thirdList}`);

// check if Item exists in array using indexOf
const number = ['banana', 'orange', 'mango', 'lemon'];
let index = number.indexOf('lemon');
console.log(`${number[index].charAt(0).toUpperCase() + number[index].slice(1)} is at index: ${index}`);

// Exercise 1
let arr = []; // Declare an array with more than 5 number of elements
let arr6 = [1,2,3,4,5,6]; // Declare an array with more than 5 number of elements
console.log(arr6.length); // Find the length of your array
console.log(`First item is: ${arr6.shift()}`); // Get the first item, the middle item and the last item of the array
arr6.unshift(1); // add value back to array in same spot
console.log(`Middle item is: ${arr6[arr6.length/2]}`);
console.log(`Last item is: ${arr6.pop()}`);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['Hello', 12, true, [1,2,3], {key: 'value'}, null];
console.log('Length of mixeDataTypes array is: ' + mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'iBM', 'oracle', 'amazon'];
console.log(itCompanies); // Print the array using console.log()
console.log(`itCompanies array consists of: ${itCompanies}`); // Print the number of companies in the array
console.log(`Number of companies in itCompanies is: ${itCompanies.length}`);
console.log(`First company is: ${itCompanies[0]}`); // Print the first company, middle and last company
console.log(`Middle company is: ${itCompanies[Math.floor(itCompanies.length / 2)]}`);
console.log(`Last company is: ${itCompanies[itCompanies.length - 1]}`); 
console.log(`All the names of the companies:`, ...itCompanies); // Print out each company
// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].charAt(0).toUpperCase() + itCompanies[0].slice(1), 
            itCompanies[1].charAt(0).toUpperCase() + itCompanies[1].slice(1),
            itCompanies[2].charAt(0).toUpperCase() + itCompanies[2].slice(1),
            itCompanies[3].charAt(0).toUpperCase() + itCompanies[3].slice(1),
            itCompanies[4].charAt(0).toUpperCase() + itCompanies[4].slice(1),
            itCompanies[5].charAt(0).toUpperCase() + itCompanies[5].slice(1),
            itCompanies[6].charAt(0).toUpperCase() + itCompanies[6].slice(1));
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.includes('oracle') ? itCompanies[itCompanies.indexOf('oracle')]: 'company is not found'); 
let newArr = []; // Filter out companies which have more than one 'o' without the filter method
for(let i = 0; i < itCompanies.length; i++){
    if(itCompanies[i].indexOf('o') !== itCompanies[i].lastIndexOf('o')){
        newArr.push(itCompanies[i])
    }
}
console.log(newArr);
let copyItCompanies = [...itCompanies]; // make copy to sort and reverse
console.log(copyItCompanies.sort()); // Sort the array using sort() method
console.log(copyItCompanies.reverse()); // Reverse the array using reverse() method
console.log(itCompanies.slice(0,3)) //Slice out the first 3 companies from the array
console.log(itCompanies.slice(4,7)) //Slice out the last 3 companies from the array
console.log(itCompanies.slice(3,4));//Slice out the middle company from the array
let copyArr = [...itCompanies]; 
console.log(copyArr)
copyArr.shift() // Remove the first IT company from the array
console.log(copyArr)
copyArr.splice(copyArr.length/2, 1) // Remove the middle IT company or companies from the array
console.log(copyArr) 
copyArr.pop()// Remove the last IT company from the array
console.log(copyArr) 
copyArr = []; // Remove all IT companies
console.log(copyArr)

