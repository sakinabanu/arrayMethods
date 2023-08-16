/*
ARRAY KEYS() METHOD :
The keys() method returns a new Array Iterator object that contains the keys for each element in the array.
It returns an iterator containing keys of array items.
The keys are the index values in an array & elements of array are known as values.
keys (index value) ==> values (elements in array)
*/


const arr = [1,2,3,4,5,6,7,8,9,10]
let r = arr.keys();
console.log(r); // Object [Array Iterator] {}


const arr1 = [1,2,3,4,5,6,7,8,9,10]
let s = arr1.keys();
console.log(s); // Object [Array Iterator] {}
console.log("keys of numbers are:"); // keys of names are:
for(let t of s) {
    console.log(t);
}
/* 
0
1
2
3
4
5
6
7
8
9
*/


const stationary = ["book","scale","pen","bag","pencil"];
let store = stationary.keys();
console.log(store); // Object [Array Iterator] {}
console.log("keys of stationary are:");
for(let key of store){
    console.log(key);
}
/*
0
1
2
3
4
*/