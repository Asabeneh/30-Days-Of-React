let arr = [];
console.log(arr);
let secondArr = [5,4,3,2,1];
secondArr.sort();
console.log(secondArr);

let check = 1;

function tryingHere(){
    const trying = "This is Ashish Bhoya";
    const MikeRoss = "This is legendary Mike Ross";
    if(check ===1)
    document.getElementById("Ok").innerHTML = trying , check  = 0;
    else
    document.getElementById("Ok").innerHTML = MikeRoss, check = 1;
}

function table(){
    let num = document.getElementById("input").value;
    document.getElementById("tableHere").innerHTML = "";        
    for(let i = 1; i<=10; i++){
        document.getElementById("tableHere").innerHTML += `${num} * ${i} = ${num*i} <br>`;
    }
}

const  MANGA = ["Meta", "Apple", "Netflix", "Google", "Amazon"];

function checkFAANG(){
    let input = document.getElementById("company").value;
    let check = false;
    for(let i = 0; i < MANGA.length; i++){
        if(input.toUpperCase() === MANGA[i].toUpperCase()){
            console.log(input.toUpperCase());
            console.log(MANGA[i].toUpperCase());
            check = true;
            break;
        }
    }
    if(check){
        document.getElementById("result").innerHTML = "Yes this is in FAANG";
    }
    else document.getElementById("result").innerHTML = "No this is not in FAANG";
}
