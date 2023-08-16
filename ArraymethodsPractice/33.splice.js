/*
ARRAY SPLICE() METHOD :
The splice() method returns an array by changing (adding/removing) its elements in place.
It Returns an array by changing its elements in place.
It is used to modify the array from the center (insert,delete) .
parameters taken (1st,2nd,3rd) :
 --> 1st parameter = what value to be modified using index values.
 --> 2nd parameter = deleting the value after the selected value, it starts from 1 from assigned index value and deletes from there.
 --> 3rd parameter = elements to be added in the place of that index
*/

let numbers = [2, 3, 5, 7, 9, 11];
// Index  =>   0  1  2  3  4  5
console.log(numbers.splice(4, 2, 0)); // [ 9, 11 ] (deleted vlues)
console.log(numbers); // [ 2, 3, 5, 7, 0 ]


let languages = [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ];
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]
languages.splice(2, 3); 
// From Index 2 it deletes next 3 elements from the array.
console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]
// updated aaray : [ 'JavaScript', 'Java', 'C++' ]
// removes everything from start
let removed = languages.splice(1);
console.log(removed); // [ 'Java', 'C++' ]
console.log(languages); // [ "JavaScript" ]