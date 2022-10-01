// Fix the syntax
function cubes(a) {
	return a ** 3
}
const cubes = (a) => {
	return a**3
}
cubes=(a)=>a**3

// Age in years to age in days
function calcAge(age) {
	return (age*365)
}
function calcAge(age) {
	let ageInDays = (age*365)>=0 && typeof(age*365) == 'number' ? (age*365) : []
	return ageInDays
}
calcAge=(age)=>age*365

// Hours to seconds.
howManySeconds = (hours) => (hours*60*60)
function howManySeconds(hours) {
	const mins = 60;
	const seconds = 60;
	return hours * mins * seconds 
}

// Number increments by +1 and returns the result.
addition = (num) => (num+1)
function addition(num) {
	return ++num
}
addition = (num) => ++num

// Return the area when provided the base and height of a triangle
triArea = (b, h) => (b*h)/2

// True if less than or equal to zero, otherwise return false.
lessThanOrEqualToZero = (num) => num <= 0 ? true : false
const lessThanOrEqualToZero = num => num <= 0;
function lessThanOrEqualToZero(num) {
	if (num <= 0) { return true; }
	return false;
}

// Takes two numbers as arguments and returns their sum.
addition = (a, b) => a+b
function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didn't pass two numbers.";
    }
    return a + b;
}

// Minutes converted to seconds.
convert = (minutes) => minutes*60
function convert(minutes) {
	const seconds = minutes*60;
	return seconds;
}

// Array containing only numbers returns the first element.
getFirstValue = (arr) => arr[0]
function getFirstValue(arr) {
	return arr.shift();
}
var getFirstValue = arr => Array.isArray(arr) ? arr[0] : "error";
getFirstValue = _ => _[0]

// Return the Remainder from Two Numbers
remainder = (x, y) => x%y

// Less Than 100?
lessThan100 = (a, b) => (a+b) < 100 ? true : false
const lessThan100 = (a, b) => (a + b) < 100