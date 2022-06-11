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
let user: [number, string] = [1, "string"];
user.push("wrong"); // waring !!!!!!!!!
console.log("user", user);

// Enum member must have initializer
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let mySize = Size.Medium;
console.log(mySize);

const enum Size2 {
  Small = 3,
  Medium = 3,
  Large,
}
let mySize2 = Size2.Large;
console.log(mySize2);

// functions
const myFunc1 = (): void => {};
function myFunc2(input: number, input2 = 2020): number {
  if (input2 <= 2020) return input * 1.1;
  return input * 1;
}

myFunc2(100);
myFunc2(200, 2021);

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");

type Employee = {
  readonly id: number;
  name: string;
  fn: (date: Date) => void;
};

let emp: Employee = {
  id: 1,
  name: "Tum",
  fn: (date: Date) => {
    console.log(date);
  },
};

function kgToLb(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLb(10));
console.log(kgToLb("10kg"));

// Intersection Types ***************
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {
    console.log("..xxxXX");
  },
  resize: () => {
    console.log("..zzzZZ");
  },
};

textBox.drag();
textBox.resize();

// Literal Types ******************
type Quantity = 50 | 100;
let quantity: Quantity = 100;
let quantity1: 10 | 20;
quantity1 = 20;

// Optional Chaining **********
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

interface testType {
  a: number
}

interface testType2 extends testType {
  b: number
}

interface testType3 {
  c: number
}

class Test implements testType2, testType3 {
  c = 4;
  b = 1;
  a = 3;


  setData = () => {
    console.log(this.a)
    this.a = 10
  }

  getData = () => {
    console.log(this.a)
    this.a = 10
  }
}

let a = new Test()
a.setData()
a.getData()