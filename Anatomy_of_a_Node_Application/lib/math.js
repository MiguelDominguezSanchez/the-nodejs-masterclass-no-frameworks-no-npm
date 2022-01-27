/*
 * Title: Math Library
 * Description: Utility Library for math-related functions
 * Author: Leslie Lewis
 * Date: 10/24/17
 *
 */

// App object
var math = {}

// Get a random integer between two integers
// Inspired by:
math.getRandomNumber = function (min, max) {
	min = typeof min == 'number' && min % 1 === 0 ? min : 0
	max = typeof max == 'number' && max % 1 === 0 ? max : 0
	return Math.floor(Math.random() * (max - min + 1) + min)
}

// Export the library
module.exports = math
