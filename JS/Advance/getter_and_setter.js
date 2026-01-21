class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get name(){
        // return this._name.toUpperCase();
        return `username is ${this._name.toUpperCase()}SHEK`;
    }
    set name(username){
        this._name=username;
    }
}
const user = new User('abhi',22);
console.log(user.name);
console.log(user.age);
