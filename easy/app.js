// A decimal number can be represented as a sequence of bits. To illustrate:
//     6 = 00000110
//     23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:
//     bitwiseAND(6, 23) ➞ 00000110
//     bitwiseOR(6, 23) ➞ 00010111
//     bitwiseXOR(6, 23) ➞ 00010001
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
const bitwiseAND = (n1, n2) => n1 & n2
const bitwiseOR = (n1, n2) => n1 | n2
const bitwiseXOR = (n1, n2) => n1 ^ n2

// Write a function that returns the length of a string. Make your function recursive.
const length = (str) => str.length
const length = ({ length }) => length // recursion param

// Write a function to reverse an array.
const reverse = (arr) => arr.reverse()

// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.
const has_bugs = (buggy_code) => buggy_code ? "sad days" : "it's a good day" // corrected string from 'it's a good day' to "it's a good day"
const has_bugs = (buggy_code) => buggy_code ? `sad days` : `it's a good day` // interpolation
const has_bugs = (buggy_code) => buggy_code ? "sad days" : 'it\'s a good day' // single quotes backslash

// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Matchstick Houses, Steps 1, 2 and 3
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
const matchHouses = (s) => s > 0 ? (s * 6) - (s - 1) : 0 // ternary
const matchHouses = (s) => s === 0 ? 0 : 5 * s + 1 // alternate equation