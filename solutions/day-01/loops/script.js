// For OF Loop
// - handy for using with arrays.
// - use when NOT interest in the index of an array.
// - loops through the values of an iterable object
// ex:
const numbers = [1,2,3,4,5]; // declare an array of 5 numbers
for(const num of numbers){ // assign the values of the numbers array to the const variable 'num'
    console.log(num); // display every value one at a time 
}

//ex:
const cities = ['Taylor', 'Austin', 'Houston', 'Dallas', 'Lubbock'];
for(const city of cities){
    console.log(city);
}

// ForEach Loop
// - use WHEN interested in the index of an array.
// - takes a call back function (element, index, array)
// ex:
const values = [1,2,3,4,5];
values.forEach((element, index)=>{
    console.log("element:" + element, "index:" + index);
});


//For IN Loop
// - used for looping through object literals to get keys of objects
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}
// - key is the key name
// - user[key] is the value of the key 
for(const key in user){
    console.log("Key: " + key, ", Value: " + user[key]);
}

