//global execution context
console.log("Global Execution Context Start");
function firstFunction() {
    console.log("Inside First Function");
    secondFunction();
    console.log("Exiting First Function");
}
function secondFunction() {
    console.log("Inside Second Function");
    thirdFunction();
    console.log("Exiting Second Function");
}
function thirdFunction() {
    console.log("Inside Third Function");
    console.log("Exiting Third Function");
}   
firstFunction();
console.log("Global Execution Context End");
// The call stack unwinds as each function completes
// Output:
// Global Execution Context Start
// Inside First Function
// Inside Second Function
// Inside Third Function
// Exiting Third Function
// Exiting Second Function
// Exiting First Function
// Global Execution Context End

// ------------------------------
//functions exection context example
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");
// Each call to greet creates a new execution context
// Output:
// Hello, Alice!
// Hello, Bob!
// ------------------------------
// Recursive function execution context example
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120
// Each call to factorial creates a new execution context until the base case is reached
// Output:
// Factorial of 5: 120
// ------------------------------
// Asynchronous function execution context example
console.log("Asynchronous Execution Context Start");
setTimeout(() => {
    console.log("Inside setTimeout callback");
}, 1000);   
console.log("Asynchronous Execution Context End");
// The callback function creates a new execution context when invoked after the delay
// Output:
// Asynchronous Execution Context Start
// Asynchronous Execution Context End
// Inside setTimeout callback
// ------------------------------
//Eval execution context example
console.log("Eval Execution Context Start");
eval('console.log("Inside eval execution context");');
console.log("Eval Execution Context End");
// The code inside eval creates a new execution context
// Output:
// Eval Execution Context Start
// Inside eval execution context
// Eval Execution Context End
// ------------------------------
//memory phases and execution phases

// Memory Phase
// 1. Global memory allocation  
let globalVar = "I am a global variable";

function memoryExample() {
    // 2. Function memory allocation
    let localVar = "I am a local variable";
    console.log(globalVar); // Accessing global variable
    console.log(localVar); // Accessing local variable
}
memoryExample();

// Execution Phase
// 1. Global code execution
console.log("Executing global code");
// 2. Function code execution
memoryExample();
// The memory phase allocates space for variables and functions, while the execution phase runs the code
// Output:
// I am a global variable
// I am a local variable
// Executing global code    
// I am a global variable
// I am a local variable
// ------------------------------