//! Strings 

const name = "sajan"
const repoCount = 2

// console.log(name + repoCount + " value");
//console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String('sajan-kumar');
// mathod of strings  +++
/*console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('j')); */


//subString +++
const newString = gameName.substring(0, 4)
// console.log(newString);

// return a revers value in substring
const anotherString = gameName.slice(-11, 9)
// console.log(anotherString);

// trim and Replace +++
//trim methd
const newStringOne = "  sajankumar  "
// console.log(newStringOne);
// console.log(newStringOne .trim());


//replace method +++

const url = "https://sajan.com/sajan%20kumar"
// console.log(url.replace('%20','_'));
// console.log(url.includes('kumar'));

//split method +++

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
// console.log(words[3])

const skr = ('sajan-sk-com')
// console.log(skr.split('-'));
