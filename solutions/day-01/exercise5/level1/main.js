//1
console.log(
    function getPersonInfo({ firstName, lastName, country, age, job, skills, languages }) {
        return firstName +
            ' ' + lastName +
            ' lives in ' + country +
            '. He is ' + age +
            ' years old. He is an ' + job +
            '. He teaches ' + skills.slice(0, skills.length - 1).join(', ') +
            ' and ' + skills.at(-1) +
            '. He speaks ' + languages.slice(0, languages.length - 1).join(', ') +
            ' and a little bit of ' + languages.at(-1);
    }({
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
    })
    /*
    Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
    */
);
