/*
ARRAY SLICE() METHOD :
It returns a shallow copy of a portion of an array into a new array object.
Slice takes index values for both start & end.
Starting value always take the value from where it should be sliced , ending value must always have a next value of index which must be added to the sliced array.
Start from ===> 0,1,2,3,4,5....
End from ===> 1,2,3,4,5,6.... 
*/

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Gives a whole array
console.log(arr.slice()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(4, 8)); // [ 4, 5, 6, 7 ]



        //           0             1       2     3      4
let names = ["sakina", "banu", "husna", "zarina", "erum"];
        //            1           2       3     4      5 
console.log(names.slice(0, 2)); // [ 'sakina', 'banu' ]


// Negative value :

// removes last array
console.log(names.slice(0,-1)); // [ 'sakina', 'banu', 'husna', 'zarina' ]
// removes last 2 array's
console.log(names.slice(0,-2)); // [ 'sakina', 'banu', 'husna' ]
  // Gets last 2 arrays 
console.log(names.slice(-2)); // [ 'zarina', 'erum' ]
