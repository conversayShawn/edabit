// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function cubes(a) {
	return a ** 3
}
const cubes = (a) => {
	return a**3
}
cubes=(a)=>a**3

// Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
	return (age*365)
}
function calcAge(age) {
	let ageInDays = (age*365)>=0 && typeof(age*365) == 'number' ? (age*365) : []
	return ageInDays
}
calcAge=(age)=>age*365

// Write a function that converts hours into seconds.
howManySeconds = (hours) => (hours*60*60)
function howManySeconds(hours) {
	const mins = 60;
	const seconds = 60;
	return hours * mins * seconds 
}

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
addition = (num) => (num+1)
function addition(num) {
	return ++num
}
addition = (num) => ++num

// Write a function that takes the base and height of a triangle and return its area.
triArea = (b, h) => (b*h)/2

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
lessThanOrEqualToZero = (num) => num <= 0 ? true : false
const lessThanOrEqualToZero = num => num <= 0;
function lessThanOrEqualToZero(num) {
	if (num <= 0) { return true; }
	return false;
}

// Create a function that takes two numbers as arguments and returns their sum.
addition = (a, b) => a+b
function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didn't pass two numbers.";
    }
    return a + b;
}

// Write a function that takes an integer minutes and converts it to seconds.
convert = (minutes) => minutes*60
function convert(minutes) {
	const seconds = minutes*60;
	return seconds;
}

// Create a function that takes an array containing only numbers and return the first element.
getFirstValue = (arr) => arr[0]
function getFirstValue(arr) {
	return arr.shift();
}
var getFirstValue = arr => Array.isArray(arr) ? arr[0] : "error";
getFirstValue = _ => _[0]