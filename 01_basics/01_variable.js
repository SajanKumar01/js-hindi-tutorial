// ! Variable in javascript
const accountId = 144553
let accountEmail = "sajan@google.com"
var accountPassword = "12345"
accountCity = "Bokaro"
let accountState;

// accountId = 2 //This is  not allowed


accountEmail = "sajankr78@gmail.com"
accountPassword = "21212121"
accountCity = "Dhanbad"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/