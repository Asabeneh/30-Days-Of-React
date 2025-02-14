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
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/