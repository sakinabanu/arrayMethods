/*
ARRAY FINDINDEX() METHOD :
It returns index of element that satisfies condition.
FindIndex Method Returns the First Element Index from the array which passes the test given in the defined function.
It responses to the index of only first matched value.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.findIndex((x) => x % 2 == 0)); // 1 is the index of 2

// 2 is the first element from finding all even numbers and index its index is 1.

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr1.findIndex((x) => x % 5 == 0)); // 4


const mybag = ["box","pencil","pen","book", "pen",];
const ans = mybag.findIndex((x) =>{
  if(x == "pen") return true;
});
console.log(ans); // 2