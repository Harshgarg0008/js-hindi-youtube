// Primitive

// 7 types : String, Boolean, Number, Null, Undefined, Symbol, BigInt

const score = 100 // number
const scoreNumber = 100.3 // number
const LoggedIn = false // boolean
const outsideTemp = null // null
let userEmial; // Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // output = false

// const bigInt = 3456456662936962653n //bigint

// Reference(Non Primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]; // array
let myObj = {
    name : "harsh",
    age : 18,
} // object

const myFunction = function(){
    console.log("Hello world");
} // function

console.log(typeof outsideTemp); // output = object
console.log(typeof myFunction); // output = function
console.log(typeof heroes); // output = object
console.log(typeof anotherId); // output = symbol
console.log(typeof scoreNumber); // output = number
console.log(typeof LoggedIn); // output = boolean
