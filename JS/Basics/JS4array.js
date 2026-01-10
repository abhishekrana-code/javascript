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

const check = [10, 20, 30, "A", "B", "C"];
console.log(check);//[10, 20, 30, "A", "B", "C"]
//CONCATE
const newCheck = check.concat([[40].concat( [50])], ["D", "E"]);
console.log(newCheck);//[10, 20, 30, "A", "B", "C", 40, 50, "D", "E"]
//FLAT
const nestedArr = [1, 2, [3, 4], [5, [6, 7]]];
const flatArr = nestedArr.flat(2); //flattens the array up to depth 2
console.log(flatArr); //[1, 2, 3, 4, 5, 6, 7]
//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); //[1, 2, 3, 4, 5, 6]

const a1 = [10, 20];
const a2 = [30, 40];
const combinedA = [0, ...a1, ...a2, 50];
console.log(combinedA); //[0, 10, 20, 30, 40, 50]
const a3 = [100, 200];
const combine = a1.concat(a2, a3);
console.log(combine); //[10, 20, 30, 40, 100, 200]
const combine2 = a2.concat(a1, a3);
console.log(combine2); //[30, 40, 10, 20, 100, 200]
//Array from
const str = "Hello";
const charArray = Array.from(str);
console.log(charArray); //['H', 'e', 'l', 'l', 'o']
//map
const nums = [1, 2, 3, 4, 5];
const squaredNums = nums.map(num => num * num);
console.log(squaredNums); //[1, 4, 9, 16, 25]
//filter
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums); //[2, 4]
//reduce
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); //15
//find
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven); //2
const myArray = [5, 10, 15, 20, 25];

const newArray = myArray.map((value) => value + 5);

console.log(newArray); // [10, 15, 20, 25, 30]
const newNums = myArray.filter((value) => value > 15);

console.log(newNums); // [20, 25]

const total = myArray.reduce((acc, curr) => acc + curr, 0);

console.log(total); // 75

const firstOverTen = myArray.find((value) => value > 10);

console.log(firstOverTen); // 15

const newN = [];
myArray.forEach((value) => newN.push(value * 2));
console.log(newN); // [10, 20, 30, 40, 50]
const numsArr = [1, 2, 3, 4, 5];
const doubled = numsArr.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
numsArr.map((num) => console.log(num + 1)); // 2 3 4 5 6 (each on a new line)

//chaining
const chainedResult = numsArr
  .filter(num => num % 2 === 0) // [2, 4]
  .map(num => num * 3)          // [6, 12]
  .reduce((acc, curr) => acc + curr, 0); // 18
console.log(chainedResult); // 18   

const words = ["apple", "banana", "cherry", "date"];
const fruit = words.reduce(function(acc, fruit) {
  if (fruit.length > 5) {
    acc.push(fruit);
  }
  return acc;
}, []);
console.log(fruits); // ["banana", "cherry"] 
const newWord = words.map(element => element+element)
console.log(newWord)
