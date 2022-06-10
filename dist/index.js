"use strict";
// Static type
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let number = [];
number = new Array(10);
number.fill(10, 0, 2);
console.log(number);
console.log(number[4]);
let myArray = [];
// Built-in have 5 type --->>> number, string, null, undefined, void
myArray[0] = 1;
myArray[1] = "string";
myArray[2] = null;
myArray[3] = undefined;
myArray[4] = () => { };
console.log(myArray);
// User-Defined DataType ---> array, Class, Touple, Enums, Interface, Functions
const myFC1 = () => { };
function myFC2(input) { }
// Tuples
let user = [1, 'string'];
user.push('wrong'); // waring !!!!!!!!!
console.log("user", user);
// Enum member must have initializer
var Size;
(function (Size) {
    console.log('size', Size)
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
console.log(Size)
let mySize = Size.Medium;
console.log(mySize);
let mySize2 = 4 /* Size2.Large */;
console.log(mySize2);
//# sourceMappingURL=index.js.map