/*
ARRAY COPYWITHIN() METHOD :
Copies and overwrites elements within the array.
Copy the elememnt from 1 index to another index.
It Takes 2 Parameters
1st - Index of the element to be changed
2nd - Index of the element to be copied
It changes the original Array
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Index     0  1  2  3  4  5  6  7  8  9
// 0 index element is 1
// 1 is going to change to index value of 2
// index value of 3 is 2
// so to change 1 ==> 3 index will be 0 ==> 2
console.log(arr.copyWithin(0, 2));// [3, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let fruits = ["apple", "banana", "kiwi","mango","grapes","oranges"];

console.log(fruits.copyWithin(0,5))

