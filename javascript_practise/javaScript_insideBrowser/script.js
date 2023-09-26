console.log("This is the JS Code");

// --------- Element Getter -------------------
/**
 * Rule 1 : get elements => gives array like structure - which is an HTML Collection 
 */

// 1. Get element by ID
const element = document.getElementById("heading")
const paragraph = document.getElementById("para")

console.log(paragraph);
console.log(element);

// 2. Get elements by Class
// This gives out the HTML collection which looks like array

const classID = document.getElementsByClassName("head");
console.log(classID);



// 3. Get elements by Tag name

const tag = document.getElementsByTagName()


// 4. Query Selector => which uses CSS Selector 


//--------------------- EDIT ELEMEMT -------------------------------
// We can edit the things after the selection
/*
1. WE can do this with the help of innerText method
2. innerHTML is also there
*/  


// ---------------- CREATE and ADD ELEMENT -------------------
