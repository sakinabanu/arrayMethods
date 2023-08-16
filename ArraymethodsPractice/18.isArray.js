/*
ARRAY ISARRAY() METHOD :
It checks if the given value is a JavaScript Array.
Checks the array is a array or not :
    -> Returns true if the array is true.
    -> Returns false if the array is false.
*/


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(Array.isArray(arr)); // true


const arr1 = [1, 2,[5,6,8], 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Array.isArray(arr1)); // true


const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(Array.isArray(arr2)); // true
// Its an Object but by default its datatype is an Array.
console.log(typeof arr2); // object 



// passing an empty array []
console.log(Array.isArray([])); // true


// we have created an array with element 7 and
// passed that value to isArray()
console.log(Array.isArray(new Array(7))); // true


// passing a boolean value
console.log(Array.isArray(true)); // false


// passing undefined
console.log(Array.isArray(undefined)); // false


// not passing any argument in isArray()
console.log(Array.isArray()); // false