"use strict";   //treat all JS code as newer version

// alert("hello") //we are using nodeJS not browser 
//refer mdn docs

let name="supriya" //string(can also be in '')
let age = 19 //number
let isLogin = false//boolean
const id1=symbol('12');
const id2=symbol('12');
// console.log(id1===id2); //false
const bignum = 45621478521n

console.log(typeof"supriya") //output as String
console.log(typeof null); //object (loophole in language as many error occurs of this)
console.log(typeof undefined); //undefined

//Primitive DataTypes(7 types)--call by value

//String
//number
//Boolean
// BigInt
// null(standalone value)--empty
// undefined--var declared but value not given
// symbol(unique)


// Non_Primitve DataTypes--call by ref
//return type--function
//Objects
//Functions
//array

const heros = ["shakti","mukti","doga"] //array

let myObj={
    name: "supriya",
    age: 19
}

let myFunction = function(){
    console.log("hello");
}






