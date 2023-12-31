/*
ARRAY UNSHIFT() METHOD :
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
Adds elements to start of array and returns length.
*/

let languages = ["Java", "Python", "C"];
// add "JavaScript" at the beginning of the array
languages.unshift("JavaScript");
console.log(languages); // [ 'JavaScript', 'Java', 'Python', 'C' ]



var languages1 = ["JavaScript", "Python", "Java", "Lua"];
var count = languages1.unshift("C++");
console.log(languages1); // [ 'C++', 'JavaScript', 'Python', 'Java', 'Lua' ]
console.log(count); // 5


var priceList = [12, 21, 35];
var count1 = priceList.unshift(44, 10, 16);
console.log(priceList); // [ 44, 10, 16, 12, 21, 35 ]
console.log(count1); // 6
