/*Create a function called getPersonInfo. The getPersonInfo function 
takes an object parameter. The structure of the object and the output 
of the function is given below. Try to use both a regular way and destructuring 
and compare the cleanness of the code. If you want to compare your solution 
with my solution, check this link.*/

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. 
He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks 
Amharic, English and a little bit of Suomi(Finnish)
*/

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

let getPersonInfo = ({firstName, lastName,age,country,job,skills,languages}) =>{
console.log(`${firstName} ${lastName} live in ${country}. He is ${age} years old. He is an ${job}. 
He teaches ${skills[0]}, ${skills[1]}, ${skills[2]}, ${skills[3]}, ${skills[4]}, ${skills[5]}, ${skills[6]}, ${skills[7]}, and ${skills[8]}.
He speaks ${languages[0]}, ${languages[1]} and a little bit of ${languages[2]}.`);
}
getPersonInfo(person);