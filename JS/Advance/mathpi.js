//const descriptor = Object.getOwnPropertyDescriptor(Math,'PI');
/*console.log(descriptor);{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false
}*/
// console.log(Math.PI);
// Math.PI =5;
// console.log(Math.PI);
const tea ={
    name:'ginger tea',
    price:10,
    isAvailable:true
};
//console.log(Object.getOwnPropertyDescriptor(tea,'name'));

Object.defineProperty(tea,'name',{
    writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(tea,'name'));
// tea.name='lemon tea'
// console.log(tea.name);

for(let [key,value] of Object.entries(tea)){
    console.log(`${key}: ${value}`);
}
//if enumerable is false it will not show in the loop