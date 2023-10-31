const accountId = 5415 //to assign a const value(locked value)
let accountEmail = "supriya@google.com" //variable values can be changed
var accountPassword = "12345" //prefer not to use var becoz of issue in block scope and functional scope
accountCity = "Jaipur" //prefer not to use
let accountState; //undefined
// accountId = 2 //not allowed as it is const
accountEmail = "pr@pr.com"
accountPassword = "21212"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])