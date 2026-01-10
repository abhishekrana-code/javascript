//primitive DataType
// 7 Types of Primitive DataTypes in JavaScript
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol
// ------------------------------
const id = Symbol("id");
const id2 = Symbol("id");
console.log(id === id2); //false

// ------------------------------
// Reference DataType
// 1. Object
// 2. Array
// 3. Function

const person = {
    name: "John",
    age: 30
};
console.log(typeof person); //object

const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); //object

function greet() {
    console.log("Hello");
}
console.log(typeof greet); //function
// ------------------------------
const str1 = "Hello";
const repocount = str1.length;

console.log(`${str1}, Length of string is: ${repocount}`); //Hello, Length of string is: 5
// ------------------------------
const namee=new String("Hitesh");
console.log(typeof namee); //object
console.log(namee); //[String: 'Hitesh']
console.log(namee.valueOf()); //Hitesh
console.log(namee[0]); //H
console.log(namee.__proto__); //String {"", length: 6, constructor: ƒ, anchor: ƒ, big: ƒ, …}
// ------------------------------
console.log(namee.at()); //H
console.log(namee.substring(-5,3)); //Hit
console.log(namee.slice(-2,4)); 
//difference between slice and substring is that slice can accept negative index but substring can't
//example
console.log(namee.slice(-4)); //tesh
console.log(namee.substring(-4)); //Hitesh
// ------------------------------
const str2="   Hello World   ";
console.log(str2.trim()); //Hello World
console.log(str2.trimStart()); //Hello World
console.log(str2.trimEnd()); //   Hello World
// ------------------------------
const str3="Hello World";
console.log(str3.toUpperCase()); //HELLO WORLD
// ------------------------------

//Number DataType
const num1=42;
console.log(typeof num1); //number  
const num2=new Number(42);
console.log(typeof num2); //object
console.log(num2.valueOf()); //42
// ------------------------------
console.log(Number.isInteger(num1)); //true
console.log(Number.isNaN(NaN)); //true
console.log(Number.isFinite(Infinity)); //false
// ------------------------------
console.log(Number.parseInt("42px")); //42
console.log(Number.parseFloat("3.14abc")); //3.14
// ------------------------------
console.log((0.1 + 0.2).toFixed(2)); //0.30
console.log(num1.toString()); //42
console.log(num1.toString.length); //2

const num3=255.8976;
console.log(num3.toPrecision(4)); //255.9
console.log(num3.toPrecision(3)); //256
console.log(num3.toPrecision(2)); //2.6e+2
// ------------------------------
const hundred = 10000000;
console.log(hundred.toLocaleString('en-IN')); //1,00,00,000
