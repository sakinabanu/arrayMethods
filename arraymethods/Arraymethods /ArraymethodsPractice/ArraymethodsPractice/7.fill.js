/*
ARRAY FILL() METHOD :
It fills the all the elements with the given parameter
It also takes 3 parameters (Target/changed value , start , end)
Target/changed value : value to be changed or filled.
Start (Index value): from 0 1 2 3 4 5 . . . . . .
End (on length): from 1 2 3 4 5 6 . . . . . . .
It Changes the Original Array & Returns array by filling elements with given value.
*/
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);
console.log(num.fill(20, 4, 9));
console.log(num);


const school = ["Pen", "Pencil", "Book", "Notes"];
console.log(school);
console.log(school.fill("Scale", 1 , 3));