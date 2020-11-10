// single line comment

/*
first line
second line
*/

// print
// console.log('Hello world');

// variables
// int and float in c
// but in JS, it is just number
/*
var $age = 27.5;
console.log("my age is ", $age);
console.log(typeof($age));

var name = "Shrikanth";
var age = 23;
var college = "Boston"

console.log(" Hi my name is " + name + " my age is " + age + ". and I am from " + college);

console.log("hi my name is",name,"my name is",age);

var sum = 83+4*5-72/2**3;
console.log(sum);

var sum1 = 627-3*(14-4**2+17)**2/(25-16);
console.log(sum1);
*/
// datatypes  in details
// datatypes or primitives
/*
datatypes in js :
1. Number : int and float
2. String 
3. Undefined
4. Null
5. Boolean
*/

// var a = 2;
// console.log(typeof a);

// var b = 23.5;
// console.log(typeof b);

// var c = '2';
// console.log(typeof c);

// var d;
// // you are not caring about the variable
// console.log(typeof d);

// // null : you are saying it has nothing
// var e = null;
// console.log(typeof e);
// var f = true;
// console.log(typeof f);

// var g = [1, 2, 3, 'a'];
// console.log(g);
// console.log(typeof g);

// var n = 23;
// console.log(window.n);
// console.log(window);

//  strings
let ab = 'xyz';
console.log(ab[1]);
console.log(ab.charAt(1));
let A = 5;
// using js template literal
// lines breaks allowed in template literal

console.log(`the answer is ${A+1}`);
console.log(`the answer is 

${A+1}`);

console.log('the answer is '+
A);
console.log('the answer is \n'+
A);

console.log('this is steve \'s phone');
console.log('this is steve \\ phone');

// comparing strings
let a = 'z';
let b = 'y';
if (a < b)
console.log("a is less than b");
else if (a > b)
console.log("b is less than a");
else
console.log("a is equal to b");

// functions
// 1. define function
// 2. call function
let defaultResult = 0;
let currentResult = defaultResult;

function addition(n1,n2){
    return n1+n2;
}

// console.log(result); you cannot access local variables outside of the function
// num1 and num2 are only available in function not outside 
// you can write functions anywhere js will pull it to the top before execution
currentResult = addition(6,2);
outputResult(currentResult,99)


// scope
// global variable
// local variable

let userName = 'a';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'b';
greetUser('a');

// return in detail
// return; exit function
// having a second return statement makes no sense