// OBJECT STRUCTURING & DESTRUCTURING

// various object and datatypes in javascript
//Array
//String
//Object
//Map
//Set
//Number
//Undefined let a
//null
//NAN  undefined +undefined
//class
//             0       1       2         3
let fruits=["apple","mango","banana","grapes"]
console.log(fruits)//[ 'apple', 'mango', 'banana', 'grapes' ]
// if we wants print each element in array seprately 
let a=fruits[0]
let b=fruits[1]
let c=fruits[2]
let d=fruits[3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//1. array
// let fruits = ["apple", "mango", "banana", "grapes"]

// let [p1,p2,p3,p4] = fruits
// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)


// let rollNo=[23,45,78,90,11]
// let [y1,y2,y3,y4,y5]=rollNo

//2. nested array
//                  0   1   2     0   1   2    0    1   2
// let numbers = [[11, 22, 33], [56, 89, 34], [99, 40, 37]]
// //              0                  1            2   
// // console.log(numbers[1][1])//89
// // numbers[2][2]//37
// // numbers[0][0]//11
// // number[0][1]//22

// let [[w1,w2,w3],[p1,p2,p3],[s1,s2,s3]]=numbers
// console.log(p3)//34
// console.log(p1)//56
// console.log(w1)//11


//3. Object

// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     rollNumber: 67
// }
// // let {firstName,lastName,rollNumber}=person
// // console.log(firstName)
// // console.log(lastName)
// // console.log(rollNumber)


// // let {lastName}=person
// // console.log(lastName)

//alising the keys ----imp

// let {firstName:fn,lastName:ln,rollNumber:rn}=person
// console.log(fn)

//4. nested object

// let human = {
//     fullName: "Mayuri Katwe",
//     skill: "Java",
//     family: {
//         father: "Mahendra",
//         brother: "Vaibhav"
//     }
// }

// // let {fullName,skills,family:{father,brother}}=human
// // console.log(fullName)
// // console.log(brother)


// let {family:{father:fh}}=human
// console.log(fh)

//5. object inside array

let student=[
    {
        firstName:"Vaibhav",
        rollNumber:23
    },
    {
        firstName:"Sham",
        rollNumber:34
    },
    {
        firstName:"Ram",
        rollNumber:40
    },
    {
        firstName:"Dinga",
        rollNumber:90
    },
   
]

let [{},{},{firstName:f3,rollNumber:rL},{}]=student
console.log(f3)



let Person={
    firstName:"Mayuri",
    family:{
        father:"Mahendra",
        mother :"Jaya",
        sister:[
           {
            name1:"kaveri",
            age:12
           },
           {
            name1:"reshma",
            age:20
           },
           {
            name1:"shubhangi",
            age:32,
            skills:["html","css","javascript"],
            employeeDetails:{
                empId:2222,
                salary:45000
            }
           }
        ]
    }
}

let {family:{sister:[{},{},{skills:[r1,r2,r3],employeeDetails:{salary}}]}}=Person
console.log(r3)
console.log(salary)
