//====== PROMISES =========
/*
what is a fetch() function that is used to call the API and give you back the result 
we can create our own fetch()
========== PROMISE =========
1. fullfilled state = resolved
2. reject = error or no data
3. pending = waiting for the data to come 
=======> from pending we need to change the promise from pending to reject or resolved 
=============WHAT HAPPENS INSIDE FETCH =========
1. Connect to the server
2. Get the data or the error ==> Fetching the data from the server 
3. fetch is a promise , we know promise as fullfilled , pending and rejected 

============== ways to create promise ==============
1. constructor method : new Promise()
2. async await => this function will return back a promise 
*/

console.log("Creating promises")

// Creating our own fetch which will return an promise
/**
 * Takes back two things
 * 1. takes back a call back function
 */
const myFetch = new Promise((resolve,reject) => {

    //1. when the data comes successfull , we will resolve the data 
    // const data = 1000;
    // //as soon as we get the data , we need to resolve the promise that is been created 
    // // resolve(data);
    // reject("Data did not come ")

    try{
        const data = 1000;
        resolve(data);
    }catch(error){
        reject("data did not come",error);
    }
});


// we can use our fetch method anywhere : This is how we consume the promise , we can consume the promise with the help of async await also 

myFetch.then(data => {
    console.log("data debug : ",data);
});