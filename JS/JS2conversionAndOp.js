let score = 50;
score = score + 25;
console.log("Score: " + score);
console.log(`Score: ${score}`);
console.log(typeof score);
console.log(typeof (score ));

score="50";
console.log(typeof score);
let value = Number(score);
console.log(typeof value);

value = String(value);
console.log(typeof value);

// ------------------------------
score ="50abc";
value = Number(score);
console.log(value); //NaN
console.log(typeof value); //number
// ------------------------------

// "33" + 3 => "333" (string concatenation)
// "33" - 3 => 30  (number subtraction)
// "33abc" - 3 => NaN
// true + 2 => 3 (true => 1, false => 0)
// ------------------------------
console.log("33" + 3);
console.log("33" - 3);
console.log("33abc" - 3);
console.log(true + 2);
console.log(false + 2);

// ------------------------------
//"" ==> false
//" " ==> true
//"hello" ==> true  

