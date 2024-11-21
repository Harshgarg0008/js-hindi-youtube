// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj", "ironman"]
const myArray2 = new Array(1, 2, 3, 4)
// console.log(myHeroes[0]);

// Array methods

// myArr.push(6) // push is used to add new element in array
// myArr.push(7) // output = [0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop() // pop is used to remove last element from array
// myArr.unshift(9) // unshift is used to add given argument in starting of the array. output = [9, 1, 2, 3, 4, 5]
// myArr.shift() // output = [0, 1, 2, 3, 4, 5]

// console.log(myArr.includes(9)); // output = false
// console.log(myArr.indexOf(9));  // output = -1
// console.log(myArr);

// const newArr = myArr.join() // join is used to convert all the array into the string.
// console.log(myArr);
// console.log(newArr); // output = 0,1,2,3,4,5
// console.log(typeof newArr); // output = string

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",  myArr);

const myn2 = myArr.splice(1,3) // splice is used to remove the given argumnent. output = [0, 4, 5]
console.log("C ", myArr);
console.log(myn2);