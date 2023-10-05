// ! Number and  Maths in js

//  +++++++++++++++++ Numbers +++++++++++++++++
const score = 400
// console.log(score);

const balance = new Number(1000);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));


const hundrads = 10000000
// console.log(hundrads.toLocaleString('en-IN'));



//  +++++++++++++++++ Maths +++++++++++++++++
//  methods of maths 
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.ceil(4.2));
// console.log(Math.round(5.6));
// console.log(Math.floor(4.2));
// console.log(Math.min(5,6,2,8,9,7));
// console.log(Math.max(10,5,6,4,8,9,7));


// console.log(Math.random());   // ?the output is  0 to kai bich mai value deta hai 1...
// console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max -min + 1)) + min)

