//if
if (true) {
    console.log("This will always execute");
}
if (false) {
    console.log("This will never execute");
}
//== comparison
let x = 10;
if (x == "10") {
    console.log("x is equal to '10' with type coercion");
}
//=== comparison
if (x === 10) {
    console.log("x is strictly equal to 10 without type coercion");
}
//!= comparison
if (x != 5) {
    console.log("x is not equal to 5");
}
//!== comparison
if (x !== "10") {
    console.log("x is not strictly equal to '10'");
}


//if-else
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}   
//if-else if-else
let score = 85; 
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}   
//switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Weekend");
}