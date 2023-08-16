/*
ARRAY LASTINDEXOF() METHOD :
The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.
It checks elements from right to left.
Lastindexof find the index of a given array from last element.
It returns the last index of occurrence of an element.


NOTE : IF WE DON'T KNOW THE ELEMENT AND WE GIVE AN ELEMENT WHICH IS NOT IN ARRAY THEN IT GIVES '-1' AS RETURN VALUE.

*/


const arr=[1,5,3,4,5,0,1,2,3]

console.log(arr.lastIndexOf(1)); // 6
console.log(arr.lastIndexOf(3)); // 8

const arr1 = [1, 2, 3, 4, 1, 5, 6, 3, 7, 8, 9, 6 ];
console.log(arr1.lastIndexOf(1)); // 4
console.log(arr1.lastIndexOf(15)); // -1
console.log(arr1.lastIndexOf(6)); // 11