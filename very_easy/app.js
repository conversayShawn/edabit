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