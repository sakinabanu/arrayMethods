/*
ARRAY PUSH() METHOD :
The push() method adds zero or more elements to the end of the array.
Adds elements to end of array & returns its length.
*/


let alpha = ["M", "N", "O","P", "Q", "R"];
// adding element to the array.
alpha.push("S");
alpha.push("T","U","V");
console.log(alpha); 
/*[
  'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T',
  'U', 'V'
]*/


const no = [,,,0,1,2,3,4,5,6,7,8,9];
no.push(9,8,7,6,5,4,3,2,1,0);
console.log(no);
/*[
  <3 empty items>,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  0
]*/