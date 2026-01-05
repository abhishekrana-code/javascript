// //if
// if (true) {
//     console.log("This will always execute");
// }
// if (false) {
//     console.log("This will never execute");
// }
// //== comparison
// let x = 10;
// if (x == "10") {
//     console.log("x is equal to '10' with type coercion");
// }
// //=== comparison
// if (x === 10) {
//     console.log("x is strictly equal to 10 without type coercion");
// }
// //!= comparison
// if (x != 5) {
//     console.log("x is not equal to 5");
// }
// //!== comparison
// if (x !== "10") {
//     console.log("x is not strictly equal to '10'");
// }


// //if-else
// let age = 20;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }   
// //if-else if-else
// let score = 85; 
// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else {
//     console.log("Grade: F");
// }   
// //switch
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");  
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Sunday");
// }

// //ternary operator
// let isMember = true;
// let discount = isMember ? 0.1 : 0;
// console.log("Discount:", discount);

// //nested if
// let num = 15;
// if (num > 0) {
//     if (num % 2 === 0) {
//         console.log("The number is positive and even.");
//     } else {
//         console.log("The number is positive and odd.");
//     }   
// } else {
//     console.log("The number is not positive.");
// }

// //logical operators
// let a = 5;
// let b = 10;
// if (a < 10 && b > 5) {
//     console.log("Both conditions are true.");
// }
// if (a < 10 || b < 5) {
//     console.log("At least one condition is true.");
// }
// if (!(a > 10)) {
//     console.log("a is not greater than 10.");
// } 
// //falsey values
// let value = 0;
// if (!value) {
//     console.log("The value is falsey.");
// }
// value = "Hello";
// if (value) {
//     console.log("The value is truthy.");
// }
value = null;
if (!value) {
    console.log("The value is falsey.");
}
value= undefined;
if (!value) {
    console.log("The value is falsey.");
}
value= NaN;
if (!value) {
    console.log("The value is falsey.");
}
value= "";
if (!value) {
    console.log("The value is falsey.");
}
value= false;
if (!value) {
    console.log("The value is falsey.");
}
//false,0,-0,0n(bigInt),null,undefined,NaN,""
//turthy values: everything else
//"0"," ",[],{},function(){},42,-42,3.14, -3.14,Infinity,-Infinity,true

//nulish coalescing operator
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue;
console.log("Final Value:", finalValue); // Output: "Final Value: Default Value"
userInput = "User Input";
finalValue = userInput ?? defaultValue;
console.log("Final Value:", finalValue); // Output: "Final Value: User Input"
//The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.