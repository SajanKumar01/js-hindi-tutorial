// ! Array in JavaScript

const myArrOne = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktman", "naagraj"];

const myarrTwo = new Array(1, 2, 3, 4, 5, 6, 7);

// console.log(myArr[4]);

const myArr = [0, 1, 2, 3, 4, 5];

// ? Array Methods

// adding  element in the last position
/*myArr.push(6)
myArr.push(7)

// remove the last element
myArr.pop()
console.log(myArr); */

// adding element in first position  by using unshift, and  you can add multiple elements
myArr.unshift(9);

// Removing element in first position  by using Shift
myArr.shift();
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

/*const newArr = myArr.join()
console.log(myArr);
console.log(newArr);*/

// ? slice, Splice

const myArrs = [0, 1, 2, 3, 4, 5];

console.log("A ", myArrs);

const myn1 = myArrs.slice(1, 3)
console.log(myn1);


console.log("B ", myArrs);


const myn2 = myArrs.splice(1, 3)
console.log(myn2);

console.log("C ", myArrs);


