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
console.log(stringNumber); //output = 33
 console.log(typeof (stringNumber)) //output = string