// 1. Declare an _empty_ array;
let arr = [];
// 2. Declare an array with more than 5 number of elements
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 3. Find the length of your array
console.log(arr2.length);
// 4. Get the first item, the middle item and the last item of the array
console.log(arr2[0]);
console.log(arr2[Math.floor(arr2.length / 2)]);
console.log(arr2[arr2.length - 1]);
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "string", true, null, undefined, {}, [], () => {}, new Date()];
console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// 7. Print the array using _console.log()_
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(""); 
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); 
console.log (itCompanies[itCompanies.length - 1]); 
console.log(""); 

// 10. Print out each company
itCompanies.forEach(element => console.log(element)); 
console.log(""); 



// 11. Change each company name to uppercase one by one and print them outitCompanies.forEach(element => console.log(element)); 
itCompanies.forEach(element => console.log(element.toUpperCase())); 
console.log(""); 


// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.slice(0, itCompanies.length - 1).join(", ") + ", and " + itCompanies[itCompanies.length - 1] + " are big IT companies."); 
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
let company = "Stripe"; 
let index = itCompanies.indexOf(company); 
if (itCompanies.includes(company)) {
    console.log(itCompanies[index]); 
} else {
    console.log(company + " not found"); 
}


// 14. Filter out companies which have more than one 'o' without using the filter method


// 15. Sort the array using _sort()_ method
console.log(itCompanies.sort());
console.log(""); 

// 16. Reverse the array using _reverse()_ method
console.log(itCompanies.reverse());
console.log(""); 

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
console.log(""); 

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3));
console.log(""); 

// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2),Math.floor(itCompanies.length / 2) + 2 )); 
console.log(""); 

console.log("removing companies"); 
// 20. Remove the first IT company from the array
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

itCompanies.splice(0,1); 
console.log(itCompanies); 
console.log(""); 
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// 21. Remove the middle IT company or companies from the array
console.log("remove middle companies")
itCompanies.splice(Math.floor(itCompanies.length / 2) - 1, 2);
console.log(itCompanies); 
console.log(""); 
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 22. Remove the last IT company from the array
itCompanies.splice(itCompanies.length-1); 
console.log(itCompanies);
console.log(""); 

// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length); 
console.log("remove all companies"); 
console.log(itCompanies); 


