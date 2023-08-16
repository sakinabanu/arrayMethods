/*
ARRAY SORT() METHOD :
The sort() method sorts the items of an array in a specific order (ascending or descending).
Sorts the elements of an array in specific order.
All undefined elements are sorted to the end of the array.
It changes the Original Array.
It is used to sort the array in acending order which is an unorderly sorted.
*/


let alphabet = ["G", "B", "P", "K", "A", "O", "F", "I"];
// sort the array in ascending order
alphabet.sort();
console.log(alphabet); // [ 'A', 'B', 'F', 'G', 'I', 'K','O', 'P']


const a = [10, 21, 13, 14, 51, 61, 71, 18, 19, 100];
console.log(a.sort()); // [ 10, 100, 13, 14, 18, 19,  21, 51, 61, 71 ]
// In just sorting : It arranges all numbers starting with '1' first.


//Ascending order :  To arrange in Ascending to Descending order.
console.log(a.sort((a, b) => a - b)); // [ 10, 13, 14, 18,  19, 21, 51, 61, 71, 100 ]


// To Arrange in Desceding to Ascending Order
console.log(a.sort((a, b) => b - a)); // [ 100, 71, 61, 51, 21, 19, 18, 14, 13, 10 ]


const arr2=[4,7,6,2,3,8,9,100]
   console.log(arr2.sort()); // [ 100, 2, 3, 4, 6, 7, 8, 9 ]

const sort=arr2.sort((a,b)=>{
    return a-b;
});
console.log(sort);//[2,3,4,6,7,8,9,100]