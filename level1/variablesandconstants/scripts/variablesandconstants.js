// // let a = "hi";
// // a =3
// // console.log(a);


// // // constant means you cant change the value

// // const b = 3;
// // // b = "abs" // assignment to a constant variable
// // console.log(b);

// // // Note : use constants as often as possible to be clear from the beginning of your project
// let defaultResult = 0;
// let currentResult = defaultResult;

// let logEntries = []
// // function addition(n1,n2){
// //     return n1+n2;
// // }
// // alert(typeof(addition))

// // console.log(result); you cannot access local variables outside of the function
// // num1 and num2 are only available in function not outside 
// // you can write functions anywhere js will pull it to the top before execution

// // currentResult = addition(6,2);

// // addBtn.addEventListener('click',add(1,2)) not the right cuz, unless someone clicks on the button , we should not call the function


// function getUserNumberInput(){
//     return parseInt(userInput.value);
// }


// function createAndWriteLog(operator,resultBeforeCalc,calcNumber){
//     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//     outputResult(currentResult,calcDescription)

// }
// function pushlog(operator,initialResult,enteredNumber,currentResult){
//     const logEntry = {
//         operator : operator,
//         prevResult : initialResult,
//         number : enteredNumber,
//         result: currentResult,
//     };
//     logEntries.push(logEntry)
//     console.log(logEntries); //storing log entry
// }

// function addition(){
//     const enteredNumber = getUserNumberInput();
//     let initialResult = currentResult;
//     currentResult = currentResult + enteredNumber;
//     createAndWriteLog('+',initialResult,enteredNumber)
//     pushlog('ADD',initialResult,enteredNumber,currentResult)

//     // logEntries.push(enteredNumber);
 
// }
// function subtract(){
//     const enteredNumber = getUserNumberInput();
//     let initialResult = currentResult;
//     currentResult = currentResult - enteredNumber;
//     createAndWriteLog('-',initialResult,enteredNumber)
//     pushlog('SUB',initialResult,enteredNumber,currentResult)

// }

// function multiply(){
//     const enteredNumber = getUserNumberInput();
//     let initialResult = currentResult;
//     currentResult = currentResult * enteredNumber;
//     createAndWriteLog('*',initialResult,enteredNumber)
//     pushlog('MUL',initialResult,enteredNumber,currentResult)

// }

// function divide(){ 
//     const enteredNumber = getUserNumberInput();
//     let initialResult = currentResult;
//     currentResult = currentResult / enteredNumber;
//     createAndWriteLog('/',initialResult,enteredNumber)
//     pushlog('DIV',initialResult,enteredNumber,currentResult)

// }


// // function subtract(){
// //     const enteredNumber = getUserNumberInput();
// //     const calcDescription = `${currentResult} - ${enteredNumber}`;
// //     currentResult = currentResult - enteredNumber;
// //     outputResult(currentResult,calcDescription)
// // }
// // let a  = 0
// // alert(++a)
// subtractBtn.addEventListener('click',subtract)
// multiplyBtn.addEventListener('click',multiply)
// divideBtn.addEventListener('click',divide)

// addBtn.addEventListener('click',addition) // so here add is the address of the functon, means we are giving what to call when someone clicks on the button just like your calling bell and delivery guy



class Parent{
    constructor(a){
       let b = 2;
      console.log('parent',this);
    }

    welcome(){
        console.log('welcome world');
    }
  }
  
  class Child extends Parent{
    constructor(){
        super();
        this.b = 25  ;
        console.log('value of this is',this);
      }
    }

let p = new Child()
console.log(p.a);
console.log(p.welcome());

