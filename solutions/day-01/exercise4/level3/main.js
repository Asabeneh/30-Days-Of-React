function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function randomRanges(...ranges) {
    const range = ranges[random(0, ranges.length - 1)];
    return random(range.min, range.max);
}
//1
function userIdGeneratedByUser() {
    const idLength = +prompt('Id length: ');
    const numberOfIds = +prompt('Number of Ids: ');
    const userIdGenerator = () => String.fromCharCode(
        ...Array.from({ length: idLength }, () => randomRanges(
            {
                min: '0'.charCodeAt(0),
                max: '9'.charCodeAt(0)
            },
            {
                min: 'a'.charCodeAt(0),
                max: 'z'.charCodeAt(0)
            },
            {
                min: 'A'.charCodeAt(0),
                max: 'Z'.charCodeAt(0)
            },
        ))
    );
    return Array.from({ length: numberOfIds }, userIdGenerator).join('\n');
}
alert(userIdGeneratedByUser());
//2
function generateColors(type, numberOfColors) {
    switch (type) {
        case 'hexa': {
            const colorCodeGenerator = () => '#' + String.fromCharCode(
                ...Array.from({ length: 6 }, () => randomRanges(
                    {
                        min: 'a'.charCodeAt(0),
                        max: 'f'.charCodeAt(0)
                    },
                    {
                        min: '0'.charCodeAt(0),
                        max: '9'.charCodeAt(0)
                    },
                ))
            );
            return Array.from({ length: numberOfColors }, colorCodeGenerator);
        }
        case 'rgb': {
            return Array.from(
                { length: numberOfColors },
                () => `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
            )
        }
        default: return null;
    }
}
console.log(generateColors('hexa', 3));
console.log(generateColors('hexa', 1));
console.log(generateColors('rgb', 3));
console.log(generateColors('rgb', 1));
//3
function shuffleArray(arr) {
    function swap(x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }
    for (const i of arr) swap(random(0, arr.length - 1), random(0, arr.length - 1));
    return arr;
}
console.log(
    'Shuffle array: [0, 5, 2, 6, 8, 1, 3, 8, 9]',
    shuffleArray([0, 5, 2, 6, 8, 1, 3, 8, 9])
);
//4
function factorial(n) {
    return n == 0 ? 1 : factorial(n - 1) * n;
}
console.log(
    'Factorial: ',
    factorial(5)
);
//5
function isEmpty(n) {
    return new Boolean(0 == n.length).valueOf() ||
        new Boolean(0 == Object.keys(n).length).valueOf() ||
        new Boolean(0 == n.trim().length);
}
console.log(
    'isEmpty: ',
    isEmpty({})
);
//6
function average(arr) {
    let check = true;
    let msg = '';
    const result = arr.reduce((res, e, i) => {
        if (check) {
            if (typeof e == 'number') res += e;
            else {
                check = false;
                msg = 'Found a non-numberic element. Index: ' + i;
            }
        }
        return res;
    }, 0);
    return check ? result / arr.length : msg;
}
console.log(
    'Average: ',
    average([2, 2, 6, 6, 7, 3, 8, 0, {}])
);
