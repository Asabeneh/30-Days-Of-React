// Create a function called getPersonInfo. The getPersonInfo function takes an object parameter.
//  The structure of the object and the output of the function is given below. Try to use both a regular way and destructuring 
// and compare the cleanness of the code. If you want to compare your solution with my solution, check this link.

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

const getPersonInfo = (person) => {
    const {firstName, lastName, age, country, job, skills, languages} = person;
    const {skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9} = skills;
    console.log(`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skill1}, ${skill2}, ${skill3}, ${skill4}, ${skill5}, ${skill6}, ${skill7}, ${skill8}, ${skill9}. He speaks ${languages[0]}, ${languages[1]} and a little bit of ${languages[2]}`);
}

getPersonInfo(person)



// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const solveQuadEquation = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return { x1, x2 };
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return { x };
  } else {
    return "No real roots";
  }
};
solveQuadEquation(1, 5, 6); // {x1: -2, x2: -3}


// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
  arr.forEach((item) => {
    console.log(item);
  });
};

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    else if (hours > 12) {
        hours -=12
    }

    let datee = `${year}/${month}/${date}`
    let Time = `${hours}:${minutes}`
    return datee + "," + Time
}

console.log(showDateTime()) // 2019/10/12 12:46

// Declare a function name swapValues. This function swaps value of x to y.
const swap = (x,y) => {
  console.log(` before swap : x => ${x}, y => ${y}`)
  let x =x+y;
  let y = x-y;
      x = x-y;

  console.log(` after swap : x => ${x}, y => ${y}`)

}

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverse = (arr) => {
  let reversed  =[]
  for (let i =arr.length-1; i>=0; i--){
    reversed.push(arr[i])
  }
  return reversed
}

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalize = (arr) => {
  let capitalized = []
  arr.forEach((item) => {
    capitalized.push(item.toUpperCase())
  });
  return capitalized
}

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const add = (arr, item) => {
  arr.push(item)
  return arr
}

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
const remove = (arr, index) => {
  arr.splice(index, 1)
  return arr
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (num) => {
  let odds = 0;
  let evens = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log(`The number of odds are ${odds}.`);
  console.log(`The number of evens are ${evens}.`);
};


// Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...args) => {
  return args.reduce((acc, cur) => acc + cur);
};

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = () => {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";
  for (let i = 0; i < 7; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
};

// Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = (type, count) => {
  let colors = [];
  for (let i = 0; i < count; i++) {
    if (type === 'hexa') {
      colors.push('#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'));
    } else if (type === 'rgb') {
      colors.push(`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`);
    }
  }
  return colors;
};


// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (arr) =>{
  let shuffeled = []
  arr.forEach((item) => {
    let randomindex = Math.floor(Math.random()*arr.length)
    shuffeled.push(arr[randomindex])

  });
  return shuffeled
}

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (num) => {
  let result = 1
  for (let i =num; i>0; i--){
    result *=i
  }
  return result
}

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
const isEmpty = (param) => {
  if (param === undefined || param === null || param === "" || param === 0 || param === false) {
    return true;
  } else {
    return false;
  }
}

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
const avarage = (arr) => {
  const sum = arr.reduce((acc, cur)=>acc+cur)
  return sum/arr.length
}