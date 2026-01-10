//this
let user = {
    firstName: "Abhishek",
    lastName: "Dey",

    welcomeMessage: function() {
        console.log(`${this.firstName} ${this.lastName}, welcome to website;`);
    }   
};
user.welcomeMessage();
user.firstName = "Jane";
user.lastName = "Rana";
user.welcomeMessage();
console.log(this); // In global context, 'this' refers to the global object (window in browsers)

function one() {
    // console.log(this); // In a regular function, 'this' refers to the global object
    let username = "globalUser";
    console.log(this.username); // undefined
    console.log(username); // "globalUser"
    console.log(this);
}
one();

//arrow function
//this in arrow function
const obj = () => {
    let username = "arrowUser";
    console.log(this.username); // In arrow functions, 'this' is lexically bound (inherits from surrounding scope)
    console.log(username); // "arrowUser"
    console.log(this);
};
obj();
// ------------------------------
// Arrow function expression
const addtwoNumbers = (a, b) => {
    return a + b;
};
console.log(addtwoNumbers(5, 10)); // 15
// ------------------------------
// Implicit return in arrow function
const addTwo = (a, b) => (a + b);
console.log(addTwo(20, 30)); // 50
// ------------------------------
//implicit return of object literal
const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser("Alice", 25)); // { name: 'Alice', age: 25 }
// ------------------------------
// Arrow function with no parameters
const greet = () => console.log("Hello, World!");
greet(); // "Hello, World!"
// ------------------------------