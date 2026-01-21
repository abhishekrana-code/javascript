// class User{
//     constructor(username,email,pass){
//         this.username=username;
//         this.email=email;
//         this.pass=pass;
//     }
//     encryptPassword(){
//         return `${this.pass}abh`
//     }
// }

// const me =new User('Kittu','ittu@gmail','123')
// console.log(me)
// console.log(me.encryptPassword())

// //without using class

// function createUser(username,email,pass)
// {
//     this.username=username;
//     this.email=email;
//     this.pass=pass;
// }
// createUser.prototype.encryptPassword=function(){
//         return `${this.pass}abh`
//     }
// const create =new createUser('ANi','ani@gmail','321')
// console.log(create)
// console.log(create.encryptPassword())

class Handler{
    constructor(name){
        this.name=name
    }
    logMe(){
        console.log(`Username is ${this.name}`)
    }
}

class Teacher extends Handler{
    constructor(name,email,password){
        super(name);
        this.email=email
        this.password=password;
    }
}

const teach = new Teacher('Shyam','Sh@gmail.com',123);
console.log(teach);
teach.logMe();

