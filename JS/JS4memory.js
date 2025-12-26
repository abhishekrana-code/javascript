// Memory Management in JavaScript
// JavaScript uses a combination of stack and heap memory to manage data storage.
// Primitive DataTypes are stored in stack memory, while Reference DataTypes are stored in heap memory.
let a = 10; // Stored in stack
let b = a; // b gets a copy of the value of a
b = 20; // Changing b does not affect a
console.log(a); // 10
console.log(b); // 20
// ------------------------------
let obj1 = { name: "Alice" }; // Stored in heap
let obj2 = obj1; // obj2 references the same object as obj1
obj2.name = "Bob"; // Changing obj2 affects obj1
console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"
// ------------------------------
function changePrimitive(prim) {
    prim = prim + 10;
    console.log("Inside function:", prim); // 20
}
let num = 10;
changePrimitive(num);
console.log("Outside function:", num); // 10
// ------------------------------
function changeObject(obj) {
    obj.name = "Charlie";
    console.log("Inside function:", obj.name); // "Charlie"
}
let person = { name: "Dave" };
changeObject(person);
console.log("Outside function:", person.name); // "Charlie"
// ------------------------------
// Memory Leak Example
let memoryLeakArray = [];
function addToArray() {
    memoryLeakArray.push(new Array(1000000).fill("leak"));
    console.log("Array length:", memoryLeakArray.length);
}
setInterval(addToArray, 1000); // This will keep adding large arrays to memory
// To prevent memory leaks, ensure to clear references when they are no longer needed
// For example, you can clear the array after some time
setTimeout(() => {
    memoryLeakArray = [];
    console.log("Cleared memory leak array");
}, 10000);
// ------------------------------


