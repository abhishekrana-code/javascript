// // NODE 

// //IIFE - Immediately Invoked Function Expression
// //named IIFE
// (function II(){
//     console.log("This function runs immediately upon definition");
// })();
// //unnamed IIFE - arrow function
// ( (name) => {
//     console.log(`This arrow function also runs immediately upon definition ${name}`);
// })('correct');
// // ------------------------------
// //setTimeout example
// setTimeout(() => {
//     console.log("This message is displayed after 2 seconds");
// }, 2000);
// ------------------------------
//setInterval example
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count >= 5) {
        clearInterval(intervalId);

        console.log("Interval cleared after 5 counts");
    }
}, 1000);
// ------------------------------
