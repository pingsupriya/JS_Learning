//OBJECTS SINGLETON(CONSTRUCTOR)
// const tinderUser = new Object() //singleton object

const tinderUser = {} //non singleton object

tinderUser.id ="1234"
tinderUser.name = "supriya"
tinderUser.isLogin = false 

//console.log(tinderUser);

//objects in objects

const regularUser = {
    email: "adfgh.gmail.com",
    fullname:{
        userFullName:{
           firstname:"supriya",
           lastname:"wakchaure" 
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {
    1:"a", 2:"b"
}

const obj2 = {
    3:"a", 4:"b"
}

// const obj3 = {obj1,obj2} //whole objects in new object

// const obj3 = Object.assign({},obj1,obj2)//target,source

//spread operator
const obj3 = {...obj1, ...obj2}

// console.log(obj3);


// objects inside an array

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "hi@gmail.com"
    },
    {
        id:3,
        email: "hello@gmail.com"
    },
]
//to access objects from this
users[1].email

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// *******************************************************

//objects destructuring

const course = {
    courseName : "js",
    price: "999",
    courseInstructor:"supriya"
}

const {courseInstructor: inst} = course

console.log(inst);

//APIs are written in JSON
//json(can be objects or array)

// {
//     "name": "supriya",
//     "course": "js",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]