const accountId = 144553
let accountEmail = "abhishek@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 3 //not allowed
/*
prefer not to use var because of issue in block scope and functional scope
*/
accountEmail = "href@gmail.com"
accountPassword = "222121"
accountCity = "bengaluru"
console.log(accountId);

console.table([ accountEmail,accountPassword,accountCity, accountState])

