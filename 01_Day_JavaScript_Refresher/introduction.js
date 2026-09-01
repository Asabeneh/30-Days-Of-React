const popUp = document.getElementById('popUp')

popUp.addEventListener('click', function() {
    alert('Hello World')
})


// Arrays
const names = Array('Gideon', 'Courage', 'Femi', 'Jude', 250, true, false, 'HTML', 'CSS', 'Python');
names[1] = 'Wife'
names[0] = 'Husband'
let firtsName = names[0];
const strings = " 'Gideon', 'Courage', 'Mufasa' "
const splitstrings = strings.split('')

console.log(names);
console.log(firtsName);
console.log(names.length);
console.log(splitstrings);

//
