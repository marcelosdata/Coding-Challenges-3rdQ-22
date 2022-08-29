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
    [input.filter(e => e > 0).length, input.filter(e => e < 0).reduce((acc, c) => acc + c, 0)]
    ;
}
console.log(countPositivesSumNegatives([4, 5, 6, -4, -2]))

//explain it

//

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

return count of vowels in array
input will consist on lower cases letters only*/

let countVowels = (arr) => {
  let solution = arr.includes("a", "e", "i", "o", "u").length
  return solution
}

console.log(countVowels(["a", "b", "c", "d", "e"]))

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

console.log(sumArrayElements([2, 3, 4]))
console.log(sumArrayElements([]))

//Implement a function which convert the given boolean value into its string representation.//

function booleanToString(b) {
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
  return Math.ceil(year / 100);
}

let century2 = (year) => Math.ceil(year / 100)
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

let abbreviateName = (str) => {
  let abb = str.toUpperCase().split(" ")
  abb = abb[0][0] + "." + abb[1][0]

  return abb
}

console.log(abbreviateName(name))
console.log(abbreviateName('valentina salazar'))

let abbreviateTwoWords = (name, last) => {
  let abb = name.charAt(0).toUpperCase() + "." + last.charAt(0).toUpperCase()
  return abb
}

console.log(abbreviateTwoWords('Eichiro', 'oda'))

//codewars solution with map

function abbrevName3(name) {

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

console.log(abbrevName3('Naruto uzumaki'))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numbers = [4, 400, 500]

let squared2 = (arr) => arr.map(a => a * a)
console.log(squared2(numbers))

//Create a function that takes string
//Print the reverse of that string to the console
let reverseWords3 = str => {
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

let reverseSeq = n => {
  let arr = []
  for (let i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr
}

console.log(reverseSeq(7))

/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/
function find_average(array) {
  let sum = array.reduce((a, acc) => a + acc, 0)
  return array.length === 0 ? 0 : Math.round(sum / array.length);
}

console.log(find_average([20, 10, 10]))

//Return a secret message

function greet(name) {
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

let highAndLowNumbers = num => {
  //return typeof +num.split(" ")[0]
  let selection = num.split(" ")
  let filter = selection.map(a => Number(a)).sort((a, b) => b - a)
  return filter[0] + " " + filter[filter.length - 1]
}

log(highAndLowNumbers(numString))

//class constructor for netflix show
class NetflixShows {
  constructor(title, genere, mainActor, releaseDate) {
    this.title = title
    this.genere = genere
    this.mainActor = mainActor
    this.releaseDate = releaseDate
  }

  saveToPlaylist() {
    console.log('Saved to fav List')
  }
  slogan() {
    console.log(`The best movie this summer is ${this.title}`)
  }

  featuring() {
    alert(`Featuring ${this.mainActor} as a main role for ${this.title} on ${this.releaseDate}`)
  }
}

let secretVampires = new NetflixShows('Secret Vampires', ['Vampires', 'Terror'], 'Robert Pattison', 'August 24th 2022')

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//function, return a new list(map), strings filtered(use array method filter condition)
*/

let filter_list = [1, 2, 'aasf', '1', '123', 123]

let filter = arr => {
  let filtro = arr.filter(res => typeof res === 'number')
  return filtro
}

console.log(filter(filter_list))

/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"*/

let name1 = 'pedrosi'
let name2 = 'lola'

let getMiddleStr = str => {
  let middle = Math.floor(str.length / 2)
  return str.length % 2 === 0
    ? str.slice(middle - 1, middle + 1)
    : str.slice(middle, middle + 1)
}

log(getMiddleStr(name2))

/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let orden = numbers.sort((a, b) => a - b)
  return orden[0] + orden[1]
}

/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

let str1 = 'xoXo'
let str2 = 'oxo'
let str3 = "zpzpzp"

let XO = str => {
  let partir = str.split('')
  let seleccion_X = partir.filter(a => a.toLowerCase() === 'x'.toLocaleLowerCase()).length
  let seleccion_O = partir.filter(a => a.toLowerCase() === 'o'.toLocaleLowerCase()).length

  return seleccion_O === seleccion_X ? true : false
}

console.log(XO(str3))

const XO2 = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.*/

const trol = "This website is for losers LOL!"


function disemvowel2(str) {
  let vowels = ["a", "e", "i", "o", "u"] //vowels available
  return str
    .split('')  //split to get an array of strings separated 
    .filter(letter => !vowels.includes(letter.toLowerCase())) //filter applied to the splited str, then add bang op ! to say that is not there .. the include of filter iterator, lowercased
    .join('');   //finally joined to make a string again
}


console.log(disemvowel2(trol))

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(trol.includes("i"))

/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

let wild = "abcd"

let accum = str => {
  let res = str.toLowerCase().split('')
  let conteo = res.map((a,i)=> a.toUpperCase() + a.repeat(i) )
  return conteo.join("-")
}

console.log(accum(wild))

/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!"
-->"####################################man!"*/

const pass1 = 'banana'
const pass2 = 'ban'
const pass3 = 'getsuga-tenshou'

const maskify2 = str =>{
    let arr = str.split('')
  let trans1 = arr.slice(0,arr.length - 4)
  return arr.length < 4 ? str : trans1.map(a => '#').join('') + arr.slice(-4,str.length).join('')
}

log(maskify2(pass3))

function maskify1(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

function maskif3(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)*/

const iso1= 'aba'
const iso2 = 'Dermatoglyphics'
  const iso3 = 'moOse' 

function isIsogram(word){
  //...
    word = word.toLowerCase().split("").sort();
  for (var i=0;i<word.length-1;i++){
    if (word[i]==word[i+1]) return false;
    }
  return true;
}

console.log(isIsogram(iso1))

/**/

let arreglo = [1,2,3,4,]

function cubeOdd(arr) {
  let sumaOdd = 0
// insert code here >.<
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 2 !== 0){
    sumaOdd += Number(Math.pow(arr[i],3))
  }
}

return typeof sumaOdd == 'number' ? sumaOdd : 0;
}

console.log(cubeOdd(arreglo))

function cubeOdd2(arr) {
  arr = arr.filter((num) => {return num % 2 != 0});
  arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
  return isNaN(arr) ? undefined : arr;
}

const cubeOdd3 = arr => { 

//Checks if every element in the array doesn't return an undefined value and stores it in a variable
x = arr.every(y => !isNaN(y)) 

//Using the variable to get the element that is not an undefined value, we check if the array has a string in it or has ONLY numbers
//and the number should be a defined value, and the string an undefined value, so we check if it's defined and begin our process
//To remove all even numbers by filtering them and leaving only odd numbers
//Adding all the odd numbers up and cubing them at the same time
//And if there was a string in the array we return undefined
return x ? arr.filter(z => z % 2).reduce((a, b) => a + Math.pow(b, 3), 0) : undefined

}

/*Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false*/

//i receive a integer
// return true or false
//if the value n has a perfect square , like if 25 is 5*5, 

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(4))
console.log(isSquare(-1))
console.log(isSquare(20))

//console.log(Math.sqrt(25)%1)

/*
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
If begin value is greater than the end, function should returns 0

Examples
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

Count from begin to end with step increment.

sequenceSum(begin=0,end=45,step=5) 0+5+10+15+20+25+30+35+40+45 == 225

input a begin, and end and the step
return the sum of sequence. (I have to sum those sequence that reach the end "sequence")
non-negative and integer values are able

*/

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let suma = 0
  for(let i = begin; i <= end; i += step){
    suma += i
  }
  return suma
}

