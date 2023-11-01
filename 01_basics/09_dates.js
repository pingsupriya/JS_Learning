let myDate = new Date()

// console.log(myDate); //2023-11-01T10:42:04.599Z

// console.log(typeof Date);
// console.log(myDate.toString()); //Wed Nov 01 2023 10:43:04 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleDateString()); //11/1/2023

// console.log(myDate.toDateString()); //Wed Nov 01 2023

// console.log(myDate.toLocaleString()); //11/1/2023, 10:46:00 AM

let myCreatedDate = new Date(2023,10,1)
// console.log(myCreatedDate);

let myCreatedDate2 = new Date(2023,10,1,4,20)
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14") //dd-mm-yyyy
// console.log(myCreatedDate2.toLocaleString());

//timestamp in dates
let myTimeStamp = Date.now()

// console.log(myTimeStamp); //date in milliseconds
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); //in seconds to compare values

let newDate = new Date();

console.log(newDate.getDay()); //3(wed)
console.log(newDate.getMonth()+1);//11(nov)

