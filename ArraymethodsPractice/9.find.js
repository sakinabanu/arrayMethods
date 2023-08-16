/*
ARRAY FIND() METHOD :
Array Find Method Returns the First Element from the array Which passes the test given in the defined function.
It Returns first element that satisfies a condition
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.find((x) => x % 2 == 0)); // 2

// 2 is the first element from finding all even numbersconst arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.find((x) => x % 3 == 0));//3


const mybag = ["box","pencil","pen","book", "pen",];
const ans = mybag.find((x) =>{
  if(x == "pen") return true;
});

console.log(ans);// pen


