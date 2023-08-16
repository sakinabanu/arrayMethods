/*
ARRAY SOME() METHOD :
The some() method tests whether any of the array elements pass the given test function.
It Checks atleast one of the conition passes or not and it will return true if any conition is true.
*/

// Array of scores obtained by student.
let score = [100, 90, 89, 78, 45, 20, 35, 42];

let data = score.some((x) => (x < 40 ? true : false));
let mark = score.some((x) => (x < 20 ? true : false));

console.log(data); // true
console.log(mark); // false


//  Using Functions :
let marks = [100, 90, 89, 78, 45, 12, 55, 42];

function justpass(num) {
  return num < 40;
}
let data1 = marks.some(justpass);
console.log(data1); // true 

function fail(num) {
  return num < 10;
}
let data2 = marks.some(fail);
console.log(data2); // false