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
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof 123n); //bigint
console.log(typeof 123); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof {}); //object