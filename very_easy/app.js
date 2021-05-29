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
let makesTen = (a,b)=> a + b == 10 ||a == 10 || b == 10; // refactor ternary
const makesTen = (a , b) => [a , b , a + b].includes(10); // refactor, .includes()

// Given two strings, firstName and lastName, return a single string in the format "last, first".
const concatName = (fN, lN) => (`${lN}, ${fN}`)

// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
const returnNegative = (n) => Math.abs(n) * -1
const returnNegative = (n) => -Math.abs(n) //simple
