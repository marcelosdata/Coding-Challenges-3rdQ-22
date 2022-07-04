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