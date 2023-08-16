/*
ARRAY REDUCERIGHT() METHOD :
The reduceRight() method reduces the array to a single value by executing a callback function on two values of the array (from right to left).
*/
const numbers=[1,2,3,4,5]
/*
acc = 0  and item = 5  ====> 0  + 5  = 5
acc = 5  and item = 4  ====> 5  + 4  = 9
acc = 9  and item = 3  ====> 9  + 3  = 12
acc = 12 and item = 2  ====> 12 + 2  = 14
acc = 14 and item = 1  ====> 14 + 1  = 15
*/
const sum=numbers.reduceRight((accumulator,currentValue)=>{
    console.log(`accumulator ${accumulator} + currentvalue ${currentValue}`);
    
    return accumulator+currentValue;
})

console.log(sum); // 15


const arr1 = [13, 2, 5];
let data = arr1.reduceRight((init, value, index, array) => {
         /*
            5
            2
            1
            [ 13, 2, 5 ]
         */
//EXTRA METHOD
  // Start value starts from 0
  console.log(init); // 0
  // last value of arr1  5
  console.log(value); // 5
  // index of last value 0
  console.log(index); // 2
  // console whole array [13,2,5]
  console.log(array); // [13,2,5]

  return init + value;
}, 0);
console.log(data); // 20
/*
acc = 0 and item = 5 ====> 0+5 = 5
acc = 5 and item = 2 ====> 5+2 = 7
acc = 7 and item = 13 ====>7+13 = 20
*/