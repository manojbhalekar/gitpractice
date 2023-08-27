// ARRAY
// ARRAY -- USED FOR MORE THAN STORE
// disadvantages=>

// Human
// property-age,weight,height,color,gender
// method-walk() , talk()

// Vehicle 
// property-color,modelno,regno,type
// methods-start(),stop()

// Bank
// property- accnumb,accname,acctype,bal
// method-deposit()  withdrawl()

//*** array is an object and every object has property and method****
// ARRAY -- USED FOR MORE THAN STORE and array "values are comma seprated"
// ARRAY IS AN OBJECT
// PROPERTIES / keys AND VALUES
// ARRAY STORES THE VALUE BY INDEX
// INDEX STARTS FROM 0
// LENGTH -1 IS ALWAYS LAST INDEX WHICH ONEIS MINUS index

//****************************************************************************** */
// ***ARRAY TYPES ****
// WE DEFINE ARRAY WE CREATE AN OBJECT 
// PROPERTIES AND METHODS 
// properties ". and then property name" ex .length
// methods  ".method name()"" ex .foreach() .push()
// METHODS AND RETURN TYPES

// GYM()
// action -excercise
// return-health

// SLEEP()
// action -go to bed
// return-rest

let student = ["manoj", "kiran", "mahesh", "prasad"] // name of arry is student
//index             0      1        2        3 
//length           1       2       3        4
console.log(student[0])//"manoj"
console.log(student[3])//"prasad"

/*array stores the value by index and elements prints by
'index'
so the printing statement--
 "arrayName[index]"
 it prints elemnts
 */

// print last element
console.log(student[student.length - 1])//it always returns last element // prasad
//length counts totao elements present in array
console.log(student.length)//4  /length => property => total element present in array

//also we can store in a variable
let a = student.length
console.log(a)//4
console.log(typeof a)// it prints data type// number

// array ===using for loop
// prog 1
for (let i = 0; i < student.length - 1; i++) {
    console.log(i) // it prints 0,1,2 indexes
    console.log(student[i])//manoj,kiran,mahesh
}

//prog 2
//            0        1        2       3 
let fruits = ["apple", "banana", "grapes", "mango"]
for (i = 0; i < fruits.length; i++) {
    console.log(i)// it prints 0,1,2,3 indexes
    console.log(fruits[i])// it prints apple banana grapes mango
}

