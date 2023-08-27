//loops
//used-for repetative operations
//for loop -used when duration is known
//while loop -duration is not known


// for loop /while loop /do loop 
// loops are used for repetative operations based on comnditions

// syntax for loop is used for duration known
//for(initioalization;condition check;increment / decrement){
// statements
//}
// if i wants to print 1-5 ,prints required 5 times 
console.log(1)//1
console.log(2)//2
console.log(3)//3
console.log(4)//4
console.log(5)//5

//1-100

// 1-10000==.time waste,effort,memory

// prints 5 times ....hello
for (let i = 1; i <= 5; i++) { // 2/3/4/5/6/
    console.log("Hello")
}  // Hello/Hello/Hello/Hello/Hello

// prints 1-5 forward condition <= //

for (let i = 1; i <= 5; i++) { // 2/3/4/5/6--is false conditin goes out of loop
    console.log(i) // it checks condition //1//2//3//4//5
} // prints 1,2,3,4,5

//  prints 5-1 reverse condition >=//

for (let i = 5; i >= 1; i--) {//4/3/2/1
    console.log(i) //prints //5//4/3/2/1
}

// Table of 2
for (let i = 2; i <= 20; i = i + 2) {// 2/4/6/8/10/12/14/16/18/20/22
    console.log(i)  // prints 2,4,6,8,10,12,14,16,18,20
}

// Table of 3
for (let i = 3; i <= 30; i = i + 3) {
    console.log(i)
}

//......................................................
// FOR LOOP-BREAK STATEMENT// // break is used for to came outside of loop
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i) // it prints 0,1,2 it prints upto 0,1,2
}

for (let i = 5; i >= 1; i--) {
    console.log(i) // it prints 5/4/3 it prints upto if condtion i.s.3
    if (i == 3) {
        break
    }
}

// FOR LOOP --CONTINUE STATEMENT
// is used for to escape particular condition
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i) // it prints escape 3 i.e.1,2,4,5
}

for (let i = 1; i <= 5; i++) {
    console.log(i)
    if (i == 3) {
        continue
    }  // it prints 3 also i.e. 1,2,3,4,5
}

// for loop addition  1-5
// IMP PROBLEM 1-5 addition

let sum=0          //1 3 6 10  15
for(let j =1;j<=5;j++){   //2 3 4 5  6     
    sum=sum+j
}
console.log(sum)// 15 

// //0+1 ==> 1
// //1+2=> 3
// //3+3 => 6
// //6+4 => 10
// //10+5 => 15

//............................................
// WHILE LOOP -used for when duration is not known
//  in while loop initioalization takes place outside the loop
/*sntax:- let
        initioalization (outside)
        while(condition){
            // statements
            // increment/ decrement
        }
*/
//prints hello 5 times
let i = 1
while (i <= 5) {
    console.log("hello") // it prints hello/hello/hello/hello/hello
    i++
}

// prints 1-5
let i1 = 1
while (i1 <= 5) {
    console.log(i1)  // prints 1,2,3,4,5
    i1++
}

//prints 5-1
let i2 = 5
while (i2 >= 1) {
    console.log(i2) // prints 5,4,3,2,1
    i2--
}

// table of 2
let i3 = 2
while (i3 <= 20) {
    console.log(i3) // prints 2,4,6,8,10,12,14,16,18,20
    i3 = i3 + 2
}

// table of 3 reverse
let i4 = 30
while (i4 >= 3) {
    console.log(i4) // prints 30,27,....,6,3
    i4 = i4 - 3
}

// WHILE LOOP -BREAK STATEMENT
let i5 = 5
while (i5 > 1) {
    if (i5 == 3) {
        break
    }
    console.log(i5) // prints 5/4
    i5--
}

let i6 = 5
while (i6 > 1) {
    console.log(i6)   //  it prints including 3,5&4
    if (i6 == 3) {   // change in printing statemnt o/p change
        break
    }
    i6--
}

// WHILE LOOP-CONTINUE STATEMENT
let i7 = 1
while (i7 <= 5) {
    if (i7 == 3) {
        i7++
        continue
    }
    console.log(i7) // prints 1/2/4/5/  escape 3
    i7++
}
