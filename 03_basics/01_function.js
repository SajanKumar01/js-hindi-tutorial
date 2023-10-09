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
AddTwoNumeber(10 ,58)*/


function addNumbers(number1, number2) {
    let result = number1 + number2
    return result
    //    return number1 + number2
}

const result = addNumbers(8, 5)
// console.log(result);



function loginUserName(username) {
    return `${username} just logged in`
}
// console.log(loginUserName(" sajan kuamr"));




function loginUserName(username) {
  if (username === undefined) {
    console.log("please enter a username");
    return
  }
    return `${username} just logged in`
}

// console.log(loginUserName());





function loginUserName(username) {
    if (!username) {
      console.log("please enter a username");
      return
    }
      return `${username} just logged in`
  }
  
//   console.log(loginUserName());
  


// Shopping cart 

function calculatCartPrece(...num1) {
    return num1
}

console.log(calculatCartPrece(200, 300, 500,890));



