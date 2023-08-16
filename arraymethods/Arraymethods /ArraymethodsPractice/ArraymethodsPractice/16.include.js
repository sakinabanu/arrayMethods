/*
ARRAY INCLUDE() METHOD :
Array Includes check the given element is present in the array or not.
It gives true or false values according to elements in array.
It search the element in the array if element is present it will return true else it will return false.
The includes() method returns:
    -> true if searchValue is found anywhere within the array.
    -> false if searchValue is not found anywhere within the array.
The includes() method is case sensitive.
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.includes(4)); // true


const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a.includes(11)); // false
console.log(a.includes(4)); // true
//  11 is not in the array so it gave false
// 4 is in the array so it gave true


const words = ["V","S","f","A","C","x","l"];
console.log(words.includes("L")); // false
// There is no UpperCase L in the array
console.log(words.includes("l")); // true
// There is LowerCase l in the array


// 2nd Parameter is for to check from a specific index of array.
const test = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Checking 4 from 5th index
console.log(test.includes(4, 5)); // false
// Checking 4 from 1st index
console.log(test.includes(4, 1)); // true
// Checking 4 from 4th index
console.log(test.includes(4, 4)); // true
