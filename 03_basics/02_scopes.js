// !  Scopes in js
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
//   console.log("inner ", a);
}

// console.log(a);
// console.log(b);

function one() {
  const username = "sajankumar ";
  function Two() {
    const website = "Youtube"
    console.log(username);
  }
//   console.log(website);
  Two()
}

// one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



//  ++++++++++++++++++ intersting +++++++++++++++++++

function addone(num) {
    return num + 1
}
console.log(addone(5));



const addTwo = function addone(num) {
    return num + 5
}
addone()