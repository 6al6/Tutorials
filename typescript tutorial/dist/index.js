"use strict";
//Basic types
let id = 5;
let company = "This is a string";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, "hey", 3, 5, 6];
//Tuple
let person = [1, "Brad", true];
//Tuple array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//Union - variable that can hold more than one type
let pid = 22;
pid = 22;
pid = "22";
//Enum - allow us to define a set of named constants, numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: "John",
};
//Type assertion - explicitly telling compiler that we want to treat an entity as a different type
let cid1 = 1;
let cid2 = 1;
//1st way
let customerId1 = cid1;
//2nd way
let customerId2 = cid2;
//Functions
function addNum(x, y) {
    return x + y;
}
//Function without output
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad K.");
const mike = new Person(1, "Mike J.");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.name);
//# sourceMappingURL=index.js.map