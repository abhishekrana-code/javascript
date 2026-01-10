"use strict"; //treat all JS code as newer version
// alert(3 + 3); //shows a popup with the result of the expression. 


//number ==> range from -(2^53 -1) to 2^53 -1
//bigint ==> for larger integers    
//string ==> sequence of characters
//boolean ==> true/false
//null ==> standalone value that represents "nothing" or "empty"
//undefined ==> value for unassigned variables
//object ==> complex data structures.non-primitive data type
//symbol ==> unique identifiers for object properties
// console.log(typeof undefined); //undefined
// console.log(typeof null); //object
// console.log(typeof 123n); //bigint
// console.log(typeof 123); //number
// console.log(typeof "hello"); //string
// console.log(typeof true); //boolean
// console.log(typeof {}); //object

// //------------------------------
// //Math Object
// console.log(Math.PI); //3.141592653589793
// console.log(Math.E); //2.718281828459045
// console.log(Math.sqrt(16)); //4

// console.log(Math.pow(2, 3)); //8
// console.log(Math.abs(-10)); //10
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.7)); //4
// console.log(Math.round(4.5)); //5
// console.log(Math.min(3, 1, 4, 2)); //1
// console.log(Math.max(3, 1, 4, 2));
// //4
// console.log(Math.random()); //random number between 0 and 1

//------------------------------
// //Date Object
// let now = new Date();
// console.log(now); //current date and time
// console.log(now.getFullYear()); //current year
// console.log(now.getMonth()); //current month (0-11)
// console.log(now.getDate()); //current day of the month (1-31)
// console.log(now.getDay()); //current day of the week (0-6)
// console.log(now.getHours()); //current hour (0-23)
// console.log(now.getMinutes()); //current minute (0-59)
// console.log(now.getSeconds()); //current second (0-59)
// console.log(now.getTime()); //milliseconds since January 1, 1970
// console.log(now.toString()); //human-readable string
// console.log(now.toDateString()); //human-readable date string
// console.log(now.toTimeString()); //human-readable time string
// console.log(now.toISOString()); //ISO 8601 string
// console.log(now.toUTCString()); //UTC string
// console.log(now.toLocaleString()); //locale-specific string
// console.log(now.toLocaleDateString()); //locale-specific date string

let newDate = new Date();
let formattedDate = newDate.toLocaleString('default', {
    weekday: 'long', // long, short, narrow
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    day: 'numeric', // numeric, 2-digit
 });
console.log(formattedDate); //"Sunday, December 28, 2025"