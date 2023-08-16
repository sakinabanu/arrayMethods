/*
ARRAY FROM() METHOD :
Array from() Method returns a new array from any array likr iterable object.
Creates a new Array from array-like object.
*/
let names = "Sakina Banu";
console.log(Array.from(names)); //[ 'S', 'a', 'k', 'i', 'n', 'a', ' ', 'B', 'a', 'n', 'u']

// It take a string and make it's each element as different values and makes an array.  
let num = "12345";
console.log(Array.from(num, (x) => x * x));
