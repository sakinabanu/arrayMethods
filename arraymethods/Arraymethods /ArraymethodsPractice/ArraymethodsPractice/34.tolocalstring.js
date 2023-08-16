/*
ARRAY TOLOCALSTRING() METHOD :
The toLocaleString() method returns a string representing the elements of the array in a particular local Array and turns it to String
It doesnot change the Original Array.
It returns string representing the elements of array.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(arr.toLocaleString()); // 1,2,3,4,5,6,7,8,9,10


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    console.log(arr1.toLocaleString("en-IN", {
    style : "currency",
    currency : "INR",
})
); // ₹1.00,₹2.00,₹3.00,₹4.00,₹5.00,₹6.00,₹7.00,₹8.00,₹9.00,₹10.00



// request a currency format :
const number = 123456.789;
  // USA unit
console.log(
    number.toLocaleString("de-DE", { style: "currency", currency: "EUR" })); // 123.456,79 €
  
  // the Japanese yen doesn't use a minor unit
  console.log(
    number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })); // ￥123,457
  
  // limit to three significant digits
  console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 })); // 1,23,000
  
  // German uses comma as decimal separator and period for thousands
  console.log(number.toLocaleString("de-DE")); // 123.456,789
  
  // Arabic in most Arabic speaking countries uses Eastern Arabic digits
  console.log(number.toLocaleString("ar-EG")); // ١٢٣٤٥٦٫٧٨٩
  
  // India uses thousands/lakh/crore separators
  console.log(number.toLocaleString("en-IN")); // 1,23,456.789
  
  // the nu extension key requests a numbering system, e.g. Chinese decimal
  console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec")); //  一二三,四五六.七八九
  
  // when requesting a language that may not be supported, such as
  // Balinese, include a fallback language, in this case Indonesian
  console.log(number.toLocaleString(["ban", "id"])); //  123.456,789