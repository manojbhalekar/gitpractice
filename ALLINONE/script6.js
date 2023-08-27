// MATHS
// math.floor(decimalNo)====>small value(integer)
console.log(Math.floor(12.45))//12
console.log(Math.floor(46.12))//46
console.log(Math.floor(89.2)) //89
console.log(Math.floor(-34.78))//-35 is less than -34.78
console.log(Math.floor(-4.5))//-5

// .........<==small............... .0......large=>
// -35 -34.78 -34 -13.67 -13 -3 -2 -1 0 1 2  3  4  5  6  7  8  9  

// 2- Math.ceil(decimalNo)==>large value (integer)
console.log(Math.ceil(13.67)) // 14
console.log(Math.ceil(45.10))// 46
console.log(Math.ceil(-13.67))//-13

// 3 Math.round(decimalNo)
console.log(Math.round(67.5))// 68 bcz 0.5/above
console.log(Math.round(7.23))// 7 bcz less than 0.5
console.log(Math.round(37.8))// 38

// 4 Math random() // randomly numbers betwwn range 0.0-0.99
console.log(Math.random())// 0.0-0.99

// 1-6 random number
console.log(Math.random()*6)//0.0-5.9
console.log(Math.floor(Math.random()*6)+1)//1-6
