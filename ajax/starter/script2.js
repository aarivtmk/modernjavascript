
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const inputSearch = document.getElementById('searchbar');
// if you see here, order of cards changes based on the ajax call
// so basically they are running parallel 
// solution : lets create a sequence of ajax calls

// if you see borders key eg:     "borders": ["CAN", "MEX"],
// canada and mexico are the borders of the usa, so what we will do now is,
// after the first ajax call,we will get the border and we will also render the neighboring country besides the original country

// so in this case the second ajax call depends on the first ajax call
// so without the first ajax call, we would not know what to call for the second ajax call

// /////////////////////

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


const getCountryAndNeighborData = function(country){
    // AJAX CALL COUNTRY 1
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
request.send() //initiating request and once it is done, it will emit load event
console.log('outside',request.responseText); // it wonnt work
request.addEventListener('load',function(){

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // render country 1
    renderCountry(data)

    // get the neighbor country 2
    const neighbor = data.borders;
    for (let i=0; i<neighbor.length;i++){
        console.log(neighbor[i]);
    if (!neighbor[i]) return;
    else {
        // ajax call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET',`https://restcountries.eu/rest/v2/alpha/${neighbor[i]}`);
        request2.send();

        request2.addEventListener('load',function(){
            // console.log(this.responseText);
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            renderCountry(data2,'neighbor')
        })
    }
}

});

}

let c;
btn.addEventListener('click',()=>{
    c = inputSearch.value;
    getCountryAndNeighborData(c)

});

// so now what if you want to find the neighbor of the neighbor
// then we will end up with nested callbacks, and we call this as callback hell

// callback hell : to execute nested callbacks in a sequence

// eg : 

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//         },1000);
//     },1000);
    
// },1000);

// callback hell is not used cuz of the complexity in writing  as it is ambiguos
// solution : PROMISES  
