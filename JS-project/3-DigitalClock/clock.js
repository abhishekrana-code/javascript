const clock = document.getElementById("clock")
let date=new Date()

setInterval(() => {
    let date=new Date()
    clock.innerHTML = date.toISOString();
},1000)