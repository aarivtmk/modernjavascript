// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
// request.send()

// using fetch function
// const request = fetch('https://restcountries.eu/rest/v2/name/usa')
// console.log(request);

// PROMISE : An object that is used as a placeholder for the future result 
// of the aysnchoronous operation or 
// or
// ==> its like a container for an asynchoronous delivered value

// or 
// ===> a container for a future value like response coming from the ajax call 
// ADVANTAGES
// -->1 We no longer need to rely on events and callbacks passed into the aysnchoronous function
// to handle the aysnchoronous results
// --> 2. instead of nested callbacks,we can chain promises for a seq of async  operations
// means simply we can escapse callback hell   


// PROMISES LIFE CYCLE
// since promises work with async operations, they are time sensitive, and they change over time. here are the states of promises at different times and we call this as 
// LIFE CYCLE OF THE PROMISE

// 1. PENDING  - BEFORE THE FUTURE VALUE AVAILABLE 
// DURING THIS TIME, ASYNC WORKS IN THE BACKGROUND
// 2. SETTLED - WHEN PROMISE FINISHES  

// TWO TYPES
// 2.1 FULFILLED - SUCCESSFULLY RESULT IN A VALUE WE EXPECTED
// EG : API SUCCESSFULLY GOT THE DATA

// 2.2 REJECTED - ERROR HAPPENED
// EG : USER IS OFFLINE AND CANNOT CONNECT TO API


// NOTE : A PROMISE IS ONLY SETTLED ONCE EITHER IT IS FULFILLED OR REJECTED AND ITS IMPOSSIBLE TO CHANGE THE STATE