//=============================================================
// array methods
/*
1-push(element)
Action--->add the elemnt at the last
Return-->New length of Array

2.unshift(element)
Action--->add the element at the first
Return-->New length of Array

3.pop(no need of pasing element bcz it remove) pop()
Action--->Remove the elemnt from  last
Return-->Removed Element

4.shift()
Action--->Remove the elemnt from  First
Return-->Removed Element

5.indexof()
//give the index of given element if found and if not found -1
//return -number

6.includes(element)
//check whether element present in array or not if present true,if not false
//return=>data type boolean

7.flat()
//convert all array elements into single array 
//return-new array

8.join()
//action=>join the element
//return=>data type- string

9.reverse()
it reverse order prints the array elements

10.map()
we can do every arithetic operation with this method
using callback function-@param callbackfn —
 A function that accepts up to three arguments.
 The map method calls the callbackfn function one time for each element in the array

11.filter()
filter the array elements
Returns the elements of an array that meet the condition specified in a callback function.

@param predicate — A function that accepts up to three arguments. 
The filter method calls the predicate function one time for each element in the array

12.reduce() accumulator

Calls the specified callback function for all the elements in an array.
 The return value of the callback function is the accumulated result,
  and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments.
 The reduce method calls the callbackfn function one time for each element in the array

 initialValue —
  If initialValue is specified, it is used as the initial value to start the accumulation. 
 The first call to the callbackfn function provides this value as an argument instead of an array value.

13.foreach()

Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. 
forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. 
If thisArg is omitted, undefined is used as the this value.

14.find()
Returns the value of the first element in the array where predicate is true, and undefined otherwise.

@param predicate
find calls predicate once for each element of the array, in ascending order, 
until it finds one where predicate returns true.
If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

@param thisArg
If provided, it will be used as the this value for each invocation of predicate. 
If it is not provided, undefined is used instead.

15.findindex()
Returns the index of the first element in the array where predicate is true, and -1 otherwise.

@param predicate
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. 
If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

@param thisArg
If provided, it will be used as the this value for each invocation of predicate. 
If it is not provided, undefined is used instead

16.some()

Determines whether the specified callback function returns true for any element of an array.

@param predicate
A function that accepts up to three arguments. 
The some method calls the predicate function for each element in the array until the predicate returns
 a value which is coercible to the Boolean value true, or until the end of the array.

@param thisArg
An object to which the this keyword can refer in the predicate function. 
If thisArg is omitted, undefined is used as the this value.

17.every()
Determines whether all the members of an array satisfy the specified test.

@param predicate
A function that accepts up to three arguments. 
The every method calls the predicate function for each element in the array until the predicate returns
 a value which is coercible to the Boolean value false, or until the end of the array.

@param thisArg
An object to which the this keyword can refer in the predicate function. 
If thisArg is omitted, undefined is used as the this value.

18.slice()

Returns a copy of a section of an array. For both start and end, 
a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array.
 If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. 
This is exclusive of the element at the index 'end'. 
If end is undefined, then the slice extends to the end of the array.

19.splice()
Removes elements from an array and, if necessary, 
inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted.

20.fill()

Changes all array elements from start to end index to a static value and returns the modified array

@param value — value to fill array section with

@param start
index to start filling the array at. 
If start is negative, it is treated as length+start where length is the length of the array.

@param end
index to stop filling the array at. 
If end is negative, it is treated as length+end

21.concat()

Combines two or more arrays. 
This method returns a new array without modifying any existing arrays.

@param items — Additional arrays and/or items to add to the end of the array.

22.at() any elemnt prints

*/
//===========================================================
let rollNo = [22, 44, 77, 89, 12, 34]

// push()
let m = rollNo.push(10)
console.log(m)// 7 total number of array elements
console.log(rollNo)//[22, 44, 77, 89, 12, 34,10]

//unshift()
let m1 = rollNo.unshift(200)
console.log(m1)//8 total number of array elements
console.log(rollNo)//[200,22, 44, 77, 89, 12, 34,10]

// pop()
let m2 = rollNo.pop()
console.log(m2)// removed elemnt 10
console.log(rollNo)//[200,22, 44, 77, 89, 12, 34]

//shift()
let m3 = rollNo.shift()
console.log(m3)//200
console.log(rollNo)//[ 22, 44, 77, 89, 12, 34 ]

// indexOf()
let m4 = rollNo.indexOf(77)
console.log(m4)//2

let m5 = rollNo.indexOf(100)
console.log(m5)// -1 element not found

// includes(element)
let m6 = rollNo.includes(89)
console.log(m6)//true

let m7 = rollNo.includes(9000)
console.log(m7)// false -element not present

//join()
let m8 = rollNo.join('@')
console.log(m8)// 22@44@77@89@12@34
console.log(typeof m8)//string

//reverse()
// let m9=rollNo.reverse()
// console.log(m9)//[ 34, 12, 89, 77, 44, 22 ]
// console.log(typeof m9)//object

// map 
// prog-1 minus -2 from each element
let mm1 = rollNo.map(function (element, index, array) {
    return element - 2
})
console.log(mm1)//[ 20, 42, 75, 87, 10, 32 ]

// prog 2==add +5 in each elemnt
let mm2 = rollNo.map(function (el, ind, array) {
    return el + 5
})
console.log(mm2)//[ 27, 49, 82, 94, 17, 39 ]

