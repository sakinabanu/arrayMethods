/*
ARRAY MAP() METHOD :
Map method iterates every element of an array and gives the result array.
Whenever we are giving the instruction here we can do calculations on every element of an array.

The map method returns a new array by applying the callback function on each element of an array.
It creates a new array with the results of calling a function for every array element. 
Hence map() method relies on immutability. 
Also, map() doesnot execute / call the function for those array elements without values. 
It returns array by mapping elements using given function.
*/


let numbers = [5, 4, 3, 2, ,""," ", 1];
console.log(numbers.map((x) => x)); // [ 5, 4, 3, 2, <1 empty item>, '', ' ', 1 ]


const arr = [3, 1, 7, 4, 0, 5, 8, 6];
const result = arr.map((number) => {
  return number * 4;
});
console.log(result); // [ 12,  4, 28, 16, 0, 20, 32, 24 ]


