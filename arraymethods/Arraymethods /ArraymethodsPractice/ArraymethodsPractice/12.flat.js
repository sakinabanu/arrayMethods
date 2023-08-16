/*
ARRAY FLAT() METHOD :
It Flattens the nested array to given depth and makes it to same array.
The flat() method creates a new array by flattening a nested array up to the specified depth.
NOTE : 
-> does not change the original array.
-> removes empty slots in arrays.

Array flat Methods returns a new array by converting all multidimensional array into single nested array or 1d array.
Example :- [1,2,[3,5],[3,7],4] ===> [1,2,3,5,3,7,4]

 Flat is also used to remove holes from an array.
*/
let numbers = [1, 2, ,,,,, [3, 4, [5, 6, [7, 8]]]];
// reducing nesting by flattening the array to different depths.
let A = numbers.flat(3);
let B = numbers.flat(2);
let C = numbers.flat(1);
console.log(A); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(B); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
console.log(C); // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8 ] ] ]