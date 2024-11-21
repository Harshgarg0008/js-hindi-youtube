const marvel_heroes = ["Ironman", "thor", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes) // concat is used to merge two arrays properly
// console.log(allHeroes); // output = [ 'Ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat bht sare array ko ek he array mai de deta hai.
console.log(real_another_array);

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));
console.log(Array.from({name: "harsh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));