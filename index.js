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

let nameStr1 = "nami"
let nameStr2 = "luffy"

function getMiddle(str) {
  let code = Math.floor(str.length / 2)
  return str.length % 2 == 0 
    ? str.slice(code -1 , code + 1)
    : str.slice (code , code +1)
}

console.log(getMiddle(nameStr1))
console.log(getMiddle(nameStr2))

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

/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

const duplStr = 'aaBbcde' //aabb = 2

let countDupl = string => {
  // makes an array all lowercase and sorts the array in alpha order for easy comparrison
    let newString = string.toLowerCase().split('').sort();
    
    // this array will house the duplicated values so we can 
    // get the length of it (or the number of duplicated characters). 
    let newArray = []
    
    // set a loop for the array
    for(i = 0; i < newString.length; i++){
       // if the current element equals the following element the push it to the new array AND
       // ONLY if the new array doesn't already include the current element
       if(newString[i] === newString[i + 1] && !newArray.includes(newString[i])){
           // push elements to new array
           newArray.push(newString[i])
       }
    }
    // return the number of elements in the array to represent the number characters that were duplicated
    return newArray.length
}


log(countDupl(duplStr))

/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

my input are string letters,
ignore anything that is not a letter
return the positions of letters in the alphabet as string separated by a space
*/


let stringPractice = "The sunset sets at twelve o' clock."

const alphabetPosition = str => {
  let result = ""
  for(let i = 0; i < str.length ; i++){
    let code = str.toUpperCase().charCodeAt(i)
    if(code > 64 && code < 91  ) {
      result += (code - 64) + " "
    }
  } 
  return result.slice(0, result.length - 1)
}
///////////////////////////////////

const str_Ag31 = "The sunset"

let replaceStr2 = str => {
  let results = ""
  for(let i = 0; i < str.length ; i++){
    let code = str.toUpperCase().charCodeAt(i)
    if(code > 64 && code < 91 ) {
      results += (code - 64) + " "
    }
  }
  return results.trim()
}

log(replaceStr2('abcc'))
log(alphabetPosition(stringPractice))

/* STUDY THESE ONES
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}*/
//let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
/*function alphabetPosition(text) {
  const letters = text.split('')
  const result = letters.map((l, ix) => {
    const code = l.toUpperCase().charCodeAt() - 64
    if (l.length && code > 0 && code <= 26) {
      return code  
    }
  })
  return result.join(' ').replace(/\s+/g, ' ').trim()
}*/


/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/


let oddArr = [1,1,2];

function findOdd(arr) {  
  let newResult = []

  for(let i = 0; i < arr.length ; i++){
      if(arr.filter(a => a == arr[i]).length % 2 !== 0) {
        return arr[i]
      } 
    }  return 0 
}


log(findOdd(oddArr))

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

/*function findOdd(A) {
  for(var i = 0; i < A.length; i++){  
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i];
    }
  }
  return 0;
}*/


/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"*/
const strHashtag = "www.codewars.com#about"

let removeHashtag = str => {
  let position = str.indexOf("#")
  return str.contains("#") ? str.slice(0, position) : str

}

//console.log(removeHashtag(strHashtag))

function removeUrlAnchor(url){
  return url.split('#')[0];
}

/*Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"*/

function caffeineBuzz(n){
  let str
  if((n % 3 == 0 && n % 4 == 0)){
    str = "Coffee"
  } else if (n % 3 == 0) {
    str = "Java"
  } else {
    str = "mocha_missing!"
  }
   return (n % 3 == 0 && n % 2 == 0)
    ? str += "Script"
    : str
}

log(caffeineBuzz(9))

/*Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.*/

function toNumberArray(stringarray){
  return stringarray.map(a=> Number(a))
}

/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.*/

const wordsStr = 'take me to semynak'

let last = x => {
 return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

console.log(last(wordsStr))

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""*/
const strOrder = "is2 Thi1s T4est 3a"
const strOrder2 = "4of Fo1r pe6ople g3ood th5e the2"

let order = words => {
  let sep = words.split(" ")
  let orden = sep.sort((a,b) => Number(a.match(/\d+/)) - Number(b.match(/\d+/)) )
    return orden.join(" ")
}

log(order(strOrder))
log(order(strOrder2))

let ordTry = "is2"
log(ordTry.match(/\d+/)[0])


/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"*/

const middle3 = 'testing'
const middle4 = 'middle'

let getMiddle3 = str => {
  let middle = Math.floor(str.length / 2)
  return str.length % 2 == 0 
    ? str.slice(middle -1 , middle +1) 
    : str.slice(middle , middle +1 )
                
}

log(getMiddle3(middle3))
log(getMiddle3(middle4))


/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/

let exampleNonJaden = "How can mirrors be real if our eyes aren't real"

const toJadenCase1 = str => {
  let sol = str.split(" ").map(a => a[0].toUpperCase() + a.slice(1))
  return sol.join(" ")
}

log(toJadenCase1(exampleNonJaden))

//log(exampleNonJaden.split(" ")[0].slice(2))

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


function abbrevName3(name){
  let abr = name.toUpperCase().split(" ")
  return abr = abr[0][0] + "." + abr[1][0]
}

/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/

function rowSumOddNumbers(n) {
	return Math.pow(n,3)
}


/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned f*/

const phoneNumber = [7, 3, 2, 8, 5, 6, 1, 8, 5, 0]

let createPhoneNumber = arr => {
  let prefix = arr.slice(0,3).join("")
  let part1 = arr.slice(3,6).join("")
  let part2 = arr.slice(6,10).join("")
    return `(${prefix}) ${part1}-${part2}`
}

log(createPhoneNumber(phoneNumber))


/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

let quantityStr = 'man i need a taxi up to managua'

/*
function high(x){
  let solucion = ""
  for (let i = 0; i < x.length; i++) {
    let code = x.charCodeAt(i)
    if(code > 97 && code < 123  ){
      solucion += code - 96 
    }
  }
}*/

let arrTesthigh = ['man','a']

let high2 = x => {
  let newArr = []
  
  let solucion = 0
  let str = x.join("") 
  for (let i = 0 ; i< str.length ; i++) {
    let code = str.charCodeAt(i)
    solucion += (code - 96)
    } return solucion  

  //newArr.maxindex
}

console.log(high2(arrTesthigh))

/*function high(x) {

    const wordArray = x.split(' ');
    const wordScoreArray = wordArray.map(x => x.split('').reduce((sum, x) =>  sum + x.charCodeAt(0) - 96, 0));
    
    const max = Math.max(...wordScoreArray);
    const index = wordScoreArray.indexOf(max);

    return wordArray[index];
}*/
/*const score = (word) =>
  word
    .split('')
    .reduce((sum, letter) => sum + letter.charCodeAt(0) - 96, 0);

const high = (x) =>
  x
    .split(' ')
    .reduce((bestWord, currentWord) => {
      const wordScore = score(currentWord);
      const highestScore = score(bestWord);

      return wordScore > highestScore ? currentWord : bestWord;
    });*/

/*The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]*/

let smallInt1 = [1,2,3,4,5];

function removeSmallest1(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

const removeSmallest2 = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));

function removeSmallest3(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((a, b)=> b !== indexOfMin);
}

//Practicing Get Initials

function abbrevNamePractice(name){

  let code = name.toUpperCase().split(" ")
  return code[0][0] + "." + code[1][0]

}