// Fix the syntax
function cubes(a) {
  return a ** 3;
}
const cubes = (a) => {
  return a ** 3;
};
cubes = (a) => a ** 3;

// Age in years to age in days
function calcAge(age) {
  return age * 365;
}
function calcAge(age) {
  let ageInDays =
    age * 365 >= 0 && typeof (age * 365) == "number" ? age * 365 : [];
  return ageInDays;
}
calcAge = (age) => age * 365;

// Hours to seconds.
howManySeconds = (hours) => hours * 60 * 60;
function howManySeconds(hours) {
  const mins = 60;
  const seconds = 60;
  return hours * mins * seconds;
}

// Number increments by +1 and returns the result.
addition = (num) => num + 1;
function addition(num) {
  return ++num;
}
addition = (num) => ++num;

// Return the area when provided the base and height of a triangle
triArea = (b, h) => (b * h) / 2;

// True if less than or equal to zero, otherwise return false.
lessThanOrEqualToZero = (num) => (num <= 0 ? true : false);
const lessThanOrEqualToZero = (num) => num <= 0;
function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  }
  return false;
}

// Takes two numbers as arguments and returns their sum.
addition = (a, b) => a + b;
function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Sorry but you didn't pass two numbers.";
  }
  return a + b;
}

// Minutes converted to seconds.
convert = (minutes) => minutes * 60;
function convert(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

// Array containing only numbers returns the first element.
getFirstValue = (arr) => arr[0];
function getFirstValue(arr) {
  return arr.shift();
}
var getFirstValue = (arr) => (Array.isArray(arr) ? arr[0] : "error");
getFirstValue = (_) => _[0];

// Return the Remainder from Two Numbers
remainder = (x, y) => x % y;

// Less Than 100?
lessThan100 = (a, b) => (a + b < 100 ? true : false);
const lessThan100 = (a, b) => a + b < 100;

// Basic variable assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
const nameString = (name) => {
  let b = "Edabit";
  let result = name + b;
  return result;
};

const nameString2 = (name) => `${name}Edabit`; // updated function name because nameString is already declared with const

// Calculated power from voltage and current
const circuitPower = (v, c) => v * c;

// Find the maximum range of a triangle's third edge, where the side lengths are all integers.
const nextEdge = (s1, s2) => s1 + s2 - 1;
function nextEdge(side1, side2) {
  if (side1 > 0 && side2 > 0) {
    return side1 + side2 - 1;
  } else {
    return;
  }
}

// Find the Perimeter of a Rectangle
const findPerimeter = (l, w) => (l + w) * 2;

// Fix the code in the code tab
function squared(b) {
  return b * b;
}
function squared(b) {
  return Math.pow(b, 2);
}
function squared(b) {
  return b ** 2;
}

// Return the string "something" joined with a space " " and the given argument a.
const giveMeSomething = (a) => `something ${a}`;
function giveMeSomething(a) {
  let b = "something ";
  return b.concat(a);
}

// Buggy Code (Part 5)
const printArray = (number) => {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
};
const printArray1 = (n) => Array(...Array(n)).map((v, i) => i + 1);
let printArray2 = (n) => [...Array(n)].map((a, b) => 1 + b * 1);
const printArray3 = (num) => [...Array(num + 1).keys()].slice(1);
printArray = (n) => Array.from({ length: n }, (_, i) => i + 1);
printArray = (n) => Array.from({ length: n }, (_, i) => i + 1);

// Equality check
const checkEquality = (a, b) => a === b;

// Sum of polygon angles
const sumPolygon = (n) => (n - 2) * 180;

// Buggy Code (Part 7)
const swap = (a, b) => {
  let c = a;
  let d = b;
  b = c;
  a = d;
  return [a, b];
};
const swap1 = (a, b) => [b, a];
function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

// Given the amount of 2-pointers scored and 3-pointers scored, return that value.
const points = (two, three) => two * 2 + three * 3;
const points1 = (a, b, c = a * 2 + b * 3) => c;

// Return true if and only if x is equal to 7
const isSeven = (x) => x === 7;
const isSeven1 = (x) => x === 7; // no ()

// How many legs
const animals = (ch, co, p, t = ch * 2 + co * 4 + p * 4) => t;
function animals(chickens, cows, pigs) {
  chickens *= 2;
  cows *= 4;
  pigs *= 4;
  return chickens + cows + pigs;
}

// Using the "&&" Operator
const and = (a, b) => a && b;

// Convert hours and minutes to seconds
const convert = (h, m, s = h * 3600 + m * 60) => s;
convert = (h, m) => (h * 60 + m) * 60;

// Return true when num1 is equal to num2; otherwise return false
const isSameNum = (num1, num2) => num1 === num2;

// Create a function that takes a boolean variable flag and returns it as a string
const boolToString = (flag) => flag.toString();
function boolToString(flag) {
  return `${flag}`;
}
function boolToString(flag) {
  return flag ? "true" : "false";
}

// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
const calculator = (str) => eval(str);
const calculator1 = (str) => eval(str);
const calculator2 = eval;

// Buggy Code (Part 4)
const greeting = (name) =>
  name === "Mubashir" ? `Hello, my Love!` : `Hello, ${name}!`;
greeting = (a) => `Hello, ${a == "Mubashir" ? "my Love" : a}!`;

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
const frames = (min, fps) => min * (fps * 60);
const frames1 = (m, f) => m * f * 60;

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
const footballPoints = (w, d, l) => w * 3 + d;
function footballPoints(wins, draws, losses) {
  footballPoints[0] * 3 + footballPoints[1];
}
return footballPoints;

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
const makesTen = (a, b) =>
  a === 10 || b === 10 || a + b === 10 ? true : false;
const makesTen1 = (a, b) => [a, b, a + b].includes(10);

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.
const calculateFuel = (n) => (n * 10 <= 100 ? 100 : n * 10);
const calculateFuel1 = (n) => Math.max(100, n * 10);

// Create a function that returns the given argument, but by using an arrow function.
const arrowFunc = (n) => n;

// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
const profitableGamble = (a, b, c) => a * b > c;
function profitableGamble(prob, prize, pay) {
  return prob * prize - pay > 0;
}

// Given two arguments, return an array which contains these two arguments.
const makePair = (num1, num2) => {
  let arr = [];
  arr.push(num1, num2);
  return arr;
};
function makePair1(num1, num2) {
  return [...arguments]
}
const makePair3 = (num1, num2) => [num1, num2]
const makePair4 = (...a) => a

// Buggy Code (Part 2)
const maxNum = (n1,n2) => n1 > n2 ? n1 : (n1===n2 ? (n1,n2) : n2)
const maxNum1 = (n1,n2) => Math.max
const MaxNum2 = (...n) => Math.max(...n)

// Submit a function as minimalist as possible
const isEven = n => n%2===0
const isEven2 = n => !(n%2)

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
const divisibleByFive = (n) => !(n%5)

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
const comp = (str1, str2) => str1.length===str2.length

// Given two strings, firstName and lastName, return a single string in the format "last, first".
const concatName = (f, l) => `${l}, ${f}`
function concatName(f, l) {
  let c = ", "
  return l.concat(c, f)
}

// Create a function that returns true if a string is empty and false otherwise.
const isEmpty = (s) => s===""
function isEmpty(s) {
  return !s
}
function isEmpty(s) {
  return s.length==0
}
function isEmpty(s) {
  return s.length > 0 ? false : true
}

// Write a function that returns the length of a string. Make your function recursive.
const length = str => str.length
// GUESSED ON THIS ONE, BUT GOT IT RIGHT. #TAG-TEAM
const length1 = str => str == '' ? 0 : length(str.substring(1)) + 1
const length2 = ({length2}) => length2
const length3 = str => !str ? 0 : 1 + length(str.slice(1))

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
const divisible = (num) => num%100===0
const divisible1 = (num) => !(num%100)
const divisible2 = (num) => !Boolean(num%100)

// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
const area = (h, w) => h && w > 0 ? h * w : -1

// Create a function that takes an equation (e.g. "1+1"), and returns the answer.
const equation = (s) => eval(s)
let equation1 = eval

// Create a function that evaluates an equation.
let eq = eval

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
const dividesEvenly = (a, b) => !(a%b)

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// COULDN'T FIGURE THIS ONE OUT. #TAG-TEAM
function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes
}
function getVoteCount(votes) {
  const {upvotes,downvotes} = votes
  return upvotes - downvotes
}
const getVoteCount = ({upvotes,downvotes}) => upvotes - downvotes
const getVoteCount1 = votes => votes.upvotes - votes.downvotes

