// Two ways to declare objects:

//1. LITERAL(Singleton will not be created)

//2. CONSTRUCTOR (Singleton object)
// Object.create(by constructor)


//OBJECT LITERALS

const mySymbol = Symbol("key1")

const jsUser ={
    name:"supriya" ,//here "name" is considered as string
    "full name":"supriya b w",
    [mySymbol]:"my symbol",
    location:"nashik",
    isLogin: false,
    lastlogin:["mon","sat"]
}

//console.log(jsUser.name);
//console.log(jsUser["name"]);

// console.log(jsUser["full name"]);

// console.log(typeof jsUser[mySymbol]);


jsUser.name = "riya"
// Object.freeze(jsUser) //next changes will not be visible as we have freezed
jsUser.name= "dfghj"
// console.log(jsUser); 

//FUNCTIONS

jsUser.greeting = function(){
    console.log("hello js user!!");
}

jsUser.greeting2 = function(){
    console.log(`hello js user!!, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());