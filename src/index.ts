// Static type
let age: number = 20;
if (age < 50) age += 10;
console.log(age);

let number: number[] = [];
number = new Array(10);
number.fill(10, 0, 2);
console.log(number);
console.log(number[4]);

let myArray: any[] = [];
// Built-in have 5 type --->>> number, string, null, undefined, void
myArray[0] = 1;
myArray[1] = "string";
myArray[2] = null;
myArray[3] = undefined;
myArray[4] = (): void => {};
console.log(myArray);
// User-Defined DataType ---> array, Class, Touple, Enums, Interface, Functions
// Tuples
let user: [number, string] = [1, 'string']
user.push('wrong') // waring !!!!!!!!!
console.log("user", user)

// Enum member must have initializer
enum Size { Small = 1, Medium, Large }
let mySize = Size.Medium
console.log(mySize)

const enum Size2 { Small = 3, Medium = 3, Large  }
let mySize2 = Size2.Large
console.log(mySize2)
// functions
const myFunc1 = (): void => {};
function myFunc2(input: number, input2 = 2020): number {
    if(input2 <= 2020)
        return input * 1.1
    return input * 1
}

myFunc2(100)
myFunc2(200, 2021)
