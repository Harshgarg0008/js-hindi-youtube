let score = "33" // agr isme 33 ki jagah null hota to output 0 aata or agr 33 ki jagah undefined hota to output NaN aata or agr koi string hoti jaise "harsh" ho number mai convert nhi ho skti to uska output NaN ata //

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN(Not an Number)
// true => 1 ; false >= 0

let isLoggedIn = "harsh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" -=> false
// "harsh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); //output = 33
//  console.log(typeof (stringNumber)) //output = string

//  ************* Operations **************** //
let value = 3
let negValue = -value
// console.log(negValue); // output = -3

// console.log(2+2) // Addition
// console.log(2-2) // Subtraction
// console.log(2*2) // Multiplication
// console.log(2**2) // ** = raise to the power
// console.log(2/2) // Division
// console.log(2%2) // % = reminder

let str1 = "hello"
let str2 = " harsh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // output = 12
// console.log(1 + "2"); // output = 12
// console.log("1" + 2 + 2); // output = 122
// console.log(1 + 2 + "2"); // output = 32 

// console.log(true); // output = true
// console.log(+true); // output = 1
// console.log(+""); // output = 0 

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // output = 101 
