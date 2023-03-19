let arr = Array() //1
let arr1 = ["oorah", "Help me", "hooray", true, false, 'k', 20] //2
console.log(arr1.length) //3
console.log(arr1[0]) //4
console.log(arr1[Math.floor(arr1.length / 2)]) //4
console.log(arr1[arr1.length -1]) //4
let mixedDataTypes = ["yooo", 'p', true, 9, 9.8, null]
let itCompanies = ["facebook", "google", "microsoft", "apple", "ibm oracle", "amazon"] //6
console.log(itCompanies) //7
console.log(itCompanies.length) //8
console.log(itCompanies[0]) //9
console.log(itCompanies[Math.floor(itCompanies.length / 2)]) //9
console.log(itCompanies[itCompanies.length - 1]) //9
for(let x in itCompanies)
{
    console.log(itCompanies[x]) //10
}
for(let x in itCompanies)
{
    let new_str = itCompanies[x]
    new_str = new_str.toUpperCase()
    itCompanies[x] = new_str
    console.log(itCompanies[x]) // 11
    new_str = itCompanies[x]
    new_str = new_str.toLowerCase()
    itCompanies[x] = new_str
}
console.log(itCompanies[0] + ", " + itCompanies[1] + ", " + itCompanies[2] + ", " + itCompanies[3] + ", " + itCompanies[4] + ", and " + itCompanies[5] + " are big IT companies") //12
function check_company(company)
{
    for(let x in itCompanies)
    {
        if(itCompanies[x] == company)
        {
            return itCompanies[x]
        }   
    }
    return "company not found"
}
let starbucks = check_company("starbucks")
console.log(starbucks) //13
let amazon = check_company("amazon")
console.log(amazon) //13
function remove_o(arr)
{
    for(let x in arr)
    {  
        let count = 0
        let current_string = arr[x]
        for(let i in current_string)
        {
            if(current_string[i] = 'o')
            {
                count++
            }
            if(count == 2)
            {
                arr.splice(i - 1, 1)
            }
        }
    }
}
remove_o(itCompanies)
console.log(itCompanies) //14
itCompanies = ["facebook", "google", "microsoft", "apple", "ibm oracle", "amazon"]
console.log(itCompanies.sort()) //15
console.log(itCompanies.reverse()) //16
itCompanies = ["facebook", "google", "microsoft", "apple", "ibm oracle", "amazon"]
console.log(itCompanies.splice(3, 3)) //17
console.log(itCompanies.splice(0, 3)) //18
itCompanies = ["facebook", "google", "microsoft", "apple", "ibm oracle", "amazon"]
console.log("untested")
itCompanies.splice(2, 2)
console.log(itCompanies) //19
itCompanies = ["facebook", "google", "microsoft", "apple", "ibm oracle", "amazon"]
itCompanies.shift()
console.log(itCompanies) //20
itCompanies = ["facebook", "google", "microsoft", "apple", "ibm oracle", "amazon"]
itCompanies.pop()
console.log(itCompanies) //21
itCompanies.length = 0;
console.log(itCompanies) //22
