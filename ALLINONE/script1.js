// conditional statements
//used-multiple outcomes /conditions
//if//if else//if elseif//if else if else//
//ternary operator -used for single condition
//truthy or falsy
//switch cases/ switch operator



//if/if else/if else if/if elseif else

//if syntax

// if(true){    if always follow  true condition 
//statement
//}

//*************************** 
if (100 > 10) {
    console.log('100 is greater')
}

//********************************** */
if (2 == '2') {                    // if,if condition false then then it follows else
    console.log('comapre')
}
else {
    console.log('condition false')
}
//*************************************** */
//if else
if (10 < 2) {
    console.log('greater no')
}
else {
    console.log('smaller no')
}
//************************************** */
// multiple condition check with if
// prog 1 ticket
//1-5====>  10 % discount
//6-10====> 20% discount
//>10=====> 30% discount


//if..else if....1st condition false then check for next condition

let ticketNumber = 10 // if ticketNumber change o/p will change

if (ticketNumber > 0 && ticketNumber <= 5) {
    console.log('you got 10 % discount')
}
if (ticketNumber > 5 && ticketNumber <= 10) {
    console.log('you got 20% discount')
}
if (ticketNumber > 10) {
    console.log('you got 30 % disount') // if block checks all conditions
}

// prog 2
if (ticketNumber > 0 && ticketNumber <= 5) {
    console.log('you got 10 % discount')
}
else if (ticketNumber > 5 && ticketNumber <= 10) {
    console.log('you got 20% discount')
}
else if (ticketNumber > 10) {
    console.log('you got 30 % disount')
}

// program 
let marks=5
if(marks>80){
    console.log('Grade A')
}
else if(marks>60){
    console.log('Grade B')
}
else if(marks>40){
    console.log('Grade C')
}
else{
    console.log('Fail')
}

//==================================================================
//truthy value===>1,'a','manoj',[],{},true," "
// falsy value ===> 0,null,undefined,NaN,false,8!=8

if(1){
    console.log('hey')//  // true prints if condition
}
else{
    console.log('good bye')
}

if(NaN){
    console.log('hey')//  // false prints if conditio
}
else{
    console.log('goode bye')
}

//===============================================
// ternary operator  used for single condition 
let a=10
let b=50
if(a>b){
    console.log('a is greater number')
}
else{
    console.log('b is greater')
}

//syntax
//condition ? true:false

a>b ? console.log('a is greater number'):console.log('b is greater number')

let age =10
let result=age>18?"can drive":"cannot drive"
console.log(result)

a==a1?console.log('boyh are equal'):console.log('not equal')
//==========================================================================
//SWITCH CASE single input ....used for multiple outcomes 
// switch case without break
let day = 1
switch (day) {
    case 1:
        console.log('Monday')
    case 2:
        console.log('Tuesday')
    case 3:
        console.log('Wednesday')
    case 4:
        console.log('Thursday')
    case 5:
        console.log('Friday')
    case 6:
        console.log('Saturday')
    case 7:
        console.log('Sunday')


}

// switch case with break
let month = 'january'
switch (month) {
    case 'february':
        console.log('Days 28')
        break
    case 'january':
        console.log('Days 30')
        break
    case 'march':
    case 'april':
        console.log('Days 31')
    default:
        console.log('invalid')
}

let country = 'france'
switch (country) {
    case 'spain':
    case 'france':
    case 'italay':
        console.log('this country is in europe')
        break
    case 'united state':
    default:
        console.log('this country is not in europe')
}

// program =1
let city = "indore" /// whatever we gives let=indore so ouput prints from indore to default 
switch (city) {         // neglating case pune
    case 'pune':
        console.log('MH')
    case 'indore':
        console.log('MP')
    case 'jaipur':
        console.log('RJ')
    case 'kanpur':
        console.log('UP')
    default:
        console.log('in correct city name')
}

// ...program =2..............
// switch case with break  
let citya = "jaipur"// in this program breaks all data and prints  
switch (citya) {   // only whatever we gives letcitya ="jaipur"
    case 'pune':  // if we change let = then o/p change
        console.log('MH')
        break
    case 'indore':
        console.log('MP')
        break
    case 'jaipur':
        console.log('RJ')
        break
    case 'kanpur':
        console.log('UP')
        break
    default:
        console.log('in correct citya name ')
}

// ..program 3............

let cityb = "dsad" //  enter each city name check o/p
switch (cityb) {
    case 'pune':
    case 'nagpur':
        console.log('MH')
        break
    case 'jaipur':
    case 'udaipur':
        console.log('Rj')
        break
    case 'kanpur':
    case 'varanasi':
        console.log('UP')
        break
    default:
        console.log('in correct cityb name')

}