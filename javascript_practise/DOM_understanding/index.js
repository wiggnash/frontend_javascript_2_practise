console.log("Hello, from JS!");

const h1Element = document.getElementsByTagName("h1");
console.log(h1Element);

const firstElementH1Element = h1Element[0];
console.log(firstElementH1Element);
console.log(firstElementH1Element.innerText);

firstElementH1Element.innerText = "Changing this tag right now";
console.log(firstElementH1Element.innerText);

// ======== CREATING ELEMENTS ====================
/**
 * ------- this used here
 * createElement()
 * getElementById()
 * appendChild()
 * innerText -- USED TO UPDATE 
 */

function addNewFact(factText){
    const pElement = document.createElement("p")
    pElement.innerText = factText;

    const divElement = document.getElementById("facts-list")
    divElement.appendChild(pElement);
}

addNewFact("innerText property refers to the text inside an element");
addNewFact("append() or appendChild() methods can add a new child element");

// =========== OVERWRITING ELEMENTS ( REPLACING THE EXISTING ELEMENT )===========
/**
 * 
 */

