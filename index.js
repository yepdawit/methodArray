// efficency + resourcefulness

// node.js
/* 
*********************** node.js ***********************
- node.js is a runtime environment for executing JavaScript code outside of a browser or on our local machine

- node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
---- V8 is an open source JavaScript engine written in C++ and used in Google Chrome, the open source browser from Chromium, and in Node.js, among others

-- we can import and export modules in node.js using the CommonJS module system
=====>data.js
const supplies = ['pen', 'paper', 'pencil', 'stapler', 'tape', 'glue'];

module.exports = supplies;
and require them in other files
=====>index.js
const supplies = require('./data.js');
console.log(supplies); 

*/
const fruitArray = ["apple", "banana", "orange", "pear", "strawberry", "grape"];
const items = ["pen", "paper", "pencil", "stapler", "tape", "glue"];

let animal = "dog";

module.exports = { fruitArray, items, animal };

/* 
************************SCope types************************
- Global Scope
-------------------------
let num = 10; -- this is with in a global scope
- Function Scope
-------------------------
*/
function addNums() {
  let num1 = 5;
  let num2 = 10;
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
} //-- this is with in a function scope

//- Block Scope
if (true) {
  let animal = "dog";
  console.log(animal);
} // -- this is with in a block scope

//- Lexical Scope

//----------------Array Method--------------------
/* 
array methods are built in methods that we can use on arrays
-shift - removes the first element from an array and returns that removed element
-unshift - adds one or more elements to the beginning of an array and returns the new length of the array
-push - adds one or more elements to the end of an array and returns the new length of the array
-pop - removes the last element from an array and returns that element
-concat
-slice
-splice





*/

// function expresssion that subtracts two numbers
const subtract = (c, d) => {
  return c - d;
};
console.log(subtract(5, 3)); //2

// division expression
const divide = (a, b) => a / b;
//console.log(divide(10, 2));
const opperations = [subtract, divide];

for (let i = 0; i < opperations.length; i++) {
  //looping through the array
  const func = opperations[i]; //assigning the function to a variable
  console.log(func(10, 2)); //calling the function
} //2, 5

// for each
// similar to for loop, forEach() iterates over an array
// forEach() takes a callback function as an argument
// the callback function takes in three arguments: the current element, the index, and the array
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
//we can use for each to loop through the array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//or we can use for each
numbers.forEach(function (num) {
  console.log(num);
}); // 20, 21, 22, 23, 24, 25, 26, 27

// .sort()
// sorts the elements of an array in place and returns the sorted array
// the default sort order is ascending
const num = [2, 1, 3, 4, 5, 6, 7, 8, 9];
const sortedNum = num.sort();
console.log(sortedNum); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// we use it with the compare function
// the compare function takes in two arguments
// if the first argument is less than the second argument, return -1
// if the first argument is greater than the second argument, return 1
// if the first argument is equal to the second argument, return 0
//_______________________Ascending Order_______________________
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

//_______________________Descending Order_______________________
const points2 = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points2); // [100, 40, 25, 10, 5, 1]

// .map()
// this map method is similar to the forEach method but it returns a new array -- creates a double array
// ________________Example 1_____________________
const nums2 = [2, 4, 6, 8];
// new array with this array doubled
function double(arr) {
  const doubled = []; // create an empty array
  for (let i = 0; i < arr.length; i++) {
    //loop through the array
    doubled.push(arr[i] * 2); //push the doubled value into the empty array
  }
  return doubled; //return the new array
}

console.log(double(nums2)); // [4, 8, 12, 16]

// ________________Example 2_____________________ using map ________________
const nums3 = [2, 4, 6, 8];
const doubled = nums3.map(function (num) {
  //looping through the array
  return num * 2; //return the doubled value
}); //[4, 8, 12, 16]

// ________________Example 3_____________________ using map ________________
const nums4 = [2, 4, 6, 8];
const doubled2 = nums4.map((num) => num * 2); //[4, 8, 12, 16]

// filter()
// creates a new array with all elements that pass the test implemented by the provided function

// ________________Example 1_____________________
const nums5 = [40, 100, 1, 5, 25, 10];
function onlyEven(arr) {
  const evens = []; // create an empty array
  for (let i = 0; i < arr.length; i++) {
    //loop through the array
    if (arr[i] % 2 === 0) {
      //if the number is even
      evens.push(arr[i]); //push the number into the empty array
    }
  }
  return evens; //return the new array
}

console.log(onlyEven(nums5)); // [40, 100, 10]

// ________________Example 2_____________________ using filter ________________
const nums6 = [40, 100, 1, 5, 25, 10];
const evens = nums6.filter(function (num) {
  //looping through the array
  return num % 2 === 0; //return the even numbers
}); //[40, 100, 10]

console.log(evens); //[40, 100, 10]

// ________________reduce()_____________________
// executes a reducer function on each element of the array, resulting in a single value
// ________________Example 1_____________________
const nums7 = [1, 2, 3, 4, 5];
// const sum = arr1.reduce(prev, (next) => prev + next); //accumulator, currentValue => accumulator + currentValue
// const sum = nums7.reduce(accumulator, currentValue)  => {
//     console.log("accumulator", accumulator, "currentValue", currentValue);
//     return accumulator + currentValue;
// };(0) //0 is the initial value of the accumulator
// console.log(sum); //15

//  Reduce methods
// 1. Sum up all the values in an array
const nums8 = [1, 2, 3, 4, 5];

// the accumulator is the first argument and the currentValue is the second argument so we can think of it as accumulator + currentValue = sum
const sums = nums8.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sums); //15

// we can also use reduce to find the max value in an array
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
const maxGrade = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});
console.log(maxGrade); //99

// we can also get the initial value of the accumulator
const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

/*  */

const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    //if the value exists
    tally[val]++; //increment the value
  } else {
    //if the value does not exist
    tally[val] = 1; //set the value to 1
  }
  return tally; //return the tally
}, {}); //{} is the initial value of the accumulator
console.log(results); //{y: 7, n: 6}

//--------------------Javascript debuggine----------------

// first thing first is to check the console for errors
// greeting is not defined -- this is a reference error -- the variable is not defined
