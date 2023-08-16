/*
ARRAY REDUCE() METHOD :
The reduce() method executes a reducer function on each element of the array and returns a single output value.
If vaues are => [1,2,3,4,5]
accumulator     currentValue    return
    0                1            1
    1                2            3
    3                3            6
    6                4            10
   10                5            15

acc = 0  and item = 1 ====> 0  + 1 =  1
acc = 1  and item = 2 ====> 1  + 2 =  3
acc = 3  and item = 3 ====> 3  + 3 =  6
acc = 6  and item = 4 ====> 6  + 4 = 10
acc = 10 and item = 5 ====> 10 + 5 = 15

*/

const v = [3, 5, 1, 4, 2];

const total = v.reduce((acc, item) => {
  return acc + item;
});
console.log(total); // 15
// acc = 0 and item = 3 ====> 0+3 = 3
// acc = 3 and item = 5 ====> 3+5 = 8
// acc = 8 and item = 1 ====> 8+1 = 9
// acc = 9 and item = 4 ====> 9+4 = 13
// acc = 13 and item = 2 ===> 13+2 = 15


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
     console.log(
     arr.reduce((acc, count) => {
     return acc + count;
     }, 0);
     );

acc = 0  and item = 1  ====> 0  + 1  = 1
acc = 1  and item = 2  ====> 1  + 2  = 3
acc = 3  and item = 3  ====> 3  + 3  = 6
acc = 6  and item = 4  ====> 6  + 4  = 10
acc = 10 and item = 5  ====> 10 + 5  = 15
acc = 15 and item = 6  ====> 15 + 6  = 21
acc = 21 and item = 7  ====> 21 + 7  = 28
acc = 28 and item = 8  ====> 28 + 8  = 36
acc = 36 and item = 9  ====> 36 + 9  = 45
acc = 45 and item = 10 ====> 45 + 10 = 55
*/

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = arr.reduce(sum_reducer);
console.log(sum); // 55


