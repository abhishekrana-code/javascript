class User{
    constructor(name){
        this.name=name
    }
    logMe(){
        console.log(`Username is ${this.name}`)
    }
    static createId(){
        return `123`;
    }
}
const abhi =new User('Abhishek')
//console.log(abhi.createId());//without static it print 123
//console.log(abhi.createId());//with static it show typeError

//In JavaScript, a static function (usually inside a class) is a method that belongs to the class itself, not to its objects. That means you don’t need to create an object to call it.

console.log(User.createId())//Call with ClassName.staticMethod()