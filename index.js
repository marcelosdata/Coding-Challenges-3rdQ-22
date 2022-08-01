const log = arg => console.log(arg)

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

/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

take a single string separated by space
toCapitalCase and a dot between them
*/
const name = 'Marcelo Salazar'

let abbreviateName = (str) =>{
  let abb = str.toUpperCase().split(" ")
  abb = abb[0][0] + "." + abb[1][0]

  return abb
}

console.log(abbreviateName(name))
console.log(abbreviateName('valentina salazar'))

let abbreviateTwoWords = (name,last) => {
  let abb = name.charAt(0).toUpperCase() + "." + last.charAt(0).toUpperCase()
  return abb
}

console.log(abbreviateTwoWords('Eichiro','oda'))

//codewars solution with map

function abbrevName3(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

console.log(abbrevName3('Naruto uzumaki'))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numbers = [4,400,500]

let squared2 = (arr) => arr.map(a => a*a )
console.log(squared2(numbers))

//Create a function that takes string
//Print the reverse of that string to the console
let reverseWords3 = str =>{
  let rev = str.split('').reverse().join('')
  console.log(rev)
}

reverseWords3('Mamalucha')


//Create a function that takes in a string
//Alert if the string is a palindrome or not

let palindrome2 = str => str === str.split('').reverse().join('') ? alert(`${str.toUpperCase()} it's a Palindrome`) : alert("It's not a Palindrome")


palindrome2('polo')
palindrome2('ama')

/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

let reverseSeq = n =>{
  let arr = []
  for(let i=n;i>0;i--){
  arr.push(i)    
  }
    return arr
}

console.log(reverseSeq(7))

/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/
function find_average(array) {
  let sum = array.reduce((a,acc) =>a + acc,0)
  return array.length === 0 ? 0 : Math.round(sum/array.length) ;
}

console.log(find_average([20,10,10]))

//Return a secret message

function greet(name){
  return name === 'Denisse' ? "Hello, my love!" : `Hello, ${name}!`  
}

console.log(greet('Adri'))
console.log(greet('Denisse'))

/*DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/
//hacer un join por espacios, buscar la manera de que queden separados por como como un array, convertirlos a numeros, ordenarlos de menor a mayor con sort, luego elegir el del primer indice y el ultimo, convertirlos a string y separarlos por un espacio al retornar

const numString = '4 5 3 11 20 10'

let highAndLowNumbers = num =>{
  //return typeof +num.split(" ")[0]
  let selection = num.split(" ")
  let filter =  selection.map(a =>Number(a)).sort((a,b) => b-a)
  return filter[0] + " " + filter[filter.length -1]
}

log(highAndLowNumbers(numString))

//class constructor for netflix show
class NetflixShows {
  constructor(title,genere,mainActor,releaseDate){
    this.title = title
    this.genere = genere
    this.mainActor = mainActor
    this.releaseDate = releaseDate
  }

    saveToPlaylist(){
      console.log('Saved to fav List')
    }
     slogan(){
      console.log(`The best movie this summer is ${this.title}`)
    }

     featuring(){
      alert(`Featuring ${this.mainActor} as a main role for ${this.title} on ${this.releaseDate}`)
    }
}

let secretVampires = new NetflixShows('Secret Vampires',['Vampires','Terror'],'Robert Pattison','August 24th 2022')

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//function, return a new list(map), strings filtered(use array method filter condition)
*/

let filter_list = [1,2,'aasf','1','123',123]

let filter = arr => {
  let filtro = arr.filter(res =>typeof res === 'number' )
  return filtro
}

console.log(filter(filter_list))

/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"*/

let name1 = 'pedro'
let name2 = 'lola'

let getMiddleStr = str => {
  let middle = Math.floor(str.length/2)
  return str.length % 2 !== 0 
    ? str.slice(middle,middle +1)
    : str.slice(middle -1,middle +1)
}

console.log(getMiddleStr(name1))
console.log(getMiddleStr(name2))

//console.log(Math.floor(name1.length/2))