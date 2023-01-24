//////////////////////////////////////////////////////////

// Lesson 32, activating strict mode

/*
'use strict';

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive.');

const interface = 'Audio';
*/

// Lesson 33, functions

/*
'use strict';

function logger() {
    console.log('My name is Nick');
}

// calling / running / invoking the function
logger();
logger();
logger();


// Think of functions like little machines
function soupMaker(pumpkins, carrots) {
    const soup = `Soup with ${pumpkins} pumpkin and ${carrots} carrots.`;
    return soup;
}

const pumpkinSoup = soupMaker(5, 0);
console.log(pumpkinSoup);

const pumpkinCarrotSoup = soupMaker(2, 4);
console.log(pumpkinCarrotSoup);
*/

//////////////////////////////////////////////////////////

// Lesson 34, function declarations vs expressions

//Function declaration

/*

function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1992);
console.log(age1);

//Function Expression

const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}

const age2 = calcAge2(1992);
console.log(age1, age2);

*/

//////////////////////////////////////////////////////////

// Lesson 35 - Arrow function

/*
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // Return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1992, 'Nick'));
console.log(yearsUntilRetirement(1980, 'Bob'));

*/

//////////////////////////////////////////////////////////

// Lesson 36 - Functions calling other functions
/*

const cutVegePieces = function (vege) {
    return vege * 4;
};

const soupMaker = function (pumpkins, carrots) {

    const pumpkinPieces = cutVegePieces(pumpkins);
    const carrotPieces = cutVegePieces(carrots);

    const soup = `Soup with ${pumpkinPieces} pieces of pumpkin and ${carrotPieces} pieces of carrots.`;
    return soup;
}

console.log(soupMaker(2, 3));

*/
//////////////////////////////////////////////////////////

// Lesson 37 - Reviewing functions
/*
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {

        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {

        console.log(`${firstName} has already retired!`);
        return -1;
    }

    // Return retirement
    //
}

console.log(yearsUntilRetirement(1950, 'Nick'));
*/

//////////////////////////////////////////////////////////

// Lesson 38 - Coding challenge #1

/*
'use strict';

const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average;
}

let dolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);
const koalas = 'Koalas';
const dolphins = 'Dolphins';



const firstScore = (dolphinsScore, koalasScore) => {
    let higherScore = ''
    let lowerScore = ''
    if (dolphinsScore > koalasScore) {
        higherScore = dolphinsScore
        lowerScore = koalasScore
    } else {
        higherScore = koalasScore;
        lowerScore = dolphinsScore;
    }
    return { higherScore, lowerScore };
}

const { higherScore, lowerScore } = firstScore(dolphinsScore, koalasScore);

const checkWinner = (dolphinsScore, koalasScore) => {
    let winner = ''
    if (dolphinsScore >= (koalasScore * 2)) {
        winner = dolphins
    } else if (koalasScore >= (dolphinsScore * 2)) {
        winner = koalas
    } else {
        winner = 'No team'
    }
    return winner;
}

const winner = checkWinner(dolphinsScore, koalasScore);



// = function winningTeam(Koalas, Dolphins) {
//     switch (winner) {
//         case 'Koalas':
//             break;
//         case 'Dolphins':
//             break;

//     }


// const dolphinsWin = (dolphinsScore > koalasScore)
// const kaoalasWin = (dolphinsScore < koalasScore)
// if (koalasWin) {
//     console.log(`Koalas win ${koalasScore} vs ${dolphinsScore}`)
// }

// dolphinsScore = calcAverage(85, 54, 41);
// koalasScore = calcAverage(23, 34, 27);



console.log(`${winner} won ${higherScore} vs ${lowerScore}`)

console.log(dolphinsScore, koalasScore);
*/

//////////////////////////////////////////////////////////

/*

// Lesson 39 - Introduction to Arrays

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends.length); // Retrieves the length of the array
console.log(friends[2]);  // Retrieves the value at position 2 of the array

const firstName = 'Nick';
const nick = [firstName, 'Raubs', 2023 - 1992, 'webDev', friends];

console.log(nick);

// Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const years = [1990, 1967, 2022, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3, age4);

// Functions can be placed into arrays as they provide values

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages);

*/

//////////////////////////////////////////////////////////

/*
// Lesson 40 - Basic Array Operations

const friends = ['Michael', 'Steven', 'Peter'];

// Ad elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // Will return -1 if item is not in the array

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend named Steven')
}

*/

//////////////////////////////////////////////////////////

// Lesson 41 - Coding challenge #2

/*
const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        bill = bill * 0.15;
    } else {
        bill = bill * 0.20;
    }
    return bill;
}

// Instead of using if/else statements a ternary operator can be used

// const calcTip = (bill) {
//     return bill >= 50 && bill <= 300 ? 0.15 : bill * 0.2
// }

console.log(`${calcTip(125)}`);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log('Tips: ', tips[0], tips[1], tips[2]);
console.log(`Total: $${total[0]}, $${total[1]}, $${total[2]}`)
*/

//////////////////////////////////////////////////////////

// Lesson 42 - Introduction to objects

/*

const nickArray = [
    'Nick',
    'Raubs',
    2023 - 1992,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];


// Below is an object, objects are used to group variables together

const nick = {
    firstName: 'Nick',
    lastName: 'Raubs',
    age: 2023 - 1992,
    job: 'Web devs',
    friends: ['Michael', 'Peter', 'Steven']

};
*/

//////////////////////////////////////////////////////////

