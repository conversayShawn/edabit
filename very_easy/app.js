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