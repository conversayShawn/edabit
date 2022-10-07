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
const points = (two, three) => ((two*2)+(three*3))
const points1 = (a,b,c = a*2+b*3) => c

// Return true if and only if x is equal to 7
const isSeven = (x) => x===7
const isSeven1 = x => x === 7 // no ()

// How many legs
const animals = (ch,co,p,t = ch*2+co*4+p*4) => t
function animals(chickens, cows, pigs) {
	chickens *= 2;
	cows *= 4;
	pigs *= 4;
	return chickens + cows + pigs;
}

// Using the "&&" Operator
const and = (a, b) => a&&b

// Convert hours and minutes to seconds
const convert = (h,m,s = h*3600+m*60) => s
convert=(h,m)=>(h*60+m)*60

// Return true when num1 is equal to num2; otherwise return false
const isSameNum = (num1, num2) => num1===num2

// Create a function that takes a boolean variable flag and returns it as a string
const boolToString = (flag) => flag.toString()
function boolToString(flag){
	return `${flag}`;
}
function boolToString(flag){
	return flag ? 'true' : 'false';
}

// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
const calculator = (str) => eval(str)
const calculator1 = str => eval(str)
const calculator2 = eval

// Buggy Code (Part 4)
const greeting = (name) => name === "Mubashir" ? `Hello, my Love!` : `Hello, ${name}!`
greeting=a=>`Hello, ${a=='Mubashir'?'my Love':a}!`

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
const frames = (min, fps) => min*(fps*60)
const frames1 = (m, f) => m * f * 60;

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
const footballPoints = (w, d, l) => w*3+d
function footballPoints(wins, draws, losses) {
	footballPoints[0] * 3 + footballPoints[1]
}
return footballPoints

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
const makesTen = (a, b) => (a===10)||(b===10)||(a+b===10)?true:false
const makesTen1 = (a, b) => [a,b,a+b].includes(10)

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.
const calculateFuel = (n) => n*10<=100?100:n*10
const calculateFuel1 = (n) => Math.max(100,n*10)