log(sequenceSum(2,6,2))

/*
*/

function addBinary(a,b){
  return (a+b).toString(2)
}

/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

const amigos = ["Ryan", "Kieran", "Jason", "Yous"]

const friend = friends => {
  let result = friends.filter( a => a.length === 4 )
  return result
}

const friend2 = friends => friends.filter( a => a.length === 4 )

log(friend(amigos))

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const words = 'bitcoin take over the world maybe who knows perhaps'
function findShort(s){
  let arr = s.split(' ').sort((a,b) => a.length - b.length )
    
  return arr[0].length
}

log(findShort(words))

/*
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.*/

const value = [1,2,3,4,5]

function minMax(arr){
  let orden = arr.sort((a,b) => a - b)
  return [orden[0],orden[orden.length - 1]]
}

log(minMax(value))

/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3*/

const strayArray = [17, 17, 3, 17, 17, 17, 17]

const findStray = numbers => {
  //let orden =  arr.sort((a,b)=> a - b).
  return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
}

console.log(findStray(strayArray))

//console.log(strayArray.length)


//Practice string methods this week
/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.*/

const fbNames = ["Alex","Valen", "Jacob", "Mark", "Max"]
const fbNames1 = []

function like(names) {
  
  const likeThis = "likes this"
  if(names.length == 0) {
    return "no one likes this"
  } else if(names.length == 1 ){
    return `${names[0]} ${likeThis}`
  } else if(names.length == 2 ){
    return `${names[0]} and ${names[1]} ${likeThis}`
  } else if(names.length == 3 ){
    return `${names[0]}, ${names[1]} and ${names[2]} ${likeThis}`
  } else if(names.length >= 4 ) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others ${likeThis}`
  }
}

console.log(like(fbNames))