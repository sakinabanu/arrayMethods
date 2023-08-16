/*
ARRAY JOIN() METHOD :
Join method simply add the whatever we are passing in the parameter in between the array elements
It concatenates the array elements to a string.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.join("/")); // 1/2/3/4/5/6/7/8/9/10
console.log(arr.join(".")); // 1.2.3.4.5.6.7.8.9.10
console.log(arr.join(" ")); // 1 2 3 4 5 6 7 8 9 10 
console.log(arr.join("+")); // 1+2+3+4+5+6+7+8+9+10
console.log(arr.join(" | ")); // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
console.log(arr.join("")); // 2345678910