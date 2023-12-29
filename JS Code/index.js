// This is comment

/* This is a multi-line comments
   Comments are ignored by the interpreter
*/

// JavaScript historically runs on the browser, but with the environment called Node.js
// it can now be run on the desktop. This is great because developers can not learn one language (JS)
// to program both client and server (as opposed to learning languages like PHP, Java, Python etc) to
// write server-side code.

// To run this program, run "node practice.js" in this directory.
// Be sure to have installed Node.js on your machine and add it to your path.

// Constants are fixed (cannot be changed)
const PI = 3.14;

// Create variables using "let" or "var"
// Difference between let and var has to do with scopes
let age = 15;

// Above, age is inferred as a number and newName below is inferred as a string
let newName = "Ethan";

// Strings have functions
console.log(newName.indexOf("an"));

// Console logging is printing to the console.
console.log("age is " + age);

// if-else clause is used as a decision structure
// if (condition) { statements }
if (age <= 30) {
  // This is an example of something called String Templates
  console.log(`${newName} is young\n`); // \n = new line, \t = tab
} else if (age > 50) {
  console.log(newName + " is old");
} else {
  console.log(newName + " is in his prime");
}

// JavaScript is a "higher level language" that can be used with HTML such as below
// document.getElementById('name').innerHTML = `<p>${newName}</p>`

// Operators
let a = 3;
let b = 2;
console.log(a + b); // Also -, *, /
console.log(a ** b); // Exp a^b
console.log(a % b); // Takes reminder
console.log(a++); // Post increment
console.log(--b); // Pre decrement

(a = 5), (b = 3);
a = a + 2; // a += 2
console.log(a);
// -=,*=, %=

function add(number1, number2) {
  return number1 + number2;
}

// Below is the same as the add function above with scoped feature introduced in ES6
// const add = (number1, number2) => {
//     return number1 + number2;
// }

// We can overload the add function
function add(number1) {
  return number1++;
}

console.log(add(5, 8));

// Arrays
const cars = ["Camry", "Civic", "BMW"];

// Insert a new car into the array
cars.push("Tesla");

/* Loops are nice for repetitive statements
   Instead of console logging cars[0], cars[1]...cars[n]
   We can use loops*/

// Basic for loop
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Enhanced for loop
for (let car of cars) {
  console.log(car);
}

function isPuppy(age) {
  if (age < 3) {
    return true;
  } else {
    return false;
  }

  // Ideally: return age < 3
}

let happyAge = 8;
// console.log("Happy is " + happyAge + " years old");
console.log(`Happy is ${happyAge} years old`); // String Templates are amazing

if (isPuppy(happyAge)) {
  console.log("Happy is young");
} else {
  console.log("Happy is old");
}

// Ternary Condition
// Syntax: (condition) ? statement1 : statement2
console.log(`Happy is ${isPuppy(happyAge) ? "young" : "old"}`);

// If you have time, try to read about Switch statements and While loop

// This constant is readily available on line 31 and 35 because it's in scope
const five = 5;

function plusFive(number) {
  return number + five;
}

console.log(plusFive(10)); // To print 15
console.log(five); // If "five" was inside a function for example, we wouldn't be able to call it here.