/*
// Lesson 43 - Dots vs Bracket notation

const nick = {
    firstName: 'Nick',
    lastName: 'Raubs',
    age: 2023 - 1992,
    job: 'Web dev',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(nick);

console.log(nick.lastName);
console.log(nick['lastName']);

const nameKey = 'Name';
console.log(nick['first' + nameKey]);
console.log(nick['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Nick? Choose between firstName, lastName, age, job and friends');

if (nick[interestedIn]) {
    console.log(nick[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

nick.location = 'Staya';
nick['twitter'] = '@nickrohan';
console.log(nick);

console.log(`${nick.firstName} has ${nick.friends.length} and his best
friend is named ${nick.friends[0]}`)

*/
//////////////////////////////////////////////////////////

/*
// Lesson 44 - Object Methods

const nick = {
    firstName: 'Nick',
    lastName: 'Raubs',
    birthYear: 1992,
    job: 'Web dev',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }
    // Function expressions can be used within an object
    // Function declarations cannot
    // calcAge: function () {
    //     console.log(this);
    //     return 2023 - this.birthYear;

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;

    },
    // checkLicense: function () {
    //     this.license = '';
    //     if (this.hasDriversLicense) {
    //         this.license = 'a';
    //     } else {
    //         this.license = 'no'
    //     }
    //     return this.license;

    // }

    getSummary: function () {
        return ` ${this.firstName} is a ${this.calcAge()} old ${nick.job}
        and he has ${this.hasDriversLicense ? 'a' : 'no'
            } Drivers License`
    }


};

// The <this> method allows us to call a parameter of an object
// without hardcoding the name

console.log(nick.calcAge())
// console.log(nick.checkLicense())
console.log(nick.age);

console.log(nick.getSummary());

// Challenge

//console.log(`${ nick.firstName } is a ${ nick.age } old ${ nick.job }
//and he has ${ nick.license } Drivers License`);
*/

//////////////////////////////////////////////////////////

// Lesson 45 - Coding challenge #3

/*
const mark = {

    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
}

//console.log(`Mark's BMI: ${mark.calcBMI()}`)

const john = {

    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
}

//console.log(`Johns BMI: ${john.calcBMI()}`)

// const getSummary =
// {
//     higher: function () {
//         let higherBMI = (john.calcBMI() > mark.calcBMI()) ? `John's BMI (${john.calcBMI()})` : `Mark's BMI (${mark.calcBMI()})`;
//         return higherBMI;
//     },
//     lower: function () {
//         let lowerBMI = (john.calcBMI() < mark.calcBMI()) ? `John's BMI (${john.calcBMI()})` : `Mark's BMI (${mark.calcBMI()})`;
//         return lowerBMI;
//     },

// }

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi} is
        higher than ${john.fullName}'s BMI (${john.bmi}))`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi} is
        higher than ${mark.fullName}'s BMI (${mark.bmi}))`)
}


// console.log(`${getSummary.higherBMI()} ${mark.calcBMI()} ${john.calcBMI()}`)

//console.log(`${getSummary.higher()} is higher than ${getSummary.lower()}`)

//console.log(`${john.firstName}'s BMI(${john.calcBMI})
//is higher than ${mark.firstName}`)

*/

//////////////////////////////////////////////////////////

// Lesson 46 - Iteration: The for Loop
/*
// For loops let you increment values

// This for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}
*/

//////////////////////////////////////////////////////////

// Lesson 47 - Looping Arrays, Breaking and Continuing
/*
const nick = [
    'Nick',
    'Raubs',
    2023 - 1992,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < nick.length; i++) {
    //Reading from nick array
    console.log(nick[i], typeof nick[i]);

    // Filling types array
    // types[i] = typeof nick[i];

    types.push(typeof nick[i]);

}

console.log(types);

const years = [1992, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);


// continue and break
console.log('-----ONLY STRINGS-----')
for (let i = 0; i < nick.length; i++) {

    if (typeof nick[i] !== 'string') continue;

    console.log(nick[i], typeof nick[i]);
}

console.log('-----BREAK WITH NUMBER-----')
for (let i = 0; i < nick.length; i++) {

    if (typeof nick[i] === 'number') break;

    console.log(nick[i], typeof nick[i]);
}
*/
//////////////////////////////////////////////////////////

// Lesson 48 - Looping Backwards and Loops  in Loops
/*
const nick = [
    'Nick',
    'Raubs',
    2023 - 1992,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = nick.length - 1; i >= 0; i--) {
    console.log(i, nick[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
*/
//////////////////////////////////////////////////////////

// Lesson 49 - The While Loop
/*
for (let rep = 1; rep <= 10; rep++) {
    //console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`)
}


let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifting weight repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end....');
}
*/

//////////////////////////////////////////////////////////

// Lesson 50 - Coding challenge #4

const calcTip = (bills) => {
    if (bills >= 50 && bills <= 300) {
        bills = bills * 0.15;
    } else {
        bills = bills * 0.20;
    }
    return bills;
}

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];

const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(tip + bills[i])


}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i]
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tips))
console.log(calcAverage(totals))
console.log(`Bills: ${bills}

Tips: ${tips} 

Totals: ${totals}`)



// for (let i = 0; i < tips.length; i++) {
//     //Reading from nick array
//     console.log(tips[i], typeof tips[i]);

// }

// for (let i = 0; i < totals.length; i++) {
//     //Reading from nick array
//     console.log(totals[i], typeof totals[i]);

// }






// for (let i = 0; i < nick.length; i++) {
//     //Reading from nick array
//     console.log(nick[i], typeof nick[i]);

//     // Filling types array
//     // types[i] = typeof nick[i];

//     types.push(typeof nick[i]);

// }