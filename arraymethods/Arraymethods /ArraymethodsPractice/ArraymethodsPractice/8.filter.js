/*
ARRAY FILTER() METHOD :
This method returns a new array with all elements that pass the test defined by the given function.
It Returns array by filtering elements on given test.
It makes an another array following the function and parameters given.
*/
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a.filter((x) => x >= 5)); //[ 5, 6, 7, 8, 9, 10 ]


// to filter even numbers :
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(number) {
  if (number % 2 == 0) return true;
  else return false;
}
// creates a new array by filter even numbers from the numbers array.
let c = numbers.filter(checkEven);
console.log(c); // [ 2, 4, 6, 8, 10 ]


// to filter odd numbers :
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = arr.filter((arr) => {
    if (arr % 2 == 1) return true;
    else return false;
 });
  // create a new array by filter odd numbers from the numbers array.
console.log(b) //[ 1, 3, 5, 7, 9 ]