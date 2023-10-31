//**************************CONVERSION*************************************

let score = "40ABC"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);//Number
// console.log(valueInNumber); //NaN(NOT A NUMBER)

//ouputs for ValueInNumber for different inputs
//"40"=>40 
//"40abc"=>NaN
//true=>1 false=>0

let a=1
let booleanA = Boolean(a)

// console.log(booleanA);

//1=>true 0=>false
//""=>false
//"supriya"=>true

let num = 33
let StringNum = String(num)

// console.log(typeof StringNum);
// console.log(StringNum);

//**************************OPERATIONS***********************************

let value=3
let negValue = -value

// console.log(negValue);

// console.log(2**3);// (2^3)=8

// console.log(2/3);//0.6666666666666666

// console.log(2%3)//2

let str1 = "hello"
let str2 = " supriya"

// console.log(str1+str2);
// console.log(1+2+"3"); //33
// console.log("1"+2+3); //123

//do not use these type of syntax
// console.log(+true);
// console.log(+"");