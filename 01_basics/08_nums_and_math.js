// ****************************NUMBERS************************
const score =400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));  //decimal values after point

const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(4)); //priority gets to digit before point +1 digit(try eg. to understand)

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//*********************MATHS**********************************

console.log(Math);
console.log(Math.abs(-4)); //negative to positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.77));
console.log(Math.floor(4.9));
console.log(Math.max(2,8,5,6));

console.log(Math.random()); //number is between 0 and 1 and 16digit value

const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);