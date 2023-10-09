function sayMyname() {
  console.log("s");
  console.log("a");
  console.log("j");
  console.log("a");
  console.log("n");
}

// sayMyname()

/*function AddTwoNumeber(num1, num2) {
   console.log(num1 + num2);
}
AddTwoNumeber(10, 58)*/

function addNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
  //    return number1 + number2
}

const result = addNumbers(8, 5);
// console.log("result", result );

function loginUserName(username) {
  return `${username} just logged in`;
}
// console.log(loginUserName(" sajan kuamr"));

function loginUserName(username) {
  if (username === undefined) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserName());

function loginUserName(username = "sajan") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserName());

// Shopping cart

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
  username: "hitesh",
  price: 199
}

function handleObject(anyobject){
  // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)


//********* 
handleObject({
  username: "sam",
  price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
