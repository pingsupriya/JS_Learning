const name = "supriya "
const repoCount = 10

//Previous method to log the string
console.log(name+ repoCount+" value");

//Modern method to log the string
console.log(`My name is ${name} and I have ${repoCount} repositories`); 

//Making String as object
const gameName = new String('templeRun')
console.log(gameName[0]);
console.log(gameName.__proto__); //{}

console.log(gameName.length); //9
console.log(gameName.toUpperCase);

console.log(gameName.charAt(3)); //p
console.log(gameName.indexOf('n')); //8
// substring does not accept negative indices, while slice does. 
//substring
const newStr = gameName.substring(0,4);
console.log(newStr);

//slice
const anotherStr = gameName.slice(0,4);
console.log(anotherStr);

//trim(remove whiteSpace)
const trimStr = gameName.trim();
console.log(trimStr);

//replace
console.log(gameName.replace('t', 'R'));

//includes
console.log(gameName.includes("temple"));

//split on basis of array
console.log(gameName.split('R'));