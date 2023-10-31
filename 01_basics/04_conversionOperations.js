let score = "40ABC"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//Number
console.log(valueInNumber); //NaN(NOT A NUMBER)

//ouputs for ValueInNumber for different inputs
//"40"=>40 
//"40abc"=>NaN
//true=>1 false=>0

let a=1
let booleanA = Boolean(a)
console.log(booleanA);

//1=>true 0=>false
//""=>false
//"supriya"=>true

let num = 33
let StringNum = String(num)
console.log(typeof StringNum);
console.log(StringNum);