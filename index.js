// comment
/* comment*/

let myName;

var a;
a = 7;

var a;
a = 7;
var b;
b = a;

var a = 9;

var myFirstName = "Pavel";
var myLastName = "Kuharchik";

var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow";

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

const sum = 10 + 10;

const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;

let myVar = 87;
myVar++;

myVar--;

const ourDecimal = 5.7;
const myDecimal = 5.7;

const product = 2.0 * 2.5;
const quotient = 4.4 / 2.0;

const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr = "FirstLine\n\t\\\SecondLine\nThirdLine";

const myStr = "This is the start." + " This is the end.";

let myStr = 'This is the first sentence.';
myStr += ' This is the second sentence.';

const myName = "PavelKuh";
const myStr = "Hello, " + myName + " is freeCodeCamp, how are you?.";

const someAdjective = "awesome";
let myStr = "Learning to code is ";
myStr += someAdjective;

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

let myStr = "Jello World";
myStr = "Hello World";

const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];

const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length-1]

const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2];

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = `${myAdjective } + ${myNoun } + ${myVerb } + ${myAdverb}`;

const myArray = ['One', 1];

const myArray = [['One', 1], ['two', 2]];

const myArray = [50, 60, 70];
const myData = myArray[0];

const myArray = [18, 64, 99];
myArray[0] = 45;

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
const myData = myArray[2][1];


const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
  
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

const myList = [
  ["Milk", 2.5],
  ["Pasta", 10],
  ["Coca-Cola", 4],
  ["Tomato", 6],
  ["Juse", 5]
  ];

  function reusableFunction() {
    console.log("Hi World")
  }
  
  reusableFunction()

  function functionWithArgs(a,b) {
    console.log(a+b)
  }
  functionWithArgs(1,2) 
  functionWithArgs(7,9)
  
  function timesFive(numb) {
    return numb * 5
  }
  
  timesFive(5)

  let myGlobal = 10;

function fun1() {
oopsGlobal = 5
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
  
function myLocalScope() {
let myVar = 5;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}

myOutfit();

let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
 sum = sum + 5;
}
addThree();
addFive();


let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7)


