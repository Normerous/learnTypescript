"use strict";
var _a;
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
// Tuples
let user = [1, "string"];
user.push("wrong"); // waring !!!!!!!!!
console.log("user", user);
// Enum member must have initializer
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
let mySize2 = 4 /* Size2.Large */;
console.log(mySize2);
// functions
const myFunc1 = () => { };
function myFunc2(input, input2 = 2020) {
    if (input2 <= 2020)
        return input * 1.1;
    return input * 1;
}
myFunc2(100);
myFunc2(200, 2021);
console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);
console.log("3");
let emp = {
    id: 1,
    name: "Tum",
    fn: (date) => {
        console.log(date);
    },
};
function kgToLb(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLb(10));
console.log(kgToLb("10kg"));
let textBox = {
    drag: () => {
        console.log("..xxxXX");
    },
    resize: () => {
        console.log("..zzzZZ");
    },
};
textBox.drag();
textBox.resize();
let quantity = 100;
let quantity1;
quantity1 = 20;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
class Test {
    constructor() {
        this.c = 4;
        this.b = 1;
        this.a = 3;
        this.setData = () => {
            console.log(this.a);
            this.a = 10;
        };
        this.getData = () => {
            console.log(this.a);
            this.a = 10;
        };
    }
}
let a = new Test();
a.setData();
a.getData();
//# sourceMappingURL=index.js.map