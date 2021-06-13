// Create a function that takes two numbers as arguments and return their sum.
const addition = (a, b) => a + b

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
const frames = (min, fps) => min * fps * 60

// Convert Hours and Minutes into Seconds
const convert = (h, m) => ((h*60)+m)*60

// Compare Strings by Count of Characters
const comp = (str1, str2) => str1.length === str2.length ? true : false
const comp = (str1, str2) => str1.length === str2.length // refactor

// Given two arguments, return an array which contains these two arguments.
// const makePair = (num1, num2) => {
// 	let arr = []
// 	return arr.push(num1, num2)
// } FAILED - CAN'T RETURN AND PUSH IN THE SAME LINE
const makePair = (num1, num2) => {
    const arr = [];
    arr.push(num1, num2);
    return arr;
  }
const makePair = (a,b) => [a,b]; // simple solution
const makePair = (...a) => a; // refactor, spread syntax

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.
const calculateFuel = (n) => (n<=10) ? 100 : (n*10)
const calculateFuel = n => Math.max(100, n * 10); // refactor, Math.max

// Create a function that takes two arguments. Both arguments are integers, a and b. 
// Return true if one of them is 10 or if their sum is 10.
// const makesTen = (a, b) => {
// 	if ((a + b) || (a || b) === 10) {
// 		return true
// 	}
// 	return false
// }
// FAILED - LOGIC WAS OFF
function makesTen(a,b){
	if(a ===10||b === 10){
		return true
	} else if(a+b === 10){
		return true
	} else {
		return false
	}
}
let makesTen = (a,b)=> a + b == 10 || a == 10 || b == 10; // refactor ternary
const makesTen = (a , b) => [a , b , a + b].includes(10); // refactor, .includes()

// Given two strings, firstName and lastName, return a single string in the format "last, first".
const concatName = (fN, lN) => (`${lN}, ${fN}`)

// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
const returnNegative = (n) => Math.abs(n) * -1
const returnNegative = (n) => -Math.abs(n) // simple solution
const returnNegative = (n) => Math.min(n,-n) // Math.min()
const returnNegative = n => n > 0 ? n * -1 : n // ternary

// Create a function that evaluates an equation
const eq = (e) => eval(e) 

// Create a function that takes a number n and returns the nth even number.
// const nthEven = (n) => n % 2 === 0 ? n : n + 1 FAILED - LOGIC WAS WRONG
const nthEven = n => 2 * n - 2 // simple solution

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
const dividesEvenly = (a, b) => a % b === 0
const dividesEvenly = (a, b) => a % b === 0 ? true : false // technically correct
const dividesEvenly = (a, b) => !(a % b) // not operator

// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.
// Write a function that returns true if the given integer is even, and false if it's odd.
const isEven = (n) => n % 2 === 0 ? true : false
const isEven = (n) => n % 2 === 0 // simple
const isEven = n => !(n % 2) // not operator

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
const divisibleByFive = (n) => n % 5 === 0
const divisibleByFive = (n) => !(n % 5) // not operator

// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
const area = (h, w) => h > 0 && w > 0 ? h * w : -1

// Create a function that returns true if a string is empty and false otherwise.
const isEmpty = (s) => s.length === 0
const isEmpty = (s) => s !== '' ? false : true // not strictly equals
const isEmpty = (s) => !s // not operator

// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
// Write a function that determines if the year is a leap year or not.
const leapYear = (y) => (y % 4 === 0) || (y % 100 === 0 && y % 400 === 0) ? true : false
const leapYear = (y) => (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)

// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// 	The person is at least 15 years old.
// 	They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
const acceptIntoMovie = (a, iS) => a >= 15 || iS
const acceptIntoMovie = (a, iS) => a < 15 && !iS // && and !

// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
const shouldServeDrinks = (a, oB) => a >= 18 && !oB

// Create a function that takes a string and returns it as an integer.
const stringInt = (str) => parseInt(str)
const stringInt = (str) => +str
const stringInt = (str) => Number

// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1
const area = (h, w) => h && w > 0 ? h * w : -1

// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
// Write five adder functions:
const add2 = (x) => x + 2
const add3 = (x) => x + 3
const add5 = (x) => x + 5
const add7 = (x) => x + 7
const add11 = (x) => x + 11
[2, 3, 5, 7, 11].forEach(n => global['add' + n] = (v) => n + v) // global variable
[2, 3, 5, 7, 11].forEach(n => this[`add${n}`] = x => x + n) // interpolation
[2, 3, 5, 7, 11].map(n => eval(`add${n} = x => x + n`)) // interpolation w/ map

// Create a function that takes an equation (e.g. "1+1"), and returns the answer.
const equation = (s) => eval(s)

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
const getVoteCount = (v) => v.upvotes - v.downvotes
const getVoteCount = ({ upvotes, downvotes }) => upvotes - downvotes // store value of objects
const getVoteCount = (v) => v['upvotes'] - v['downvotes'] // store value of index

// Given a string, return true if its length is even or false if the length is odd.
const oddOrEven = (s) => s.length % 2 === 0