// ======= PROMISES ===========
/**
 * Promise -> future value that will arrive after sometime 
 * Example : Going to pizza shop and we will get our pizza after some amount of time after the payment , 
 * Meanwhle we will do the other tasks 
    - Therefore when client send some request to the server
    - The server will give us a promise that it will provide the necessary information 
    - meanwhile the JS will not wait , it will continue doing its tasks
    - Whenever it gets the value from the server it will be used after that whereever we need it

    - The javaScript will be able to see the status of the promise ( pending(waiting for the value), fullfilled(good value), Rejected(bad value))

 */

// ========= FETCH() ===========
/**
 * There is only one way to connect from the client( browser ) to the server which is with fetch() , fetch is automatically gives promise
 * It will try to connect to the server and will get the response
 * Meanwhile it will provide us with the promise 
 * This will help the client to get the data 
 * Fetch is like a middle man between js and the server
 * Fetch is provided by the BOM or WebAPI
 */
// console.log("========== Fetching data from the Github ============== ");
// fetch("https://api.github.com/users").then(response => {
//    return response.json()
// }).then(data => console.log(data));

// ======= ACITIVITY ============
//  function addQuoteToDOM(quote){
//     const body = document.body;
//     const createH1Element = document.createElement("h1");
//     createH1Element.innerText = quote;
//     body.append(createH1Element);
//  }
//  function fetchQuote(){
//     fetch("https://api.kanye.rest/").then((response)=>{
//        return response.json()
//     }).then((data) => {
//        console.log(data);
//       const { quote } = data;
//        console.log(quote);
//       addQuoteToDOM(quote);
//     }).catch((error)=>{
//       console.log(error);
//       addQuoteToDOM("sorry");
// })
// }

//  fetchQuote();


// ========= SAME EXAMPLE WITH ASYNC AND AWAIT ( better promise look wise )=============
/*
======== WAYS TO CONSUME PROMISE
-----> WAY 1
1. .then() -> for good promise
2. .catch() -> for bad promise
-----> WAY 2 > ASYNC AWAIT 
1. ASYNC
2. AWAIT
*/

const quoteKanye = async() => {
   const url = "https://api.kanye.rest/";
   const res = await fetch(url);
   const data = await res.json();
   console.log(data);

}

quoteKanye();

const returnedPromise = quoteKanye();
console.log(returnedPromise); 


// ========== Adding to the DOM using JS ============= 

function addCityToDOM(id,city,description,image){
   let container = document.createElement("div");
   container.className = "col-4";
   let inner = `<img src="${image} class="img-responsive">`
   container.innerHTML = inner;

   document.getElementById("data").appendChild(container);
}

// ========== adding to dom using js =======

function addCityToDOM(id,city,description,image){
   let container = document.createElement("div");
   container.className = "col-4";
   container.id
   let inner = `<img src="${image} class="img-responsive">`
   container.innerHTML = inner;

   document.getElementById("data").appendChild(container);
}

let container = document.createElement("div");
container.className = "col-lg-3 col-12 col-md-6";
let inner = `<img src=${image} class="rounded">`;
container.innerHTML = inner;
document.getElementById("data").appendChild(container);