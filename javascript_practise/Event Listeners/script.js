console.log("hello from the other side ")

/*
======== EVENT LISTENERS =======
1. everything in the browser is a listners 
2. Browser will broadcast a event , this broadcast will come to html , js  and css 
3. we will have the choice to listen to broadcast or not , if we wantt to listen then we need to add listener with the help of js

// ==== WHERE WILL THE EVENT WILL START

1. Window <---- event start from here after the button is clicked , will move from one place to another 
2. Document 
3. body
4. div
5. button <----- when we click this ==> TARGET PHASE : will the target value from null -> button name ===

====> There are three phases 1. caputring phase  2. bubbling phase 3. targeting phase 
*/

const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
const counter = document.getElementById("count");

incrementButton.addEventListener("click",(event) => {
    console.log("Increment the click",event); // event here in a pointer event which have information about the target which will have info about which one we are clicking 
    counter.innerText = Number(counter.innerText)+1;
})

decrementButton.addEventListener("click",(event) => {
    console.log("Decrement the click");x
    counter.innerText = Number(counter.innerText)-1;
})



// ========= TYPIPNG EVENT LISTENING ==========
let payLoad = {
    name:"",
    password:""
}
const nameElement = document.getElementById("user-name")
const passwordElement = document.getElementById("password")
const loginButton = document.getElementById("login-button")

// you need to listen to the changes and put it in the object 

//this is an input event 
nameElement.addEventListener("input",(event) => {
    // event is an object -> which will have target
    const nameObj = event.target;
    const { value } = nameObj;
    payLoad.name = value;
})

nameElement.addEventListener("input",(event) => {
    // event is an object -> which will have target
    const passObj = event.target;
    const { value } = passObj;
    payLoad.password = value;
})
 
loginButton.addEventListener("click",() => {
    // fetch() use fetch() for sending the information to the server
    
    console.log(payLoad);
})