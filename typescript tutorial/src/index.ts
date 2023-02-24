//Basic types
let id: number = 5;
let company: string = "This is a string";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, "hey", 3, 5, 6];

//Tuple
let person: [number, string, boolean] = [1, "Brad", true];

//Tuple array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

//Union - variable that can hold more than one type
let pid: string | number = 22;

pid = 22;
pid = "22";

//Enum - allow us to define a set of named constants, numeric or string
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Left);

//Objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

//Type assertion - explicitly telling compiler that we want to treat an entity as a different type

let cid1: any = 1;
let cid2: any = 1;

//1st way
let customerId1 = <number>cid1;

//2nd way
let customerId2 = cid2 as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}

//Function without output
function log(message: string | number): void {
  console.log(message);
}

//Interfaces - custom type or specific structure to an object
//Better to use interface over type when describiing objects
// Cant use interface with primitives or unions
//age?:number --> optional
//readonly ---> read only propery

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

//Interfaces with functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad K.");
const mike = new Person(1, "Mike J.");

//Subclass

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

console.log(emp.register());

//Generics - used to build reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);

numArray.push(5);
strArray.push("gal");
