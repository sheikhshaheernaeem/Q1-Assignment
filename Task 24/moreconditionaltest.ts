/// <reference lib="es2016.array.include" />

// Tests for equality and inequality with strings
//console.log('test1', 'hello' === 'world'); // false
//console.log('test2', 'hello' !== 'world'); // true
//console.log('test3', 'hello' === 'hello'); // true
//console.log('test4', 'hello' !== 'hello'); // false

// Tests using the lower case function
console.log('test5', 'HELLO'.toLowerCase() === 'hello'); // true
console.log('test6', 'Hello'.toLowerCase() === 'hello'); // true
console.log('test7', 'hello'.toLowerCase() === 'hello'); // true
console.log('test8', 'hello'.toLowerCase() === 'Hello'); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log('test9', 1 === 1); // true
console.log('test10', 1 !== 1); // false
console.log('test11', 1 > 2); // false
console.log('test12', 2 > 1); // true
console.log('test13', 1 < 2); // true
console.log('test14', 2 < 1); // false
console.log('test15', 1 >= 2); // false
console.log('test16', 2 >= 2); // true
console.log('test17', 2 >= 1); // true
console.log('test18', 1 <= 2); // true
console.log('test19', 2 <= 2); // true
console.log('test20', 2 <= 1); // false

// Tests using "and" and "or" operators
console.log('test21', true && true); // true
console.log('test22', true && false); // false
console.log('test23', false && true); // false
console.log('test24', false && false); // false
console.log('test25', true || true); // true
console.log('test26', true || false); // true
console.log('test27', false || true); // true
console.log('test28', false || false); // false

// Test whether an item is in an array
const myArray = ['apple', 'banana', 'cherry'];
console.log('test29', myArray.includes('apple')); // true
console.log('test30', myArray.includes('orange')); // false

// Test whether an item is not in an array
console.log('test31', !myArray.includes('orange')); // true
console.log('test32', !myArray.includes('apple')); // false
