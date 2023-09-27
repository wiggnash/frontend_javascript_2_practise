// // Console is from BOM

// console.log("HELLO WORLD");

// // waiting for sometime -> this is provided by the BOM
// /**
//  * setTimeout() => This takes time in milli seconds 
//  */

// setTimeout(() => {
//     console.log("Hello world , This is coming deplayed")
// }, 5000) // waiting for 5  seconds to do the function inside 


// console.log("After the delay")

// /*
// JavaScript is single threaded langauge , which will have only one stack to execute the program 
// Javascript is synchronous in nature , from top to bottom , executes the program line by line 
// 1. Javascript executes the proragm line by line
// 2. when there are time taking functions which are provided by BOM , it sends the line to the browser memory for the execution
// 3. JS will execute all the lines and then it will go to the browser memory for any process
// 4. It pushes the process one by one to the task QUEUE
// 5. And according to the event loop , this taks queue is also executed 
// */

// console.log("Greetint Start");

// function showGreeting(name){
//     console.log("hello"+name+":");
// }

// console.log("Greeting Rohan");
// setTimeout(()=>{
//     showGreeting("Rohan"),5000
// });

// console.log("Greeting end");

// ====== SELECTING FROM THE NAME LIST ===========

const nameList = document.getElementById("name-list");
const extraItem = document.createElement("li");
console.log(nameList);
const childrens = nameList.children;
console.log(childrens); // HTML Collection looks like array but not array

const childrenArray = Array.from(childrens); // Converting the HTML Collection to the
//actual array 
console.log(childrenArray);


for(let i = 0;i < childrenArray.length;i++){
    const listItem = childrenArray[i];
    const text = listItem.innerText;
    console.log(listItem);
    console.log(text);
}
