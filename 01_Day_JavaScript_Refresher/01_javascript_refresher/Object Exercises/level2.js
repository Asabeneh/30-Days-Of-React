const users = {
	Alex: {
		email: 'alex@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript'],
		age: 20,
		isLoggedIn: false,
		points: 30
	},
	Asab: {
		email: 'asab@asab.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
		age: 25,
		isLoggedIn: false,
		points: 50
	},
	Brook: {
		email: 'daniel@daniel.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
		age: 30,
		isLoggedIn: true,
		points: 50
	},
	Daniel: {
		email: 'daniel@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	John: {
		email: 'john@john.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
		age: 20,
		isLoggedIn: true,
		points: 50
	},
	Thomas: {
		email: 'thomas@thomas.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React'],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	Paul: {
		email: 'paul@paul.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
		age: 20,
		isLoggedIn: false,
		points: 40
	}
}

function mostSkills() {
    let obj = undefined;
    for (const person in users) {
		if (obj == undefined) {
			obj = users[person];
			continue;
		}
        if (users[person].skills.length > obj.skills.length) {
            obj = users[person];
        }
    }
    return obj;
}

function enoughPoints() {
	let count = 0;
	for (const person in users) {
		if (Object.hasOwnProperty.call(users, person)) {
			if (users[person].points >= 50) {
				count += 1;
			}	
		}
	}
	return count;
}

function findMERN() {
	const MERN = ["MongoDB", "Express", "React", "Node"];
	const people = {};
	for (const person in users) {
		if (Object.hasOwnProperty.call(users, person) && MERN.every(stack => users[person].skills.includes(stack))) {
			people[person] = users[person];
		}
	}
	return people;
}

function addUser(user) {
	let name = user.email;
	name = name.split("@")[0];
	name = name[0].toUpperCase() + name.slice(1);
	users[name] = user;
}

function getKeys() {
	const keys = [];
	for (const person in users) {
		if (Object.hasOwnProperty.call(users, person)) {
			keys.push(person);
		}
	}
	return keys;
}

function getValues() {
	const values = [];
	for (const person in users) {
		if (Object.hasOwnProperty.call(users, person)) {
			values.push(users[person]);
		}
	}
	return values;
}

// no countries object???