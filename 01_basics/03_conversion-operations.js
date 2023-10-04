//! conversion and operations

// ?  +++++++++++++ conversion  ++++++++++

let score = "33abc";
// let score = null
// let score = undefined
// let score = true
// let score = "sajan"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/**
 * "33" => 33
 * "33abc"=>  NaN (not a number)
 *  true => 1 , / false => 0
 */

//  true => 1 , / false => 0 let's try it

let isLoggedIn = "";
let BooleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(BooleanIsLoggedIn);

/**
 * 1 => true;  0 => false
 * "" => false
 * "sajan" => true
 */

let someNumber = 55;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

//?  ++++++++++++++++++++ Operations  ++++++++++++++++++++++

let value = 5;
let negValue = -value;
// console.log(negValue);

/**
 * console.log(2+2);
 * console.log(2-2);
 * console.log(2*2);
 * console.log(2**2);
 * console.log(2/2);
 * console.log(2%2);
 */

let str1 = "sajan";
let str2 = " kumar";

let str3 = str1 + str2;
// console.log(str3);

/*console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((6 + 4) * 5 % 5);
*/

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);