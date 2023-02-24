//Basic types
var id = 5;
var company = "This is a string";
var isPublished = true;
var x = "Hello";
var age;
var ids = [1, 2, 3, 4, 5];
var arr = [1, "hey", 3, 5, 6];
//Tuple
var person = [1, "Brad", true];
//Tuple array
var employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//Union - variable that can hold more than one type
var pid = 22;
pid = 22;
pid = "22";
//Enum - allow us to define a set of named constants, numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
