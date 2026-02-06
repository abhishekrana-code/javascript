// function outer(){
//     let username='Abhishek';
//     function inner(){
//         console.log(`Hello, ${username}`);
//     }
//     inner();
// }
// outer();
// //console.log(`Too outer,${username}`);
// let username='abhi';
// function outer2(){
//     console.log(username);
// }
// outer2()
function outer(){
    let username='Abhishek';
    function inner(){
        console.log(`Hello, ${username}`);
    }
    return inner;
}
const innerFunc=outer();
innerFunc();