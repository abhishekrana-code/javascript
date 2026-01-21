//Constructor Functiion
function user(username,email){
    this.username=username;
    this.email=email;

    //return this;
}

// const userOne = user('abhi','abhi@gmail.com')
// const userTwo = user('abhay','abhay@gmail.com')
const userOne = new user('abhi','abhi@gmail.com')
const userTwo = new user('abhay','abhay@gmail.com')

console.log(userOne);
console.log(userTwo);

//new keyword empty object create