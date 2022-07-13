//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
/*
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12 */

function makeNegative(num) {
  return (num < 0) ? num : -num
}

/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/

/*
function countPositivesSumNegatives(input) {
    let newArr = []  
  const positive = newArr.push( input.filter(a => a >= 0).length)
   positive.length
    const negative = input.filter(a => a<0)
      newArr.push( negative.reduce((actual, acc) => actual + acc))
    
    return newArr
} */

function countPositivesSumNegatives(input) {
    return (input === null || input < 1) ? [] :
    [input.filter(e => e > 0 ).length  ,input.filter(e => e < 0).reduce((acc,c) => acc + c,0)  ]
    ;
}
console.log(countPositivesSumNegatives([4,5,6,-4,-2]))

//explain it

//

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

return count of vowels in array
input will consist on lower cases letters only*/

let countVowels = (arr) =>{
 let solution = arr.includes("a","e","i","o","u").length
  return solution
}

console.log(countVowels(["a","b","c","d","e"]))

//finish and explain it
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2
Input: []
Output: 0
Input: [-2.398]
Output: -2.398
*/

let sumArrayElements = arr => arr.reduce((a, acc) => a + acc, 0)

console.log(sumArrayElements([2,3,4]))
console.log(sumArrayElements([]))

//Implement a function which convert the given boolean value into its string representation.//

function booleanToString(b){
  //your code here
  return b === 'true' ? 'true' : 'false'
}

console.log(booleanToString(false))

/*function booleanToString(b){
  return b.toString();
}
function booleanToString(b){
  return b ? 'true' : 'false';
}

*/

function century(year) {
  let cent = 0
  return Math.ceil(year/100);
}

let century2 = (year) => Math.ceil(year/100)
console.log(century2(1960))

