/*
ARRAY AT() METHOD :
It accepts the index number and gives the element of that specific index.
Index(Input) ==> Element/Value(Output)
If there is no index then it will show undefined.
 Note: It only returns an element of a specific index
 */
let arr = ["suhail", "sakina", "musaib", "hanzala"];

console.log(arr.at(0));// suhail
console.log(arr.at(1));// sakina
console.log(arr.at(2));// musaib
console.log(arr.at(3));// hanzala
console.log(arr.at(4));// undefined
// if there is no index then it will show undefined.

//find the last value if we don't know the array length then we use "-" with backward count.
console.log(arr.at(-1));// hanzala