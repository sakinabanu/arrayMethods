/*
ARRAY CONSTRUCTOR() METHOD :
Returns the constructor function for the array.
Constructor is used for knowing the datatypes.
It differentiates array and object and give their exact datatype.
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.constructor);//[Function: Array]



const obj={
    key1:"value1",
    key2:"value2"
}
console.log(obj.constructor); //[Function: Object]

// It is not highly used.
// It's only used to know which is array & which is object. 

