/*
ARRAY TOSTRING() METHOD :
The toString() method returns a string formed by the elements of the given array.
The toString() method does not change the original array.
Elements like undefined, null, or empty array, have an empty string representation.
*/


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.toString()); // 1,2,3,4,5,6,7,8,9,10


let d = ["sakina", 12, "banu", 4];
// returns a string with elements of the array separated by commas
let itemsString = d.toString();
console.log(itemsString); // sakina,12,banu,4


let nestedArray = [1, 2, 3, 4, ["A", "B", "C"]];
// returns string representation of the nested array by flattening the array
let resultingArray = nestedArray.toString();
console.log(resultingArray); // 1,2,3,4,A,B,C