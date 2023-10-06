// ! Date in js
let myDate = new Date();

//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString());



let myCreatedDate  = new Date(2003, 10, 5);
// console.log(myCreatedDate.toDateString());

let myCreatedDateOne  = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDateOne.toLocaleString());

let myCreatedDateTwo  = new Date("2004-11-10");
// console.log(myCreatedDateTwo.toLocaleString());

let myCreatedDateThree  = new Date("10-11-2004");
// console.log(myCreatedDateTwo.toLocaleString());


//  *********

let timeStamp =  Date.now()
// console.log(timeStamp);
// console.log(myCreatedDateThree.getTime());

// console.log(Math.floor(Date.now()/1000));


//  **********

let  newDate = new Date();

// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());


newDate.toLocaleString('default',{
    weekday: "long"
})




