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
// Built-in have 5 type
myArray[0] = 1;
myArray[1] = "string";
myArray[2] = null;
myArray[3] = undefined;
myArray[4] = (): void => {};
console.log(myArray);

const myFC1 = (): void => {};
function myFC2(input: any): void {}
// Tuples
let user: [number, string] = [1, 'string']
user.push('wrong') // waring !!!!!!!!!
console.log("user", user)