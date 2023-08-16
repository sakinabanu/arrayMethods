/*
ARRAY POP() METHOD :
The pop() method removes the last element from an array and returns that element.
It removes and returns the last array element.
*/


let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
console.log(cities); // [ 'Madrid', 'New York', 'Kathmandu', 'Paris' ]
// remove the last element
let removedCity = cities.pop();
console.log(cities); // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity); // Paris


let number = [1,2,3,4,5,6,7,8,9];
console.log(number); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
number.pop();
console.log(number); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
let delnumber = number.pop();
console.log(number); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(delnumber); // 8