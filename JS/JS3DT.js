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