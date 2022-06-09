"use strict";
// Static type
let age = 20;
console.log("age::", age);
if (age < 50)
    age += 10;
console.log(age);
let number = [];
number = new Array(10);
number.fill(10, 0, 2);
console.log(number);
console.log(number[4]);
let myArray = [];
// Built-in have 5 type
myArray[0] = 1;
myArray[1] = "string";
myArray[2] = null;
myArray[3] = undefined;
myArray[4] = () => { };
console.log(myArray);
const myFC1 = () => { };
function myFC2(input) { }
// Tuples
let user = [1, 'string'];
user.push('wrong'); // waring !!!!!!!!!
console.log("user", user);
//# sourceMappingURL=index.js.map