// Buggy Code
const has_bugs = (buggy_code) => buggy_code ? `sad days` : `it's a good day`

// Write a function to reverse an array.
const reverse = (arr) => arr.reverse()
function arr() {
  let word = []
  for (letter of arr) {
    word.unshift(letter)
  }
  return word
}

// Create a function that takes a string and returns it as an integer.
const stringInt = (str) => parseInt(str)
const stringInt1 = str => +str
const stringInt2 = Number
const stringInt3 = str => Number(str)

// Use Lodash: _.drop, Drop the First Elements of an Array
// COULDN'T FIGURE THIS ONE OUT. #TAG-TEAM
const drop = (arr, val = 1) => {
  return arr.slice(val);
}
const drop1 = (arr, val = 1) => arr.slice(val);
function drop(arr, val = 1) {
  for(var i = 0; i < val; i++)
  arr.shift();
	
	return arr;
}
const drop = (arr, val = 1) => {
  return arr.filter((z, index) => index >= val);
}
const drop = (arr, val = 1) => {
  while (val != 0) {
    arr.shift();
		val--;
	}
	return arr;
}

// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
const acceptIntoMovie = (a, s) => !(a<15) || s

// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
const shouldServeDrinks = (a, b) => !(a<18 || b)

// Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.
const yeah_nope = (bool) => bool ? `yeah` : `nope`

// Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.
const equilibrium = (x) => x===0 ? true : (x<0 ? `negative` : `positive`)
const equilibrium1 = x => !x || `${x > 0 ? "posi" : "nega"}tive`;
const equilibrium2 = x => ['negative',true,'positive'][Math.sign(x) + 1];

// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
const inchesToFeet = (i) => i<12 ? 0 : i/12
const inchesToFeet1 = (i) => Math.floor(i/12)
const inchesToFeet2 = (i) => ~~(i/12)

// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
const returnNegative = (n) => Math.abs(n) * -1
function returnNegative(n){
  return -Math.abs(n)
}
function returnNegative(n){
  return n<0?n:n*-1
}
function returnNegative(n){
  return Math.min(n,-n)
}

// Write a function that returns true if a year is a leap, otherwise return false.
const leapYear = (y) => y%4===0 || y%400===0
const leapYear = y => new Date(y,1,29).getDate() == 29;
const leapYear = y => !(y&3 || y&15 && !(y%25));
function leapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// Create a function that accepts an array and returns the last item in the array.
// COULDN'T FIGURE THIS ONE OUT. #TAG-TEAM
function getLastItem(arr) {
  return arr[arr.length - 1]
}
function getLastItem(arr) {
  return arr.pop();
}
const getLastItem = a => a.slice(-1)[0];

// Given a string, return true if its length is even or false if the length is odd.
const oddOrEven = (s) => s.length%2===0
function oddOrEven(s) {
  return !(s.length%2);
}

// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?
const posCom = (n) => 2**n
function posCom(num) {
  return Math.pow(2, num)
}
function posCom(num) {
  return 2 << (num - 1);
}

// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
// Write a function that determines if the year is a leap year or not.
const leapYear = (y) => !(y%4 || !y%400)

// ES6: Destructuring Arrays I
// COULDN'T FIGURE THIS ONE OUT. #TAG-TEAM
const arr = [1, 2, 3, 4, 5, 6]
let [a, b] = arr

// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.
const howManyWalls = (n, w, h) => Math.floor(n/(w*h))

// You must calculate the number of people there will be in three decades from now.
// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.
const futurePeople = (p, n) => p+(360*n)

// Submit 5 functions as minimalist as possible.
const add2 = (x) => x + 2
const add3 = (x) => x + 3
const add5 = (x) => x + 5
const add7 = (x) => x + 7
const add11 = (x) => x + 11

[2, 3, 5, 7, 11].forEach((n) => eval(`add${n} = (x) => x + n`))

// Create a function that returns the opposite of the given boolean, as a number.
const flipBool = (b) => b || 0 ? 0 : 1
const flipBool1 = (b) => b ? 0 : 1
const flipBool2 = (b) => (!b)*1

// Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.
const imposterFormula = (i, p) => {
  let imposter = Math.round(100*(i/p))
	return `${imposter}%`
}
const imposterFormula1 = (i,p) => `${Math.round(100*(i/p))}%`

// Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.
const yearsInOneHouse = (a,m) => Math.round(a/(m+1))

// Write a template string according to the following example:
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
const format = (a, b, c) => `Their names were: ${a}, ${b} and ${c}.`

// Create a function that takes a word and returns the new word without including the first character.
const newWord = (str) => str.substring(1)
const newWord1 = (str) => str.slice(1)

// Create a function that takes a base number and an exponent number and returns the calculation.
const calculateExponent = (n, e) => n**e
const calcExp = (n, e) => Math.pow(n,e)

// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
const intToString = (num) => num.toSting()

const stringToInt = (num) => parseInt(num)

// Create a function to concatenate two integer arrays.
const concat = (arr1, arr2) => arr1.concat(arr2)

// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
// COULDN'T FIGURE THIS ONE OUT. #TAG-TEAM
const operate = (num1, num2, operator) => eval(`${num1}${operator}${num2}`)