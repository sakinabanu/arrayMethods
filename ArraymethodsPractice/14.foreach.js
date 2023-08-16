/*
ARRAY FOREACH() METHOD :
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.
Always remember that it doesn’t 'return' anything & if we try to get the value it will be undefined.
It Executes the given function on array elements.
*/
// 1. The returning value :
let a = [1, , ,, 2," ", 3, 4, 5, 6, 7]
let r = a.forEach((x) => {
   return x;
   // doesnot Return Array
});
console.log(r); // undefined

// 2. Console Log :
let b = [1, 2, 3, 4, 5, 6, 7];
b.forEach((x) => console.log(x)); // 1 2 3 4 5 6 7 
// It uses for Displaying.
// It works under console log.
// It does not change the Original Array.


// 3. Ability to chain other methods :
let c = [3, 4, 5, 6, 1, 9]
// Using ForEach As it returns undefiend you cannot change to other array methods.
console.log(c.forEach((x) => x * x).fitter((x) => x > 9)); // error


//4. Performance Speed
const myAwesomeArray = [1, 2, 3, 4, 5];
const start = performance.now();
myAwesomeArray.forEach((x) => x + x * 10000000000);
const end = performance.now();
console.log(end - start); // 0.03601600229740143
