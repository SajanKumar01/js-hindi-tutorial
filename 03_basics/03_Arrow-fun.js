const  user = {
  userName:"prem kumar",
  price: 999,

  welcomeMessage:function () {
    console.log(`${this.userName} , welcome to our website`);
    // console.log(this);

  }
  
}

user.welcomeMessage()

user.userName = "rakesh"
user.welcomeMessage()

// console.log(this);

// function chai() {
//   let userName="Amit kukar"
//   console.log(this.userName);
// }
// chai()


 const chai = () => { 
    let userName ="Sonu kumar"
    // console.log(this.userName);
 }

//  chai()


// ? This   - refer to the corrent contest



// ++++++++++++++++ Arrow Function +++++++++++++++++

// const addTwo = ( num1, num2) => {
//   return num1 + num2
// }
// console.log(addTwo(5,8));


// const addTwo = ( num1, num2) =>   num1 + num2


// const addTwo = ( num1, num2) =>   (num1 + num2)
// console.log(addTwo(5,48));

const addTwo = ( num1, num2) =>   ({userName: " Any Name in A place"})
console.log(addTwo());


