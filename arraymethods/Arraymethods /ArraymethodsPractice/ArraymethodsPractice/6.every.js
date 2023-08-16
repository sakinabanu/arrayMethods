/*
ARRAY EVERY() METHOD :
This array Method Checks the all the elements in the arrays and passes the test of the function only if every element is same then it returns 'true' or else it gives 'false'.
In this method it gives boolean values in True/False.
Every method will give True if the callback function gives True.
Checks whether the conditions are same or not in the given parameter then gives true or false.
Every will return true if all every predicate is true.
'Console log' in every doesnot give exact answer so we use 'return' always.
*/
// 1st example :

let b = [1, 2, 3, 4, 5,]
let y = b.every((a) => {
     return a === "3"; 
});
console.log(y); //false


const arr = [2, 4, 6, 8, 10];
console.log(arr.every((x) => x % 2 == 0)); // true


const numbers=[2,2,2,2,2,2];
const ans=numbers.every((x)=>{
    return x==2;  
})
console.log(ans); //true