// prog 3-prints table of 3
let mm3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let mm4 = mm3.map(function (el, index, arr) {
    return el * 3
})
console.log(mm4)//[3,6,9,12,15,18,21,24,27,30]

//prog4-find elements above40
let r1 = [33, 44, 55, 33, 55, 66]
let above40 = []//[ 44, 55, 55, 66 ]
for (let i = 0; i < r1.length; i++) {
    if (r1[i] > 40) {
        above40.push(r1[i])
    }
}
console.log(above40)//[ 44, 55, 55, 66 ]

// prog5-find ages 
let years = [1989, 1990, 1991, 1992]
let y1 = years.map(function (el, index, array) {
    console.log(el, index, array)//
    /*1989 0 [ 1989, 1990, 1991, 1992 ]
    1990 1 [ 1989, 1990, 1991, 1992 ]
    1991 2 [ 1989, 1990, 1991, 1992 ]
    1992 3 [ 1989, 1990, 1991, 1992 ]*/
    return 2023 - el
})
console.log(y1)//[ 34, 33, 32, 31 ]

//prog-- remove jaya and sham.........................

let students = ["mayuri", "jaya", "ram", "sham"]
let aa = []
for (let i = 0; i < students.length; i++) {
    //console.log(students[i])
    if (students[i].length == 4) {
        //  console.log(students[i])
        aa.push(students[i])
    }
}
console.log(aa)//[ 'jaya', 'sham' ]

// filter()

// prog1--filter elements >5

let f1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let f2 = f1.filter(function (el, index, array) {
    return el > 5
})
console.log(f2)//[ 6, 7, 8, 9 ]


///prog-2 remove jaya and sham by using filter

let res = students.filter(function (ele, index, array) {
    return ele.length == 4
})
console.log(res)//[ 'jaya', 'sham' ]


//prog-- 3 sum of all elements.
let markss = [2, 3, 4, 5]
let sum = 0
for (let i = 0; i < markss.length; i++) {
    sum = sum + markss[i]
}
console.log(sum)//14


// prog4--filter elements %2(mod2)and remainder is 0

let num = [44, 55, 66, 33, 44, 55, 66, 77, 88, 100]
let s1 = num.filter(function (el) {
    return el % 2 == 0
})
console.log(s1)//[ 44, 66, 44, 66, 88, 100 ]

// reduce()
//accumulator ..acc value is ..0
let mn=[11,22,33]
let q1=mn.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(q1)//66

// accumulator value is ..5
let mm=[11,22,33]
let s2=mn.reduce(function(acc,el,index,arr){
    return acc+el
},5)
console.log(s2)//71 (66+5acc)

// foreach()
// prog 1
let nn1=["manoj","kiran","mahesh","Ganesh"]
let q2=nn1.forEach(function(el,index,array){
    console.log("WELCOME+el")
})
/*WELCOME+el
WELCOME+el
WELCOME+el
WELCOME+el*/
// prog 2
let studentss = ["amol", "prasad", "abhishek", "kiran"]

for (let i = 0; i < studentss.length; i++) {
    console.log("welcome" + " " + studentss[i])
}

studentss.forEach(function (el, index, arr) {
    console.log("welcome" + "_" + el)
})
/*welcome_amol
welcome_prasad
welcome_abhishek
welcome_kiran*/

//find() "it finds first element" from left to right of []
// prog-1
let n13=studentss.find(function(el){
    return el
})
 console.log(n13)//amol

 //progm 2
let uu=[22,33,44,22,33,44,55,64]
let ww=uu.find(function(el){
    return el >30
})
console.log(ww)//33

// prog-3
let uu1=[22,33,44,22,33,44,55,64]
let ww1=uu1.find(function(el){
    return el >600
})
console.log(ww1)// undefined

//findIndex() 

let rolllno = [2, 34, 54, 67, 88, 34]
//             0   1   2   3   4   5 
let resultb = rollNo.findIndex(function (el, index, arr) {
    return el > 50
})
console.log(resultb)//2 it finds index from left to right which one is 1st

