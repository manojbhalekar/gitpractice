////to set ref of this
//to use one method in multiple object
let manoj = {
    firstName: "manoj",
    lastName: "Bhalekar",
    age: 25,
    rollNo: 33,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(manoj.firstName)//manoj
console.log(manoj['lastName'])//Bhalekar

console.log(manoj.display)//function print [Function: display]
manoj.display() // function call

// let abc = manoj.display
// function() {
//     console.log(this.firstName + this.lastName)
//     //undefined+undefined===>NaN
// }
// console.log(abc)//function
// abc()


//call()
//bind()
//apply()

//1. bind()
let a=manoj.display.bind(manoj)
console.log(a)
a()

//2.call
manoj.display.call(manoj)

//3.apply()
manoj.display.apply(manoj)

//=================================

let manish={
    firstName:"manish",
    lastName:"Sane",
    display:function(){
        console.log(this.firstName+this.lastName)
    }
}

let kiran={
    firstName:"kiran",
    lastName:"Shaha"
}
let y1=manish.display.bind(kiran)
y1()

//=============================================

// let dinga = {
//     firstName: "Dinga"
// }

// let pinga = {
//     firstName: "Pinga"
// }

// let ranga = {
//     firstName: "Ranga"
// }

// let simga = {
//     firstName: "Simga"
// }

// let displayFirstName=function(){
//     console.log(this.firstName)
// }

// let s1=displayFirstName.bind(dinga)
// s1()

// displayFirstName.bind(simga)()

// displayFirstName.call(pinga)

// displayFirstName.apply(ranga)

//==============================================
let dinga = {
    firstName: "Dinga"
}

let pinga = {
    firstName: "Pinga"
}

let ranga = {
    firstName: "Ranga"
}

let simga = {
    firstName: "Simga"
}

let displayFirstName = function (greet1, greet2) {
    console.log(`${greet1} ${this.firstName} ${greet2} !!!`)
}

//bind()
let p1=displayFirstName.bind(ranga,"GoodMorning","Have a nice day")
p1()

//call()
displayFirstName.call(dinga,"Good noon", "have a good day")

//apply()
displayFirstName.apply(simga,["Good night","Sweet Dream"])


//to set ref of this
//to use one method in multiple object