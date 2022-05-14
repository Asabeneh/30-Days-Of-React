console.log("%c LEVEL 1", "color:red;font-size:50px;")

// 1
const empty = []
// 2
const filled = ["1", "2", "3", "4", "5", "6"]
// 3
console.log(filled.length)
// 4
console.log(filled[0], filled[filled.length / 2 - 1], filled[filled.length - 1])
// 5
const mixedDataTypes = ["Number", "String", "Boolean", "Array", "Set", "Object"]
console.log(mixedDataTypes.length)
// 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// 7
console.log(itCompanies)
// 8
console.log(itCompanies.length)
// 9
let length = itCompanies.length;
console.log(itCompanies[0], itCompanies[length % 2 == 0 ? length / 2 - 1 : Math.floor(length / 2)], itCompanies[length - 1])
// 10
for (company of itCompanies) {
    console.log(company)
}
// 11
for (company of itCompanies) {
    console.log(company.toUpperCase())
}
// 12
let string = ""
for (i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i]
    if (i < itCompanies.length - 2)
        string += `${company}, `
    else if (i == itCompanies.length - 2) 
        string += company
    else
        string += ` and ${company} `
}
string += "are big IT companies."
console.log(string)
// 13
let comp = "IBM"
if (itCompanies.includes(comp))
    console.log(comp)
else
    console.log(comp, "not found")
// 14
const itCompaniesWithoutSeveralOs = []
for (company of itCompanies) {
    lowerComp = company.toLowerCase()
    firstO = lowerComp.indexOf("o")
    otherO = lowerComp.lastIndexOf("o")
    if (firstO == otherO)
        itCompaniesWithoutSeveralOs.push(company)
}
console.log(itCompaniesWithoutSeveralOs)
// 15
itCompanies.sort()
console.log(itCompanies)
// 16
itCompanies.reverse()
console.log(itCompanies)
// 17
console.log(itCompanies.slice(0, 3))
// 18
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
// 19
if (itCompanies.length % 2 == 0)
    console.log(itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1))
else
    console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2)))
// 20
itCompanies.splice(0, 1)
console.log(itCompanies)
// 21
if (itCompanies.length % 2 == 0) {
    itCompanies.splice(itCompanies.length / 2 - 1, 2)
    console.log(itCompanies)
}
else { 
    itCompanies.splice(Math.floor(itCompanies.length / 2), 1)
    console.log(itCompanies)
}
// 22
itCompanies.splice(itCompanies.length - 1, 1)
console.log(itCompanies)
// 23
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)
