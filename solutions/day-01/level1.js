// Exercise level-1 solutions

//  Q.1
const arr = [];

// Q.2
const myArr = [1,2,3,4,5,6,7,8,9]

//Q 3
console.log(myArr.length); // 9

//Q 4
 (myArr[0]);// 1
const mid = Math.floor(myArr.length/2);//
(myArr[mid]);
(myArr[myArr.length -1]);//9

//Q5
const mixedDataTypes = [1,"firo",true,2.5,"welcome",false,10];
console.log(mixedDataTypes.length);//7

//Q6
const companies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

//Q7
console.log(companies);

//Q8
console.log(companies.length);

//Q9
console.log(companies[0]);
const midd = Math.floor(companies.length / 2);
console.log(companies[midd]);
console.log(companies[companies.length-1]);

//Q10
console.log(companies[0]);
console.log(companies[1]);
console.log(companies[2]);
console.log(companies[3]);
console.log(companies[4]);
console.log(companies[5]);
console.log(companies[6]);
console.log(companies[7]);

//Q11
console.log(companies[0].toUpperCase());
console.log(companies[1].toUpperCase());
console.log(companies[2].toUpperCase());
console.log(companies[3].toUpperCase());
console.log(companies[4].toUpperCase());
console.log(companies[5].toUpperCase());
console.log(companies[6].toUpperCase());
console.log(companies[7].toUpperCase());

//Q12
console.log(companies.join(',')+ " are big companies");

//Q13
if(companies.includes("Twitter")){
    return "Twitter";
}
else{
   return "company not found";
}

//Q14

const filteredCompanies = [];
for(let i=0;i<companies.length;i++){
    const company = companies[i];
    let count=0;
    for(let j=0;j<company.length;j++){
        if(company[j].toLowerCase()==='o'){
            count+=1;
        }
    }
    if(count>1){
        filteredCompanies.push(company);
    }
}
console.log(filteredCompanies);

//Q15
companies.sort((a,b)=> a -b);

//Q16
companies.reverse();

//Q17
companies.slice(0,3);

//Q18
companies.slice(-3);

//Q19
const middle = Math.floor(companies.length / 2);
let slicedArray ;
if(companies.length %2 === 0){
    slicedArray = companies.slice(middle -1,middle+1)
}
else{
    slicedArray = companies[middle];
}
console.log(slicedArray);

//Q20

companies.shift();

//Q21
const middleIndex = Math.floor(companies.length/2);

const removedElement = companies.splice(middleIndex,1);

//Q22

companies.pop();

//Q23 
companies.splice(0,companies.length);



