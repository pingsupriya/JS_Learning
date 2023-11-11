const user = {
    username: "supriya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//'this' indicates the current context


// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()

// console.log(this); //{}

// function chai(){
//     let username = "supriya"
//     console.log(this.username); //undefined(it works only in objects not in functions)
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//*********************ARROW FUNCTIONS*******************************

// const chai =  () => {
//     let username = "supriya"
//     console.log(this);
// }


// chai()

//EXPLICIT RETURN
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// IMPLICIT RETURN
// const addTwo = (num1, num2) =>  num1 + num2

//NO NEED TO WRITE RETURN KEYWORD
// const addTwo = (num1, num2) => ( num1 + num2 )


//TO RETURN A OBJECT
// const addTwo = (num1, num2) => ({username: "supriya"})
// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()