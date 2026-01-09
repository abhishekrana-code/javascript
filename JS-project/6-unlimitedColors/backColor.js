const randomColor =function(){
    const hex ="0123456789ABCDEF"
    let color= '#'
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
// const startChange =function(){
//     document.body.style.backgroundColor=randomColor();
// }
let intervalID;
const startChange =function(){
    if(!intervalID)
    {
        intervalID=setInterval(colorChange,2000);
    }
    function colorChange(){
        document.body.style.backgroundColor=randomColor()
    }
}
const stopChange=function(){
    clearInterval(intervalID);
    intervalID=null;
}
document.querySelector('#start').addEventListener('click',startChange);
document.querySelector('#stop').addEventListener('click',stopChange);