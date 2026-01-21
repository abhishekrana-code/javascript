function user(email, password){
    this._email =email;
    this._password = password;

Object.defineProperty(this,'email',{ //user.prototype
    get: function(){
        return this._email.toUpperCase();
    },
    set: function(getEmail){
        this._email=getEmail;
    }
});
Object.defineProperty(this,'password',{  //user.prototype
    get: function(){
        return this._password.toUpperCase();
    },
    set: function(getPassword){
        this._password=getPassword;
    }
});
}
const usr =new user('abhi@gmail.com','123456');
console.log(usr.email);
console.log(usr.password);