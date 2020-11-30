// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const p = document.querySelector('.p');
// setTimeout(function(){
//     p.textContent = 'Lincolnstep Version 2';
//     console.log(p);
// },5000);
// p.style.color = 'red';
// a = 2
// console.log(a);


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// /////////////////////

const getCountryData = function(country){

/*
OLD METHOD
there are multiple ways to clearInterval ajax callls, but lets see how it works with XML first
*/

const request = new XMLHttpRequest();
// this is old school way, but in future you might actually need it.
// now lets see how ajax used to handles with events and callback functions
// 1. open the request
request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
// 2. send the request
// data = request.send(); //but it wont work, because result is not there, and it takes time means it is asynchornous code which runs in the background and remain code will start execution

request.send() //initiating request and once it is done, it will emit load event
console.log('outside',request.responseText); // it wonnt work
// solution :  register a callback for the load event
request.addEventListener('load',function(){
    // console.log(this.responseText); // this is json
    // we need to convert the above json string to a javascript object 
    // why : to access the data

    // NOTE : JSON. parse() takes a JSON string and transforms it into a JavaScript object. JSON. stringify() takes a JavaScript object and transforms it into a JSON string.

// array destructuring
    // let a = [1,2,3];
// const [b] = a;
// console.log(b);

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1) }M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend',html);
  countriesContainer.style.opacity = 1;
});

}


// 
// CORS : Cross Origin resource Sharing
// without cors set to true, you cannot access third party apps
// api : https://restcountries.eu/

// api end point : means the url we need to access the data
// https://restcountries.eu/rest/v2/name/{name}


getCountryData('Pakistan');
getCountryData('China');
getCountryData('uk');

// if you see here, order of cards changes based on the ajax call
// so basically they are running parallel 