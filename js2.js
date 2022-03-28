// 1. Define a variable
  // var MAX_SIZE = 25 * 1024 * 1024;
  // var title = 'Hello World';
  // title = 'Hello ES6'
  // - Question: Let and Const – What's the Difference?

function ex1() {
  console.log("----- excercise 1 -----");
  let MAX_SIZE = 25 * 1024 * 1024;
  let title = 'Hello World';
  title = 'Hello ES6';

  let string = "let: allows assigning the variable's value, const: does NOT allow assigning the variable's value";
  console.log(string);
}
ex1();

// 2. String Interpolation
//   var user = { name: 'David' };
//   var card = { amount: 7, product: "Bar", unitprice: 42 };
//   var message = "Hello " + user.name + ",\n" +
//   "want to buy " + card.amount + " " + card.product + " for\n" +
//   "a total of " + (card.amount * card.unitprice) + " bucks?";

function ex2() {
  console.log("----- excercise 2 -----");
  let user = { name: 'David' };
  let card = { amount: 7, product: "Bar", unitprice: 42 };
  let message = `  Hello ${user.name}
  want to buy ${card.amount} ${card.product} for
  a total of (${card.amount * card.unitprice}) bucks?`;
  console.log(message);
}
ex2();

// 3. Rest Parameter
//   function foo(x, y) {
//       var a = Array.prototype.slice.call(arguments, 2);
//       return (x + y) * a.length;
//   };
//   foo(1, 2, 'hello', true, 7) === 9;

function foo(x, y, ...a) {
  console.log("----- excercise 3 -----");
  return (x + y) * a.length;
}

console.log("foo func: ", foo(1, 2, 'hello', true, 7) === 9);

// 4. Default Parameter Values
//   function sum(x, y, z) {
//     if (y === undefined) {
//       y = 7;
//     }
//     if (z === undefined) {
//       z = 42;
//     }
//     return x + y + z;
//   };

function sum(x, y = 7, z = 42) {
  console.log("----- excercise 4 -----");
  return x + y + z;
};
console.log("foo func: ", sum(1));

// 5. Arrow Functions
// var evens = [1, 2, 3, 4, 5, 6];
// var odds  = evens.map(function (v) { return v + 1; });
// var pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
// var nums  = evens.map(function (v, i) { return v + i; });
// var fives = [];
// nums.forEach(function (v) {
//   if (v % 5 === 0) {
//     fives.push(v);
//   }
// });
function ex5() {
  console.log("----- excercise 5 -----");
  let evens = [1, 2, 3, 4, 5, 6];
  let odds  = evens.map(v =>  v + 1);
  let pairs = evens.map(v => ({ even: v, odd: v + 1 }));
  let nums  = evens.map((v, i) =>  v + i);
  let fives = [];
  console.log("evens:", evens);
  console.log("evens.map(v =>  v + 1)", odds);
  console.log("evens.map(v => ({ even: v, odd: v + 1 })", pairs);
  console.log("evens.map((v, i) =>  v + i)", nums);
  nums.forEach(v => {
    if (v % 5 === 0) fives.push(v);
  })
  console.log("nums.forEach if (v % 5 === 0) fives.push(v);", fives);
}
ex5();

// 6. Classes
//   var Shape = function(id, x, y) {
//     this.id = id;
//     this.move(x, y);
//   };
//   Shape.prototype.move = function(x, y) {
//     this.x = x;
//     this.y = y;
//   };

function ex6() {
  console.log("----- excercise 6 -----");
  class Shape {
    constructor(id, x, y) {
      this.id = id;
      this.move(x, y);
    }
    move(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  let shape = new Shape(1, 2, 3);
  console.log("shape", shape);
  console.log("move", shape.move());
}
ex6();

// 7. Modules
//  lib/utils.js
// Utils = {};
// Utils.sum = function(x, y) { return x + y };
// Utils.pi = 3.141593;
// ​
// //  someApp.js
// var math = Utils;
// console.log("2π = " + math.sum(math.pi, math.pi));
// ​
// //  otherApp.js
// var sum = Utils.sum, pi = Utils.pi;
// console.log('2π = ' + sum(pi, pi));
function ex7() {
  // console.log("----- excercise 7 -----")
  // lib/utils.js
  // export function sum(x, y) { return x + y }
  // export var pi = 3.141593

  // //  someApp.js
  // import * as math from "lib/math"
  // console.log("2π = " + math.sum(math.pi, math.pi));

  // //  otherApp.js
  // import { sum, pi } from "lib/math"
  // console.log("2π = " + sum(pi, pi));
}

// 8. Promise
//   function showMessAfterTimeout(msg, who, timeout, onDone) {
//     setTimeout(function () {
//       onDone(msg + ' Hi ' + who + '!');
//     }, timeout);
//   }
//   showMessAfterTimeout('', 'Foo', 100, function(msg) {
//     showMessAfterTimeout(msg, 'Bar', 200, function(msg) {
//       console.log('Finish after 300ms:' + msg);
//     });
//   });
function showMessAfterTimeout(msg, who, timeout, onDone) {
  console.log("----- excercise 8 -----");
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
  })
}
showMessAfterTimeout("", "Foo", 100).then((msg) =>
  showMessAfterTimeout(msg, "Bar", 200)
).then((msg) => {
  console.log(`done after 300ms:${msg}`);
})

// 9. Loops
// - Give an example for each method: 
//   + for…of
//   + findIndex()

function ex9() {
  console.log("----- excercise 9 -----");
  for (let n of [ 1, 3, 4, 2 ]) {
    console.log(n);
  }
  let a = [ 1, 3, 4, 2 ].find(x => x > 3);
  let b = [ 1, 3, 4, 2 ].findIndex(x => x > 3);
  console.log("find", a);
  console.log("findIndex", b);
}
ex9();
