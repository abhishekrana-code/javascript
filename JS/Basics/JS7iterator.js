// //for
// for (let i = 0; i < 5; i++) {
//     console.log("For loop iteration:", i);
// }

// for (let index = 0; index < 3; index++) {
//     console.log("Index:", index);
//     const element = index * 2;
//     console.log("Element:", element);
//}
// for (let i = 1; i <= 10; i++) {
//     console.log("Table of", i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i, "x", j, "=", i * j);
//     }   
// }

//  //while
//  let count = 0; 
//  while (count < 5) {
//     console.log("While loop count:", count);
//     count++;
// }

// //break and continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("Breaking the loop at i =", i);
//         break;
//     }
//     if (i % 2 === 0) {
//         console.log("Continuing at even i =", i);
//         continue;
//     }
//     console.log("Current i:", i);
// }

// //do while
// let num = 0;
// do {
//     console.log("Do-While loop num:", num);
//     num++;
// } while (num < 3);  

// //for of
// const array = ['a', 'b', 'c'];
// for (const element of array) {
//     console.log("For-Of element:", element);
// }   
// const str = "hello";
// for (const char of str) {
//     console.log("For-Of char:", char);
// }
// //for in
// const obj = {x: 10, y: 20, z: 30};
// for (const key in obj) {
//     console.log("For-In key:", key, "value:", obj[key]);
// }
// const arr = [100, 200, 300];
// for (const index in arr) {
//     console.log("For-In index:", index, "value:", arr[index]);
// }   
// //Map Iteration
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (const [key, value] of map) {
    console.log("Map key:", key, "value:", value);
}
console.log("Map size:", map.size);
console.log(map);

//foreach
const numbers = [10, 20, 30];
// numbers.forEach((num, index) => {
//     console.log("ForEach index:", index, "number:", num);
// });
numbers.forEach(function(num, index) {
    console.log("ForEach index:", index, "number:", num);
});