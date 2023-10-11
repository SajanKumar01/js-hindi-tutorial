// for of 

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()
map.set("IN" ,"India")
map.set("USA" ,"united State of America")
map.set("Fr" ,"France")
map.set("jpn" ,"japan")

// console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myobject ={
    'game01':"BGMI",
    'game02':"COD",
    'game03':"FF"
}

for (const [key, value] of myobject) {
    console.log(key, ':-', value);
}

