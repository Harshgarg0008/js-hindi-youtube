// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Harsh",
    "full name": "Harsh Garg",
    [mySym]: "mykey1",
    age: 18,
    location: "Uttar Pradesh",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // output = harsh@google.com
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]); // output = string

JsUser.email = "harsh@chatgpt.com"
// Object.freeze(JsUser) // freeze is uder to fix the value that cannot be changed.
JsUser.emial = "harsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());