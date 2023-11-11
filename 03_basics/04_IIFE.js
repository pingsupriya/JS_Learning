// Immediately Invoked Function Expressions (IIFE)

// It is used to immediately run the invoked function and the main reason is to Eliminate the global scope pollution in this function 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//; necessary

// here above ()()---first () is for function definition and  second () is for function execution 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('supriya')