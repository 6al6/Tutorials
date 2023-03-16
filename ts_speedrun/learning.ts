export interface User {
  name: string;
  id: string | number;
  location?: string;
}

const user = {} as User;

// Everyday types - the primitives - string, number, boolean
function greet(a: string, b: number, c: boolean) {}

greet("Hello", 1, true);

//Array of string
function greeting1(a: string[]) {}

greeting1(["Hello World"]);

//Array of number
function greeting2(a: Array<number>) {}

greeting2([1]);

// ANY
function greeting3(a: any) {}

greeting3({
  id: 0,
  name: "John Doe",
});

greeting3("Lol");

greeting3(4);

//Anonymous functions
const names = ["John", "Jane", "Matt"];

names
  .map((name) => {
    return {
      id: 0,
      name,
    };
  })
  .map((user) => {
    user.id;
    user.name;
  });

//Objects

//interface Coords {
//    x:number;
//    y:number;
//}

type Coords = { x: number; y: number };

function getCoords(coords: Coords) {
  return coords.x + coords.y;
}

//Union type - representing value that can be any one of types defined in union
// Primer pri User interface

function handleId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toString;
  }
}

function toArray(x: string | string[]) {
  if (typeof x === "string") {
    return [x];
  } else {
    return x;
  }
}
