// Two types of memory:

// 1. Stack //for primitive datatypes
// 2. heap //for non-primitive datatypes

// stack:call by value(when used it makes the copy of the original element and changes occur in that)

//example
let myname = "supriya"
let anotherName = myname
anotherName = "pihu"
console.log(myname);
console.log(anotherName);

// heap:call by ReferenceError(when the variable is changed then the actual variable changes)

//example
let user1 = {
    name: "supriya",
    email:"supriya@google.com"
}
let user2=user1
user2.email ="pihu@google.com"
console.log(user1.email);
console.log(user2.email);
