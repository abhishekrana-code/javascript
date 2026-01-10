const promise1 = new Promise(function(resolve,reject){
    //do an async task
    //DB calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)

})
promise1.then(function(){
    console.log("Promised consumed")
})//here value is return

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async taskks 2 completed');
        resolve()
    },1000)
}).then(function(){
    console.log('tasks 2 resolve')
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Abhi",email: "Abhi@gmail.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false
         if(!error){
             resolve     ({username:'kittu',     password:'1233'})
         }
         else{
            reject(console.log('ERROR:      something went wrong'))
         }
    },1000)
})
promise4.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(()=>console.log('The Promise is either resolved or rejected'))

const promise5 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true
         if(!error){
             resolve({username:'karr',     password:'1233'})
         }
         else{
            reject(console.log('ERROR: something went wrong'))
         }
    },1000)
})

async function consumePromise5(){
    try{
        const responds=await promise5
        console.log(responds) 
    }
    catch(error){
        console.log(error)
    }
}

consumePromise5()

// async function getAll(){
//     try{
//         const response = await fetch('https://api.github.com/users/abhishekrana-code')
//         //console.log(response)
//         const data =await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log("E: ",error);
//     }
// }
// getAll()

fetch('https://api.github.com/users/abhishekrana-code')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))