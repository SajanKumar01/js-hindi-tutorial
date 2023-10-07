// !Objects in javaScript  part 1
// singleton
// Object.create

// object literals

const mysymbol = Symbol("key1")
 
const jsUser = {
    name: "sajan",

    [mysymbol]:"mykey1",

    age: 20,
    "full name":"sajan kumar",
    location:"Bokaro",
    email:"sajankr70@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["monday", "saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["lastLoginDay"]);

// console.log( jsUser[mysymbol]);

jsUser.email = "krhitesh50@gmail.com"
// console.log(jsUser["email"]);
// console.log(jsUser);

// Object.freeze(jsUser)


jsUser.greeting = function () {
    console.log("hello js user");
}


jsUser.greetingtwo = function () {
    console.log(`hello js user, ${this.name}`);
}


console.log(jsUser.greetingtwo());