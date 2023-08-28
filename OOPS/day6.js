
// //OOPS

// //inheritance

// //Polymorphism
// //poly => many
// //morphism=> form

// //1 function => diff state => diff behave

// //boy => friend, son, brother, student

// //1. overriding => different class, same method method , same signature(parameter)


//program 1
// class WorldBank{
//     loan(){
//         console.log('I am loan method from worldBank')
//     }
//     save(){
//         console.log('I am save method from worldBank')
//     }
// }
// class SBI extends WorldBank{
//     loan(){
//         console.log('I am loan from SBI')
//     }
//     save(){
//         console.log('I am save method from SBI')
//     }
// }

// class HDFC extends SBI{
//     loan(){
//         console.log('i am loan method from HDFC')
//     }
//     save(){
//         console.log('i am save method from HDFC')
//     }
// }


// let hdfc=new HDFC()
// console.log(hdfc)
// hdfc.loan()
// hdfc.save()


// let sbi=new SBI()
// sbi.loan()
// sbi.save()

// let WB=new WorldBank()
// WB.loan()
// WB.save()

//program 2

class WorldBank{
    loan(){
        console.log('I am loan method from worldBank')
    }
    save(){
        console.log('I am save method from worldBank')
    }
}
class SBI extends WorldBank{
    loan(){
        super.loan()
        console.log('I am loan from SBI')
    }
    save(){
        console.log('I am save method from SBI')
    }
}

class HDFC extends SBI{
    loan(){
        super.loan()
        console.log('i am loan method from HDFC')
    }
    save(){
        console.log('i am save method from HDFC')
    }
}
let hdfc=new HDFC()
hdfc.loan()