// THE ABOVE STATES ARE VERY IMPORTANT TO CONSUME A PROMISE
// MOST OF THE TIME, WE CONSUME PROMSISE BUT SOMETIMES WE NEED TO BUILD THE PROMISE ALSO
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data,className = ''){
    const html = `
    <article class="country ${className}">
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
}


//consuming the promise
// const request = fetch('https://restcountries.eu/rest/v2/name/usa')
// // console.log(request);

// const getCountryData = function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     // fetch runs in the background and lets assume success for a while. and to hadle this success state, we need a special method called then method with a callback function with one argument responnse
//     .then(function(response){
//         // console.log(response); // data is in body, so we need to call json method on this method
//         return response.json();
//         // console.log(response.json()); //jsom method available on all the methods which comes from fetch function.
//         // note : here json is also a promise annd so we have to handle it again assuming that that json promise got success state

//     })
//     .then(function(data){
//         console.log(data);
//         renderCountry( data[0])
//     })
// }


// simplified version
// const request = fetch('https://restcountries.eu/rest/v2/name/usa')
// country 1
// const getCountryData = (country) => {
// fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//  .then((response)=> response.json())
//  .then((data)=> {
//   renderCountry( data[0])

//   // country two
//  const neighbor = data[0].borders[0];
//  if(!neighbor) return;
//  else{
//    return 23;
// // fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//  }
// // NOTE : then method always retrurns a promise no matter
// // whether we return something or not, but if we return a value then it will become the fulfillment value
// })
// .then(data=>console.log(data))

// }

// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//    .then((response)=> response.json())
//    .then((data)=> {
//     renderCountry( data[0])
  
//     // country two
//    const neighbor = data[0].borders[0];
//    if(!neighbor) return;
//    else{
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//    }
//   })
//   .then(response =>response.json(),)
//   .then(data => renderCountry(data,'neighbor'))
//   //  this is called promises chaining
//   // always return a promise and then call outside line 118
//   };

// btn.addEventListener('click',()=>{

// getCountryData('usa');
// });

// handling rejected promise
// eg : losing internet connection
// NOTE : FIRST CALLBACK IN THEN = FULFILLED PROMISE
          // SECOND CALLBACK IN THEN THEN = FOR REJECTED PROMISE


// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response)=> response.json(), err => alert(err))
//     .then((data)=> {
//     renderCountry( data[0])
  
//     // country two
//     const neighbor = data[0].borders[0];
//     if(!neighbor) return;
//     else{
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//     }
//   })
//   .then(response =>response.json(), err => alert(err))
//   .then(data => renderCountry(data,'neighbor'))
//   //  this is called promises chaining
//   // always return a promise and then call outside line 118
//   };

// btn.addEventListener('click',()=>{

// getCountryData('germany');
// });

// prblem : writing everywhere
// solution : write globally

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend',msg);
  countriesContainer.style.opacity = 1;
}

// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response)=> response.json())
//     .then((data)=> {
//     renderCountry( data[0])
  
//     // country two
//     const neighbor = data[0].borders[0];
//     if(!neighbor) return;
//     else{
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//     }
//   })
//   .then(response =>response.json())
//   .then(data => renderCountry(data,'neighbor'))
//   .catch(err => {
//     console.log(`$(err)🙂 😸 ` )
//     renderError(`Internet Disconnected${err.message}. Try Again 🔥 🚒 🚒 `)
//   }) // it will error from anywhere
//   };

// btn.addEventListener('click',()=>{

// getCountryData('germany');
// });

// finally method

// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response)=>{
//       return response.json();
//     })
//     .then((data)=> {
//     renderCountry( data[0])
  
//     // country two
//     const neighbor = data[0].borders[0];
//     if(!neighbor) return;
//     else{
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//     }
//   })
//   .then(response =>response.json())
//   .then(data => renderCountry(data,'neighbor'))
//   .catch(err => {
//     console.log(`$(err)🙂 😸 ` )
//     renderError(`Internet Disconnected${err.message}. Try Again 🔥 🚒 🚒 `)
//   }) // it will error from anywhere
//   .finally(()=>{
//     // finally method workds regardless or successfull or failure promise
//     // eg: loading spinner
//   })
  
//   };

// btn.addEventListener('click',()=>{

// getCountryData('germany');
// });


// getCountryData('asdfasdfasdf'); //flaf of undefined error
// remember, fetch reject only when there is no internet
// how to handle these kind of errors

// solution : 

// handling error manually

// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response)=>{
//       console.log(response);
//       //  ok true status 200
//       if(!response.ok)
//       {
//         throw new Error(`Country not found ${response.status}. `)
//         // immediately terminates and replaces err.mess to country not found
//       }
//       return response.json();
//     })
//     .then((data)=> {
//     renderCountry( data[0])
  
//     // country two
//     const neighbor = data[0].borders[0];
//     if(!neighbor) return;
//     else{
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//     }
//   })
//   .then(response =>{
//     if(!response.ok)
//       {
//         throw new Error(`Country not found ${response.status}. `)
//         // immediately terminates and replaces err.mess to country not found
//       }
//       return response.json();})
//   .then(data => renderCountry(data,'neighbor'))
//   .catch(err => {
//     console.log(`$(err)🙂 😸 ` )
//     renderError(`Error Occured,${err.message}. Try Again 🔥 🚒 🚒 `)
//   }) // it will error from anywhere
//   .finally(()=>{
//     // finally method workds regardless or successfull or failure promise
//     // eg: loading spinner
//   })
  
//   };

// btn.addEventListener('click',()=>{

// getCountryData('USA');
// });

// WRITING A HELPER FUNCTION TO AVOID CODE REPETANCY

// const getJSON = function(url,errorMsg = 'Something went Wrong'){
//   return fetch(url).then(response => {
//     if(!response.ok)
//       throw new Error(`${errorMsg} ${response.status}. `)
//     return response.json();
//   })
// }

// const getCountryData = (country) => {
//     getJSON(`https://restcountries.eu/rest/v2/name/${country}`,'Country not found')
//     .then((data)=> {
//     renderCountry( data[0])
  
//     // country two
//     const neighbor = data[0].borders[0];
//     if(!neighbor) throw new Error('No neighbor found');
//     else{
//     return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbor}`,'Country Not Found')
//     }
//   })
//   .then(data => renderCountry(data,'neighbor'))
//   .catch(err => {
//     console.log(`$(err)🙂 😸 ` )
//     renderError(`Error Occured,${err.message}. Try Again 🔥 🚒 🚒 `)
//   }) // it will error from anywhere
//   .finally(()=>{
//     // finally method workds regardless or successfull or failure promise
//     // eg: loading spinner
//   })
  
//   };

// btn.addEventListener('click',()=>{

// getCountryData('india');
// });


// const whereAmI = (lat,long) =>{
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//   .then((response) =>{
//     if(!response.ok) throw new Error(`Problem with geocoding ${response.status}`)
//     return response.json()})
//   .then((data)=> {
//     console.log(data);
//     console.log(`I am in ${data.city} City , ${data.state} State, ${data.country}`);
//     return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//   })
//   .then(response => {
//     if(!response.ok) throw new Error ('Country not found')
//     return response.json()})
//   .then(data => {
//     data.forEach(d => {
//         renderCountry(d)
//     });
//     renderCountry(data[0]);
//   })
//   .catch(error => {
//     console.log(`${error}`);
//   })
// }

// whereAmI(13.0827,80.2707);

// 403 error which means it cannot handle more that one request a second