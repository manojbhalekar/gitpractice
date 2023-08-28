 //hiraricha; inheritance


 class Vehical{
    constructor(model,year){
        this.model=model
        this.year=year
    }
    honk(){
        console.log('I m honk method')
    }
}

class Car extends Vehical{
    drive(){
        console.log('this is cars drive method')
    }
}

class Motorcycle extends Vehical{
    wheelie(){
        console.log('this is wheelie method of mothorcycle')
    }
}

class cycle extends Vehical{
    cycling(){
        console.log('this is cycling method')
    }
}

let audi=new Car("Audi",1998)
console.log(audi)
console.log(audi.model)
console.log(audi.year)
audi.honk()
audi.drive()


let splender=new Motorcycle("splender",2000)
console.log(splender)
splender.wheelie()
splender.honk()
console.log(splender.model)
console.log(splender.year)