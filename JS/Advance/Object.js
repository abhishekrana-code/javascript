function multipleBy5(num){
    return num*5
}
multipleBy5.power=2;
console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function user(username,score)
{
    this.username=username;
    this.score=score;
}

user.prototype.increment=function(){
     this.score++
}
user.prototype.printMe=function(){
    console.log(this.score)
}
const abhi= new user('abhi',8.5)
const rana=new user('rana',8.7)
abhi.printMe()
/*

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
 The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object*/


function Person(name) {
  this.name = name;       //  this = new object
}

Person.prototype.greet = function() {
  console.log("Hi " + this.name);
};

const p = new Person("Abhishek");
p.greet();

/*Internally this becomes:

let p = {};

p.__proto__ = Person.prototype;

Person.call(p, "Abhishek");

return p */