/*
ARRAY LENGTH() METHOD :
The length property returns or sets the number of elements in an array.
It starts the length from 1.
*/


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length); // 10


var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
console.log(languages.length); // 5

// truncate the Array to 3 elements
languages.length = 3;
console.log(languages); // [ 'JavaScript', 'Python', 'C++' ]

// extend the Array to length 6
languages.length = 6;
console.log(languages); // [ 'JavaScript', 'Python', 'C++', <3 empty items> ]

// Here, we first truncated the length of Array as 3 (assigned value) is less than 4 (original Array length).
// If the assigned value is more than the original Array length, empty items are appended to the end of the Array. We can see this happen in the second example.