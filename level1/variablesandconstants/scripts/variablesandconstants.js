// let a = "hi";
// a =3
// console.log(a);


// // constant means you cant change the value

// const b = 3;
// // b = "abs" // assignment to a constant variable
// console.log(b);

// // Note : use constants as often as possible to be clear from the beginning of your project
let defaultResult = 0;
let currentResult = defaultResult;

function addition(n1,n2){
    return n1+n2;
}
// alert(typeof(addition))

// console.log(result); you cannot access local variables outside of the function
// num1 and num2 are only available in function not outside 
// you can write functions anywhere js will pull it to the top before execution

// currentResult = addition(6,2);

// addBtn.addEventListener('click',add(1,2)) not the right cuz, unless someone clicks on the button , we should not call the function

addBtn.addEventListener('click',addition) // so here add is the address of the functon, means we are giving what to call when someone clicks on the button just like your calling bell and delivery guy
outputResult(currentResult,99)
