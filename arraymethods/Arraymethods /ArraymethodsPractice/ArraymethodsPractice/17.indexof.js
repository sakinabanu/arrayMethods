/* 
ARRAY INDEXOF() METHOD :
Array Indexof gives the index of the specifc element from the array.
Returns the first index of occurrence of element.

NOTE : IF WE DON'T KNOW THE INDEX OF THAT ELEMENT THEN IT GIVES '-1' AS RETURN VALUE.

*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.indexOf(6)); // 5
console.log(arr.indexOf(0)); // -1
console.log(arr.indexOf(10)); // 9

const words = ["Sakina", "Husna", "Zarina", "Erum"];
// Indexs are :   0         1        2        3
console.log(words.indexOf("Banu")); // -1
console.log(words.indexOf("Sakina")); //0
console.log(words.indexOf("Erum")); // 3
