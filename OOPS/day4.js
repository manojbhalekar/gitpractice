//OOPS
//Inheritace
//encapsulation
//abstraction
//polymorphism


//Inheritance
//superclass/parentclass
//subclass/child class
//extends

// class GrandFather{
//     surname="Mule"
//     money=2000
//     displayMoney(){
//         console.log(`I have ${this.money}`)
//     }
// }

// class Father extends GrandFather{
//     //2 property
//     //1 method
//     home="shreeNiwas"
//     displayHome(){
//         console.log(`I have my own house name as ${this.home}`)
//     }
// }

// class Son extends Father{
//     //3 property
//     //2 methods
//     car="Audi"
//     displayCar(){
//         console.log(`I have ${this.car}`)
//     }
// }
// let Waman=new GrandFather()
// console.log(Waman)
// Waman.displayMoney()//2000
// //Waman.displayCar()
// console.log(Waman.surname)
// console.log(Waman.money)


// let Mahendra =new Father()
// console.log(Mahendra)
// //Mahendra.displayCar()
// Mahendra.displayHome()
// Mahendra.displayMoney()

// let Vaibhav=new Son()
// console.log(Vaibhav.money)
// console.log(Vaibhav.surname)
// console.log(Vaibhav.car)
// console.log(Vaibhav.home)
// Vaibhav.displayCar()
// Vaibhav.displayHome()
// Vaibhav.displayMoney()

//========================================================================================

//Parent having constructor and child dont have constructor
class GrandFather{
    constructor(surname, money){
        this.surname=surname
        this.money=money
    }
    displayMoney(){
        console.log(this.money)
    }
}

class Father{
    home="shreeNiwas"
        displayHome(){
            console.log(`I have my own house name as ${this.home}`)
        } 
}

let Santosh=new Father()