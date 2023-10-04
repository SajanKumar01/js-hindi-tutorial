// !    datatypes-summary

// 01. Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt



// 02. Reference / Non primitive

// Array, Objects, Functions

// JavaScript  => javascript is a dynamically typed language...

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//? array
// const heros = ["shaktiman", "naagraj", "doga"];

// ? Object
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }


// ?function
// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++  MEMORIES  ++++++++++++++++++++++++++

// 01. Stack memory, and  02.Heap memory

// Stack memory use in (Primitive data types)    ....   Heap memory use in (Non Primitive )

let myYoutubeName = "sajankumar.com"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"
// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(userOne); 

let userTwo = userOne
userTwo.email = "usertwo@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

