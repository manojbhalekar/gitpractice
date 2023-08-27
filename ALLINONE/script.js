//variables
//arithmetic opertaors
//function 
//types of function
//datatype
// string convert to number  
//comparision operator


// single line comment

/* 

       multiline comment

*/

// let ...variabel 1
let a = 10
console.log(a)// printing statement
a = 20
console.log(20)
// let is keyword a is variable name =value =>to store new information
// let variable we can update with same name of variable 

// const ...2nd variable
const a1 = 100
console.log(a1)
const pi = 3.14
console.log(pi)

//if we update with same variable name  ..prints error
//pi=4  // error
//console.log(pi)
//...................................................
// Arithmetic operators +,-,*,/,%

//addition +
//substraction -
//division /
//multiplication  *
//modulus %

let a2 = 20
let a3 = 30
console.log(a2 + a3)
console.log(a2 - a3)
console.log(a2 * a3)
console.log(a2 / a3)
console.log(a2 % a3)

a4 = 5
a5 = 10
console.log(a4 + a5)
console.log(a4 - a5)
console.log(a4 * a5)
console.log(a4 / a5)
console.log(a4 % a5) // modulus defines in o/p reminder

let p = 10
let q = 5

 console.log(p + q) //15
 console.log(p - q) //5
 console.log(p / q) //2
 console.log(p * q) //50
console.log(p % q) // 0

//     2
// 5 |10
//   |-10
//  ------
//    0


// 10 pairs ....560 lines (dry principle-do not repeat yourself)
// ceo....office boy tea

// function....used to avoid repeatation
function calculator(a6, a7) { //.......blocks   and function is A KEYWORD OR PROPERTY
    console.log(a6 + a7)
    console.log(a6 - a7)// statement
    console.log(a6 * a7)
    console.log(a6 / a7)
}
//calling the function
calculator(8, 4)

// function without parametr and without return type
function addition() {
    console.log(2 + 2)
}
addition()
addition()  // same out put

// function with paarametr and without return type
function sub(a8,a9){
    console.log(a8-a9)
}
sub(8,5)  // differnt diffrent outputs 

// function with parametr and return type
function mult(a11,a12){
    return (a11*a12)
}
mult(2,2)
let a00=mult(2,2)  // we can store  
console.log(a00+a00)
console.log(a00-a00)

//--------
function multiplication(x, y) {
    return x * y
}
let q1 = multiplication(2, 4) /////  store  whatever we return we wants to store it 
console.log(q1)
console.log(q1 + q1)  ///// reuse 
console.log(q1 * 0.10)

// types according to structure
// 1- function declartion
//2. function expression 
// 3. function arrow

// function declartion...........................

function addition(){
    console.log(5+5)
}
addition()
addition()

// function expression...
let sub1=function(a22,a33){
    console.log(a22-a33)
}
sub1(8,5)

// function arrow..........  =>/:  both signs
let add=(a44,a55)=>{
    console.log(a44+a55)
}
add(5,2)
//.............................................................
// data types

// Extrovert || introvert
// loud         calm
//more social   less social
// outing       less outing


// Human
// Property......color,legs,height,weight name hands
// Method......walk(),talk()

// Vehicle
// property......color,regNo,type,modelNo,name
//Method.......start(),stop()

//Bank
// Property....accName,accNo,acctype,ifsc
//Method ....withdrawl(),deposit()

let a11=10
console.log(a11)// 10
console.log(typeof a11)// number 1,-1,0,1.5,-1.5

let a22=true
console.log(a22)
console.log(typeof a22) // true /false..boolean

let a33='Manoj'
console.log(a33)
console.log(typeof a33)// string "A","a123A@","","MAnoj"

//.......................................................
//comparison operator....(8)
//<,>,>=,<=,!=,==,===,!==
console.log(typeof 10) // number
console.log(typeof '10')// string //"",''

// ===,!== type and value
// ==,!= value


console.log(10 === '10')   // false 
console.log(10 !== '10')   // true
console.log(10 == '10')   // true 
console.log(10 != '10')   // false 


console.log(10 === 10)  // true 
console.log(10 !== 10)  // false 
console.log(10 == 10)   // true
console.log(10 != 10)   // false 

console.log(7 > 8) // false 
console.log(7 < 8)  // true 
console.log(7 >= 8) //false 
console.log(7 <= 8) // true

console.log(6 >= 6) // true 
console.log(6 <= 6) // true 

//................................................>

// Logical Operator 

//AND &&
//True && True ========> True
//False && False ======>False 
//True && False ======>False 
//False && True =======>False

// //AND &&   (multiplication)        1*1=1
// //  T&&T=>T                        1*0=0
// //  T&&F=>F                        0*1=0
// //  F&&T=>F                        0*0=0
// //  F&&F=>F

console.log(7 === 7 && 8 !== '8')
console.log(7 > 6 && 8 != '8')
console.log(7 != 7 && 8 != '8')
console.log(6 != 6 && 8 === 8)

//OR  ||
// True || True ===> True
//False || False ====>False 
//True  || False====> True 
// False || True ====> True

// // OR || ( addition)
// // T||T=>T                 1+1=1 // 1=true and 0= false
// // T||F=>T                 1+0=1
// // F||T=>T                 0+1=1
// // F||F=>F                 0+0=0


console.log(4 == 4 || 5 == 5)
console.log(4 != 4 || 5 != 5)
console.log(4 == 4 || 5 != 5)
console.log(4 != 4 || 5 !== '5')


// Not 
// True ....False 
// False ...true 

console.log(!(9 === '9'))
console.log(!(9 === 9))
