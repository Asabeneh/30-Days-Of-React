const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ];

// 1
const array = [];

// 2
const array2 = Array.from({length: 6}, (v, i) => i + 1);

// 3
console.log(array2.length + '\n');

// 4
console.log("first item: " + array2[0] + " middle item: " + array2[Math.floor(array2.length / 2)] + " last item: " + array2[array2.length - 1] + "\n");

// 5
const mixedDataTypes = ["string", 1, true, null, undefined, {name: "John"}, [1, 2, 3]];

// 6
let itCompanies = ["facebook", "google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7
console.log(itCompanies);

// 8
console.log("\n" + itCompanies.length + "\n");

// 9
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1] + "\n");

// 10
for (let index = 0; index < itCompanies.length; index++) {
    console.log(itCompanies[index]);
}
console.log();

// 11
for (let index = 0; index < itCompanies.length; index++) {
    itCompanies[index] = itCompanies[index][0].toUpperCase() + itCompanies[index].slice(1);
    console.log(itCompanies[index]);
}
console.log();

// 12
console.log(itCompanies.join() + "\n");

// 13
function checkCompanyExists(company) {
    let companyList = itCompanies.map(comp => comp.toUpperCase());
    if (companyList.includes(company.toUpperCase())) {
        return company;
    } else {
        return company + " not found";
    }
}
console.log(checkCompanyExists("Facebook"));
console.log(checkCompanyExists("Amex"));
console.log();

// 14
itCompanies.map(company => {
    if (company.indexOf('o') == company.lastIndexOf('o')) return company;
}).forEach(item => {
    if (item != undefined)
        console.log(item);
})
console.log();

// 15
itCompanies = itCompanies.sort()
console.log(itCompanies);
console.log();

// 16
itCompanies = itCompanies.reverse();
console.log(itCompanies);
console.log();

// 17
console.log(itCompanies.slice(3));
console.log();

// 18
console.log(itCompanies.slice(0, itCompanies.length-3));
console.log();

// 19
console.log(itCompanies.slice(1, itCompanies.length-1));
console.log();

// 20
itCompanies.shift()
console.log(itCompanies);
console.log();

// 21
itCompanies.splice(1, itCompanies.length-2)
console.log(itCompanies);
console.log();

// 22
itCompanies.pop();
console.log(itCompanies);
console.log();

// 23
console.log(itCompanies.splice());
console.log();