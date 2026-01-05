// //DOM MANIPULATION USING JAVASCRIPT
// //1. SELECTING ELEMENTS USING DIFFERENT METHODS
// //SELECTING BY ID   
// let button = document.getElementById("myButton");
// let paragraph = document.getElementById("displayText");
// //SELECTING BY CLASS NAME
// let heading = document.getElementsByClassName("heading")[0];
// //SELECTING BY TAG NAME
// let divs = document.getElementsByTagName("div");
// //SELECTING USING QUERY SELECTOR
// let container = document.querySelector(".container");
// //SELECTING ALL USING QUERY SELECTOR ALL
// let allParagraphs = document.querySelectorAll("p"); 
// //2. MANIPULATING CONTENT AND STYLES
// heading.textContent = "Welcome to DOM Manipulation!";
// paragraph.style.color = "blue";
// paragraph.style.fontSize = "18px";
// container.style.border = "2px solid black";
// container.style.padding = "10px";
// //3. ADDING EVENT LISTENERS
// button.addEventListener("click", function() {
//     alert("Button was clicked!");
//     paragraph.textContent = "Button Clicked! Text Updated.";
//     paragraph.style.color = "green";
// });
document.getElementById("myButton").innerHTML="CLICK ME NOW!";