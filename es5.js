// Null: 
// Null means an empty or non-existent value. Null is assigned, and explicitly means nothing.
var nullValue = null;
console.log(nullValue);
// null

// Undefined:
// Undefined means a variable has been declared, but the value of that variable has not yet been defined. For example:
var undefinedValue;
console.log(undefinedValue);
// undefined

// Summarize
// null is an assigned value. It means nothing.
// undefined means a variable has been declared but not defined yet.
// null is an object. undefined is of type undefined.
// null !== undefined but null == undefined.

// The use strict literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake. For example, the following program will throw an error:
function doSomething(val) {
  "use strict"; 
  x = val + 10;
}
// It will throw an error because x was not defined and it is being set to some value in the global scope, which isn't allowed with use strict The small change below fixes the error being thrown:
function doSomething(val) {
  "use strict"; 
  var x = val + 10;
}

// == is the abstract equality operator while === is the strict equality operator.
// The == operator will compare for equality after doing any necessary type conversions. 
// The === operator will not do type conversion, so if two values are not the same type === will simply return false.
1 == '1'; // true
1 == [1]; // true
1 == true; // true
0 == ''; // true
0 == '0'; // true
0 == false; // true

// There are only six falsey values in JavaScript: 
// undefined, null, NaN, 0, "" (empty string), and false of course.


var array = [1, 4, 9, 16];
console.log("Array: ", array);

// Map(): 
// The map() method creates "a new array"
// populated with the results of calling a provided function on every element in the calling array.
console.log("Map with number * 2: ", array.map(x => x * 2));
// expected output: Array [2, 8, 18, 32]

// Filter():
// The filter() method creates "a new array"
//  with all elements that pass the test implemented by the provided function.
console.log("Filter number > 6: ", array.filter(number => number > 6));
// expected output: Array [9, 16]


// Reduce():
// The reduce() method executes a reducer function on each element of the array
//  and returns a single output value.
var sumWithInitial = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
console.log("Reduce array: ", sumWithInitial);
// expected output: 30

// find():
// The find() method returns the first element in the provided array
// that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
console.log("Find number > 6: ", array.find(number => number > 6));
// expected output: 9

// Some():
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
// It doesn't modify the array.

console.log("Some number % 2: ", array.some(number => number % 2 === 0));
console.log("Some number % 14: ", array.some(number => number % 14 === 0));
// expected output: true


const arrayString = ['pigs', 'goats', 'sheep'];
console.log("Array", arrayString);

// Push():
// The push() method adds one or more elements to the "end" of an array
// and returns the new length of the array.
var push = arrayString.push('cows');
console.log("Push() item 'cows': ", arrayString);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

// Unshift():
// The unshift() method adds one or more elements to the "beginning" of an array
// and returns the new length of the array.
var unshift = arrayString.unshift('cat')
console.log("Unshift() item 'cat': ", arrayString);
// expected output: Array ['cat', 'pigs', 'goats', 'sheep', 'cows']

// Pop():
// The pop() method removes the "last element" from an array and returns that element. 
// This method changes the length of the array.
arrayString.pop()
console.log("Pop() last element: ", arrayString);
// expected output: Array ['cat', 'pigs', 'goats', 'sheep']

// Shift():
// The shift() method removes the "first" element from an array and returns that removed element.
// This method changes the length of the array.
arrayString.shift()
console.log("Shift() first element: ", arrayString);
// expected output: Array ['pigs', 'goats', 'sheep']

/* 
1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
```
Input: a = 5, b = 10
Output: 15
​
Input: a = 5, b = 5
Output: 30
```
*/

function sum() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var sum = 0;
  // if (a === b) {
  //   sum = 3 * ((+a) + (+b));
  // } else {
  //   sum = (+a) + (+b);
  // }
  sum = (a === b) ? (3 * ((+a) + (+b))) : ((+a) + (+b));
  document.getElementById("ex1").innerHTML = sum;
}

/*2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
​
```
Input: a = 12
Output: 7
​
Input: a = 19
Output: 0
​
Input: a = 22
Output: 9
```
*/

function absolute(y = 19) {
  var x = document.getElementById("x").value;
  var result = 0;
  // if (parseInt(x) > 19) {
  //   result = 3 * (Math.abs(y - parseInt(x)));
  // } else {
  //   result = (Math.abs(y - parseInt(x)));
  // }
  result = (parseInt(x) > 19) ? (3 * (Math.abs(y - parseInt(x)))) : (Math.abs(y - parseInt(x)));
  document.getElementById("ex2").innerHTML = result;
}

/*3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. 
Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
​
```
Input: a = '1*9'
Output: ['129', '159', '189']
```
​
```
Input: a = '1234567890*'
Output: ['12345678900', 
 '12345678903', 
 '12345678906', 
 '12345678909']
```
*/

function findNumber(divNumber = 3) {
  var number = document.getElementById("y").value;
  var arr = [];
  indexOfAsterisk = number.indexOf('*');
  for (var i=0; i<=9; i++) {
    arr.push((number.substring(0, indexOfAsterisk) + i.toString() + number.substring(indexOfAsterisk+1, number.length)));
  }
  var result = arr.filter(item => (parseInt(item) % divNumber) == 0);
  document.getElementById("ex3").innerHTML = result;
}

