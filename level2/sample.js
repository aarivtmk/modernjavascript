
// function constructors
// protype
// protype chain
// passing function as parameter/argument
//functions returns in functions
// IIFE - to improve data privacy
// closures
// bind/call/apply





// what is object

// var object = {
//     key: value
// }

// var john = {
//     name: 'john doe',
//     yearOfBirth: 1998,
//     job: 'teacher',
//     calculateAge: function () {
//         this.age = 2020 - this.yearOfBirth;
//     }
// }
// console.log(john);
// john.calculateAge();
// console.log(john);

// var Student = function (name, rollno, dob) {
//     this.name = name;
//     this.rollno = rollno;
//     this.dob = dob;

// }


// Student.prototype.calculateAge = function () {
//     this.age = 2020 - this.dob;

// }

// Student.prototype.college = 'MIT';

// var s1 = new Student('manishkumar', 121, 1997);

// console.log(s1);

// var s2 = new Student('mohammed', 121, 1990);
// console.log(s2);



// functions passing as argument 

// var years = [1998, 2005, 1997, 1960];

// function calculate(yearsArray, fun) {
//     var arrRes = [];
//     for (var i = 0; i < yearsArray.length; i++) {
//         arrRes.push(fun(yearsArray[i]))
//     }

//     return arrRes;
// }

// function calculateAge(ele) {
//     return 2020 - ele;
// }


// var agesofPeople = calculate(years, calculateAge);
// console.log(agesofPeople);




// functions return functions
// program for an interview based on the job title

function interviewQuestion(job) {
    if (job == 'designer') {
        return function (name) {
            console.log('hey ' + name + ' , what do you mean by design?');

        }

    }

    else if (job == 'teacher') {
        return function (name) {
            console.log('hey ' + name + ' , what do you teach?');

        }
    }

    else if (job == 'software engineer') {
        return function (name) {
            console.log('hey ' + name + ' , are you a front end or backend engineer?');

        }
    }

    else {
        return function (name) {
            console.log('hey ' + name + ' ,what do you do?');

        }
    }

}
// var tQ = interviewQuestion('teacher');
// tQ('manish');

// var designerQuestion = interviewQuestion('designer');


// designerQuestion('sandeep');

// IIFE - immediately invoked function expression used for data privacy

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 6);

// }
// game()


(function () {
    var score = Math.random() * 10;
    console.log(score >= 6);
})();


// closures

// an inner function will always have access to variables and Parameters of it outer function
// even after the outer function returned

// find year remain for retirement

// function retirement(retirementAge) {
//     var a = 'years left for retirement';
//     return function (yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);

//     }
// }


// // find retirement for indian

// var retirementIndian = retirement(65);
// retirementIndian(1960);


// // find retirement for German
// var retirementGerman = retirement(70);
// retirementGerman(1960);


// call / apply /bind - method borrowing

var s1 = {
    name: 'stevejobs',
    age: 22,
    job: 'student',
    presentation: function (style, timeOftheDay) {
        if (style == 'formal') {
            console.log('Good' + timeOftheDay + ' I am ' + this.name);

        }

        else {
            console.log('Hey friends' + ' I am ' + this.name + '. have a nice ' + timeOftheDay);

        }
    }
}
var s2 = {
    name: 'jack dorsey',
    age: 23,
    job: 'student',
}


// so here if you want to call presentation from s2, you have to borrow it

s1.presentation.call(s2, 'formal', 'Evening');

// what is apply
// you have to give input in the form of array
// s1.presentation.apply(s2, ['friendly', 'afternoon']);

// bind - instead of calling, here we copy the function

var s2function = s1.presentation.bind(s2, 'formal', 'Evening');
s2function()









var john = {
    name: 'john doe',
    yearOfBirth: 1997,
    job: 'teacher'
};

// oop in javascript

// inorder to create a blueprint, what we do here is we use function constructor to create a blueprint

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     this.calculateAge = function () {
//         console.log(2020 - this.yearOfBirth);

//     }
// }

// now if you see here every object has this function calculateage even though all 
// are not using. ofcourse it is one line so its fine, but what if we have 100 lines of code in this funtion? its pretty tough right? and so now here comes the new concept and we call it prototype

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }


// Person.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
// }

// // adding properties
// Person.prototype.lastname = 'Doe';

// var john = new Person('john', '1998', 'teacher');
// john.calculateAge()

// var steve = new Person('stevejobs', '1997', 'ceo');
// steve.calculateAge()
// var john = new Person('john', '1998', 'teacher');


// console.log(john.lastname);
// console.log(john);


// creating objects

// Object.create

var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);

    }
};

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1970;
// john.job = 'teacher';

// var jack = Object.create(personProto, {
//     name = { value: 'jack' },
//     yearOfBirth = { value: 1970 },
//     job = { value: 'scientist' },

// });


// primtives vs objects


// primitives vs Objects

// primitives contains value copy
// objects only reference


var a = 23;
var b = a;

a = 46;
console.log(a);
console.log(b);



// Objects

var obj1 = {
    name: 'John',
    age: 26,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// functions

var age = 27;
var obj = {
    name: 'Aariv',
    city: 'Hyd',
};



function change(a, b) {
    a = 28;
    b.city = 'Silicon Vally'
}

change(age, obj);
console.log(age);
console.log(obj.city);


// functions in depth  - passing functions as arugument and we call it first class functions

var years = [1997, 1998, 1999, 2000, 2001];


function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}


function isValidAge(el) {
    return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);


var fullages = arrayCalc(ages, isValidAge);
console.log(fullages);

var validAgeIndia = arrayCalc(ages, isValidAge.bind(this, 18));
console.log(ages);

console.log('valid age of indians', validAgeIndia);

var validAgeJapan = arrayCalc(ages, isValidAge.bind(this, 24));
console.log(validAgeJapan);


// functions returning function
function interviewQuestion(job) {
    if (job == 'designer') {
        return function (name) {
            console.log(name + ', can you explain what is a design?');

        }
    }

    else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what subject you teach?');

        }
    }

    else {
        return function (name) {
            console.log(name + ', what do you do?');

        }
    }

}


var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Jack');

interviewQuestion('teacher')('dorsey');


// IIFE - immediately invoked function expressions

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);

// }

// game();

// iife

// data privacy

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);

})();

// console.log(score);

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);

})(5);


// closures

// function that return no of years remain to retire

// function retirement(retirementAge) {
//     var a = 'year left until retirement';
//     return function (yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);

//     }
// }

// var retirementUS = retirement(66);
// retirementUS()



