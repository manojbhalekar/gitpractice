// //Polymorphism

// //1. overriding => different class, same method name, same parameter(signature)

// class Shapes {
//     draw() {
//         console.log('I am generic shape')
//     }
// }

// class Square extends Shapes {
//     draw() {
//         console.log('I am square')
//     }
// }

// class Circle extends Shapes{
//     draw(){
//         console.log('I am circle')
//     }
// }

// let s2 = new Square()
// // s2.draw()//I am generic shapes
// s2.draw()

//============================================================

// class Myntra{
//     image(){
//         console.log('Image of different items')
//     }
// }

// class Sandle extends Myntra{
//     image(){
//         super.image()
//         console.log('Image of sandle')
//     }
// }

// class Shoe extends Myntra{
//     image(){
//         super.image()
//         console.log('Image of shoe')
//     }
// }

// let m1=new Myntra()
// m1.image()

// let s1=new Shoe()
// s1.image()

// let s2=new Sandle()
// s2.image()


//====================================================

//2. overloading ==> same class, same method name, different signature

// class Calculator{
//     addition(a,b){
//         console.log(a+b)
//     }

//     addition(a,b,c){
//         console.log(a+b+c)
//     }

//     addition(a,b,c,d){
//         console.log(a+b+c+d)
//     }
// }

// let sum=new Calculator()
// sum.addition(2,3,4,5)//14

// sum.addition(2,3)//5

// sum.addition(5,8,9)

// let c
// console.log(c)


class Calculator {
    addition(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined) {
            console.log(a + b + c + d)
        }
        else if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }
    }
}
let sum = new Calculator()
sum.addition(2, 3)

sum.addition(3,4,5)

sum.addition(12,45,1,2)