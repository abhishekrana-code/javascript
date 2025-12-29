//Array
let fruits = ["apple", "banana", "orange"];
console.log(fruits); //["apple", "banana", "orange"]
console.log(fruits.length); //3

fruits.push("grape");
console.log(fruits); //["apple", "banana", "orange", "grape"]
fruits.pop();
console.log(fruits); //["apple", "banana", "orange"]
//methods
fruits.shift(); //removes first element
console.log(fruits); //["banana", "orange"]
fruits.unshift("kiwi"); //adds element at the beginning.It is time-consuming
console.log(fruits); //["kiwi", "banana", "orange"]
console.log(fruits.indexOf("banana")); //1
console.log(fruits.includes("orange")); //true
console.log(fruits.slice(0, 2)); //["kiwi", "banana"]
const newArr = fruits.join();
console.log(newArr); //"kiwi,banana,orange"
console.log(Array.isArray(newArr)); //false
console.log(Array.isArray(fruits)); //true
let arr=new Array(3); //creates an array of length 3 with empty slots
console.log(arr); //[ <3 empty items> ]
arr.fill(0); //fills all slots with 0
console.log(arr); //[0, 0, 0]
arr.fill(5, 1, 3); //fills slots from index 1 to 3 with 5
console.log(arr); //[0, 5, 5]

//slice vs splice
let colors = ["red", "green", "blue", "yellow", "purple"];
let newColors = colors.slice(1, 4); //creates a new array from index 1 to 4 (not inclusive)
console.log(newColors);
//["green", "blue", "yellow"]
const removedColors = colors.splice(2, 1, "orange", "pink"); //removes 1 element at index 2 and adds "orange" and "pink"
console.log(colors); //["red", "green", "orange", "pink", "yellow", "purple"]
console.log(removedColors); //["blue"]

let numbers = [1, 2, 3, 4, 5];
const n1=numbers.splice(1, 2); //removes 2 elements from index 1
console.log(n1); //[2, 3]
console.log(numbers); //[1, 4, 5]

