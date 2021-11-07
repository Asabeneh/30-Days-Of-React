let arr = [];
console.log(arr);
let secondArr = [5, 4, 3, 2, 1];
secondArr.sort();
console.log(secondArr);

let check = 1;

function tryingHere() {
    const trying = "This is Ashish Bhoya";
    const MikeRoss = "This is legendary Mike Ross";
    if (check === 1)
        document.getElementById("Ok").innerHTML = trying, check = 0;
    else
        document.getElementById("Ok").innerHTML = MikeRoss, check = 1;
}

function table() {
    let num = document.getElementById("input").value;
    document.getElementById("tableHere").innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        document.getElementById("tableHere").innerHTML += `${num} * ${i} = ${num * i} <br>`;
    }
}

const MANGA = ["Meta", "Apple", "Netflix", "Google", "Amazon"];

function checkFAANG() {
    let input = document.getElementById("company").value;
    let check = false;
    for (let i = 0; i < MANGA.length; i++) {
        if (input.toUpperCase() === MANGA[i].toUpperCase()) {
            check = true;
            break;
        }
    }
    if (check) {
        document.getElementById("result").innerHTML = "Yes this is in FAANG";
    }
    else document.getElementById("result").innerHTML = "No this is not in FAANG";
}

function personalInfo() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let country = document.getElementById("country").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    document.getElementById("personalInfo").innerHTML = `First Name: ${firstName} <br> Last Name: ${lastName} <br> Age: ${age} <br> Address: ${address} <br> City: ${city} <br> State: ${state} <br> Zip: ${zip} <br> Country: ${country} <br> Phone: ${phone} <br> Email: ${email}`;
}