//some() if element present true else false
let number = [2, 3, 4, 5, 6, 7, 8]
let s11 = number.some(function (el, index, arr) {
    return el > 600
})
console.log(s11)//false // prints false bcz no any element >600

//every()
let num1 = [2, 3, 4, 5, 6, 7]
let e1 = num1.every(function (el, index, array) {
    return el > 200
})
console.log(num1)//[ 2, 3, 4, 5, 6, 7 ] >0 & >200 also prints every elemnt []


//slice()
//         -8 -7 -6 -5 -4 -3 -2 -1
let mark1=[34,12,22,55,89,90,56,44]
//          0  1 2   3  4  5  6  7 
//arrayname.slice(startposition,endposition)
//endposition optional
//end position always less than 1 (1,6)
//from left===>Right in minus and positive sign also

let k1=mark1.slice(-6,-2)
console.log(k1)//[ 22, 55, 89, 90 ]

let k2=mark1.slice(1,5)
console.log(k2)//[ 12, 22, 55, 89 ]

let k3=mark1.slice(4)
console.log(k3)//[ 89, 90, 56, 44 ]

let k4=mark1.slice(5,2)
console.log(k4)////blank array[] not work right->left

let k5=mark1.slice(1,-3)
console.log(k5)//[ 12, 22, 55, 89 ]

let k6=mark1.slice(-2,-7)
console.log(k6)//blank array []

let k7=mark1.slice(-1)
console.log(k7)//[ 44 ]

let k8=mark1.slice(1,-1)
console.log(k8)//[12,22,55,89,90,56]

// splice()

//         -8 -7 -6 -5 -4 -3 -2 -1
let mark2=[34,12,22,55,89,90,56,44]
//          0  1  2  3  4  5  6  7 
//arrayName.splice(startposition,no of element removed,replace1,replace2)

// let l1=mark2.splice(2,4,100,200,300)
// console.log(l1)//[ 22, 55, 89, 90 ]
// console.log(mark2)//[34, 12, 100, 200,300, 56, 44 ] removed el and replaced
    
// let l2=mark2.splice(3)
// console.log(l2)//[ 55, 89, 90, 56, 44 ]
// console.log(mark2)//[ 34, 12, 22 ]

 let l3=mark2.splice(-6)
 console.log(l3)//[ 22, 55, 89, 90, 56, 44 ]
console.log(mark2)//[ 34, 12 ]


// fill()
//         -8 -7 -6 -5 -4 -3 -2 -1
let mark3=[34,12,22,55,89,90,56,44]
//          0 1  2   3  4  5  6  7 

//arrayname.fill(element which need to fill,startposition,endposition)

let a1=mark3.fill("manoj",3,7)
console.log(a1)//[34,12,22,"manoj","manoj","manoj","manoj",44]
console.log(mark3)//[34,12,22,"manoj","manoj","manoj","manoj",44]

let y5=mark3.fill(100,4)
console.log(y5)//[ 34, 12, 22, 55, 100, 100, 100, 100 ]

let y6=mark3.fill(500)
console.log(y6)//[500,500,500,500,500,500,500,500]


//21.concat()
let A=[2,3,4]
let b=[10,20,30]
let c=[200,300,400]

let arr1=A.concat(b)
console.log(arr1)//[ 2, 3, 4, 10, 20, 30 ]

let arr2=b.concat(A)
console.log(arr2)//[ 10, 20, 30, 2, 3, 4 ]

let arr3=A.concat(b).concat(c)
console.log(arr3)//[2,3,4, 10, 20,30, 200, 300, 400]

//22.at() any element
let mark4=[34,12,22,55,89,90,56,44]
//          0  1  2  3  4  5  6  7 
let u=mark4.at(3)
console.log(u)//55

let u1u1=mark4.at(5)
console.log(u1u1)//90