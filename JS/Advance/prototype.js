let myHeros =["thor","spiderman"]
let heroPower ={
    thor: "hammer",
    spiderman: "web",
    getSpider: function(){
        console.log(`Spidy uses ${this.spiderman} as power`)
    }
}
Object.prototype.Abhishek= function(){
    console.log(' am I in .')
}
Array.prototype.Abhi=function(){
    console.log('YEs')
}
heroPower.Abhishek();
myHeros.Abhishek();

//String->Object->null
//Array->Object->null
//Function->Object->null

heropower.Abhi(); //->cannot access
myHeros.Abhi();