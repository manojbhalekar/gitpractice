//guessing game

//1-5 random number

//console.log(Math.floor(Math.random()*5)+1) //0.0-0.99 ==> 0.0-4.95  ==> 0-4  ==> 1-5


//guessing game [works only on browsers]

//system random no==> Math.floor(Math.random()*5)+1  => 4

//user input number ==> 4

//system random no==user input ==> guess correct


//prog 1
// let randomNumber=Math.floor(Math.random()*5)+1
// console.log(randomNumber)
// let userInput=prompt("please enter any number between 1-5")

// if(randomNumber==userInput){
//     console.log('your guess is correct!!!')
// }
// else{
//     console.log('your guess is incorrect')
// }

//program 2

// let randomNumber=Math.floor(Math.random()*5)+1
// console.log(randomNumber)

// let userInput=prompt('please enter any number between 1-5')

// randomNumber==userInput?console.log('Your guess is correct'):console.log('Your guess is incorrect')

//program  3

// let randomNumber=Math.floor(Math.random()*5)+1
// console.log(randomNumber) // it prints any number betwwn 1-5
// console.log(typeof randomNumber)//it prints -number

// let userInput= Number(prompt("Please enter any number between 1-5"))
// console.log(userInput)
// console.log(typeof userInput)// number

// if(randomNumber===userInput){
//     console.log("your guess is correct")
// }
// else{
//     console.log("your guess is incorrect")
// }



// 5 chance ==> for loop

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// for (let i = 0; i <= 5; i++) {
//     let userInput = Number(prompt("Enter any number between 1-5"))
//     if (randomNumber === userInput) {
//         console.log("Your guess is correct!!!!")
//     }
//     else {
//         console.log("Your guess is incorrect!!!!")
//     }

// }


// program with break   whatever prompt generates it breaks after correct guess 
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// for (let i = 0; i <= 5; i++) {
//     let userInput = Number(prompt("Enter any number between 1-5"))
//     if (randomNumber === userInput) {
//         console.log("Your guess is correct!!!!")
//         break;
//     }
//     else {
//         console.log("Your guess is incorrect!!!!")
//     }

// }


//program using while loop
let randomNumber=Math.floor(Math.random()*5)+1
console.log(randomNumber)

let userInput
while(randomNumber!=userInput){
userInput=Number(prompt('enter any number between 1-5'))
if(randomNumber===userInput){
    console.log('your guess is correct')
}
else{
    console.log('your guess is incorrect')
}
}


// let randomNo = Math.floor(Math.random() * 5) + 1  //5
// console.log(randomNo)
// let userInput //undefined 2 3
// while (randomNo != userInput) { 
//     userInput = Number(prompt('enter ant no between 1-5')) 
//     if (randomNo === userInput) {
//         console.log('Guess is correct...')
//         break;
//     } else {
//         console.log('Guess is incorrect..')
//     }
// }


//normal single chance
//5 chance for loop=> for loop break
//infinite while => while with break

//== ===>value check
//===  ====> value and datatype



//console.log(Number('1') )//string  => number
// console.log(1) //number