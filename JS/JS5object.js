// //object literals

// const mySymbol = Symbol("mySymbol");
// var obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   email: "john@example.com",
//   [mySymbol]: "This is a symbol property"
// };
// console.log(obj);
// console.log(obj.email); //accessing property using dot notation
// console.log(obj["email"]); //accessing property using bracket notation
// console.log(obj[mySymbol]); //accessing symbol property
// //function as property value
// obj.greet = function() {
//     console.log("Hello, " + this.name);
// };
// console.log(obj.greet()); //Hello, John

const key = new Object();
key.id = 101;
key.type = "primary";
var anotherObj = {
    [key]: "This is a property with an object as key"
};
console.log(anotherObj); //{"[object Object]": "This is a property with an object as key"}
console.log(anotherObj[key]); //This is a property with an object as key