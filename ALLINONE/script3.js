//array// ....ARRAY......// 
// Human
// property-age,weight,height,color,gender
//method-walk() , talk()

// Vehicle 
// property-color,modelno,regno,type
//methods-start(),stop()

// bank
// property- accnumb,accname,acctype,bal
// method-deposit()  withdrawl()

//*** array is an object and every object has property and method****
//method-gym
//action-excercise
//return-health

// let x=10
// console.log(x)

// ....Array....
// index      0      1        2        3   // index always start from 0
let names=["manoj","Ganesh","kiran","mahesh"]
console.log(names[0])  // it prints manoj
console.log(names[1])  // it prints Ganesh
console.log(names.length) // 4//it counts total array elemnts no from 0-onwards


//.if we store names.length value ...in a
let a=names.length
console.log(a) //  it counts total array elements 4
console.log(typeof a)// it prints  number 

//.............................
// program no 1....print every element of array
// index      0  1  2  3  4  5  6  7  8 9 
let numbers =[11,22,33,44,55,66,77,88,99,0]
console.log(numbers[0])//11
console.log(numbers[1])//22
console.log(numbers[3])//44
console.log(numbers.length) // 10 elements

// ARRAY -USING FOR LOOP..........................

for(let i=0;i<numbers.length;i++){
    console.log(i)   // it prints index
    console.log(numbers[i]) // it prints numbers[in block]/elements
}

// NOTE -numbers.length-1...it minus the element

for(let i=0;i<numbers.length-1;i++){
    console.log(i)         // it prints 0 to 8 index
    console.log(numbers[i]) // it prints upto 8 elements
}

let fruits=["apple","banana","grapes","mango"]
for(i=0;i<fruits.length;i++){
    console.log(i)
    console.log(fruits[i])
}

//************************************************************************* */
 
// ARRAY -- USED FOR MORE THAN STORE
// ARRAY IS AN OBJECT
// PROPERTIES / keys AND VALUES
// ARRAY STORES THE VALUE BY INDEX
// INDEX STARTS FROM 0
// LENGTH -1 IS ALWAYS LAST INDEX WHICH ONEIS MINUS index

//****************************************************************************** */
// ***ARRAY TYPES ****
// WE DEFINE ARRAY WE CREATE AN OBJECT 
// PROPERTIES AND METHODS 
// METHODS AND RETURN TYPES

// GYM()
// action -excercise
// return-health

// SLEEP()
// action -go to bed
// return-rest


//let cities=["pune","mumbai","banglore","kolkata","nashik"]
//let k=cities.length
//console.log(cities)

// METHODS...................................
/*1-PUSH() 
action - add to the element .
return -new element of array

2-unshift()
action....add the elemnt at the first
return .... new length of array 

3-pop()
action ....remove the last element
return.....returns the same element

4-shift()
action....removes first element
return ....first element

5-includesof ....only check true or false

6-indexof () if in array prints elements index number
            // if not in array / wrong then prints -1
7-join()

8-map()

9-filter()

10-reduce() accumulator 

11-foreach()

12-find()

13-findex()

14- some-() 

15-every ()






*/
//..................................................
let cities=["pune","mumbai","banglore","kolkata","nashik"]
let a1=cities.length
console.log(cities)

//push()
let q1=cities.push("wardha")
console.log(q1)
console.log(cities)

// unshift()
let q2=cities.unshift("jaipur")
console.log(q2)
console.log(cities)

//shift()
let q3=cities.shift()
console.log(q3)
console.log(cities)

// pop()
let q4=cities.pop()
console.log(q4)
console.log(cities)

// includes()
let q5=cities.includes('mumbai')
console.log(q5)

// join()
let q6=cities.join("-")
console.log(q6)

//indexof()  -1 ..if element not in array 1 for array element
let q7=cities.indexOf('osmanabad')
let q8=cities.indexOf('mumbai')
console.log(q7)//-1
console.log(q8)//1
//************************************************ */
// map 
//program 1
let years=[1989,1990,1991,1992]
let x1=years.map(function(el,index,arr){
    console.log(el,index,arr)
    return 2023-el
})
console.log(x1)

// program 1.1
let a2=[11,22,33,44,55,66]
let a3=a2.map(function(el,index,arr){
    return el+3
})
console.log(a3)

//program 1.2 print table of 3
let m1=[1,2,3,4,5,6,7,8,9,10]
let m2=m1.map(function(el,index,arr){
    return el *3
})
console.log(m2)

// program 1.3 find elements above50
let n1=[33,44,55,33,55,66]
let above50=[]
for(i=0;i<n1.length;i++){
    if(n1[i]>50){
        above50.push(n1[i])
    }
}
console.log(above50)
//.....................................
// filter 

// program 2
let p1=[1,2,3,4,5,6,7,8,9,0]
let p2=p1.filter(function(el,index,arr){
    return el > 5
})
console.log(p2)

// program 2.1 filter elements %2(mod2)and remainder is 0

let num=[44,55,66,33,44,55,66,77,88,100]
let s1=num.filter(function(el){
    return el%2==0
})
console.log(s1)
//...............................................
//sum......
// Program 3
let b1=[11,22,33]
let sum=0
for(let i=0;i<b1.length;i++){
    sum=sum+b1[i]
}
console.log(sum)

// accumulator....acc value is 0
let mn=[11,22,33]
s2=mn.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(s2)

// accumulator value is 5
let nm=[11,22,33]
let s3=nm.reduce(function(acc,el,index,arr){
    return acc+el
},5)
console.log(s3) // 66+5=71

//.........................................................
//forEach() it gives for each elemnt 

let n11=["Manoj","Kiran","Mahesh","Ganesh"]

let n12=n11.forEach(function(el,index,arr){
    console.log("WELCOME+el")
})

//find() "it finds first element" from left to right of []
// progm 1
let n13=n11.find(function(el){
    return el
})
 console.log(n13)

//progm 2
let uu=[22,33,44,22,33,44,55,64]
let ww=uu.find(function(el){
    return el >30
})
console.log(ww)

// findindex()  >30 has index 1 for first element
let uuu=[22,33,44,22,33,44,55,64]
let uuu1=uuu.findIndex(function(el){
    return el >30
})
console.log(uuu1) // prints 1 element

// some() it prints true or false 
let s5=[33,2,66,22,34,66,77]
let s55=s5.some(function(el,index,arr){
    return el>600
})
console.log(s55)  // prints false bcz no any element >600

// every () true or false
let s6=[33,2,66,22,34,66,77]
let s66=s6.every(function(el,index,arr){
    return el >0
})
console.log(s66) // it prints true bcz any element above 0
