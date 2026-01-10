//object literals

const mySymbol = Symbol("mySymbol");
var obj = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com",
  [mySymbol]: "This is a symbol property"
};
console.log(obj);
console.log(obj.email); //accessing property using dot notation
console.log(obj["email"]); //accessing property using bracket notation
console.log(obj[mySymbol]); //accessing symbol property
//function as property value
obj.greet = function() {
    console.log("Hello, " + this.name);
};
console.log(obj.greet()); //Hello, John


const Course = {
  title: "JavaScript Basics",
  duration: "4 weeks",
    level: "Beginner",
    instructor: "Abhishek",
};
const {title: t, duration, level, instructor} = Course;
console.log(t); //JavaScript Basics
console.log(duration); //4 weeks

const navbar = ({company, year}) => {  
    return company + " © " + year;
};
console.log(navbar({company: "ABC Corp", year: 2024}));//ABC Corp © 2024

// {
//    "name": "Abhi",
//     age: 25,
//     "city": "Dumka"
// }