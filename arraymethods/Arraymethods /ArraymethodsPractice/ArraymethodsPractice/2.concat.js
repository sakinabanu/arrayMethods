/*
ARRAY CONCAT() METHOD :
Returns array by merging given value and/or arrays.
It will concat multiple arrays and returns a new array.
It is used to add to the elements of one array into continuation of another arrays.
*/

let arr1 = ["apple", "banana", "kiwi"]
let arr2 = ["mango","grapes","oranges"]
console.log(arr1.concat(arr2))
// [ 'apple', 'banana', 'kiwi', 'mango', 'grapes', 'oranges' ]

// Concatenating Multiple Arrays
const arr3 = ["red","yellow","green","orange"];
const arr4 = [1, 3, 5, 7, 9];
console.log(arr1.concat(arr2, arr3, arr4));
/*[
  'apple',  'banana',
  'kiwi',   'mango',
  'grapes', 'oranges',
  'red',    'yellow',
  'green',  'orange',
  1,        3,
  5,        7,
  9
]*/

// Adding Multiple Values While Concatenating
console.log(arr1.concat( arr2, "< fruits", arr3, "< colours", arr4, "< number of"));
/*[
  'apple',    'banana',
  'kiwi',     'mango',
  'grapes',   'oranges',
  '< fruits', 'red',
  'yellow',   'green',
  'orange',   '< colours',
  1,          3,
  5,          7,
  9,          '< number of'
]*/