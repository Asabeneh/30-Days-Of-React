
//Q1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] ;
const sorted = ages.sort(( a,b)=> a-b);
let maxAge = sorted[sorted.length-1];
let minAge = sorted[0];

// Median age 

const mid = Math.floor(ages.length/2);

    if(mid%2===0){
      const  median = (ages[mid-1]+ages[mid])/2;
      return median;
    }
    else{
       const medianNun = arr[mid];
       return medianNun;
    }

// average age
let  sum = 0;

for(let i=0;i<ages.length;i++){
    sum+=ages[i];
}
const average = sum/(ages.length);


//Q1.1
countries.slice(0,10);

//Q2
const middleEl = Math.floor(countries.length/2)-1;
const medianEl = (countries[middleEl-1]+countries[middleEl])/2;

countries.splice(middleEl,2);








