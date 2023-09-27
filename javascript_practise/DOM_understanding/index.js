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

// =========== OVERWRITING ELEMENTS ( REPLACING THE EXISTING ELEMENT ) ===========
/**
 * innerHTML
 */

const factsList = document.getElementsByTagName("facts-list");
factsList.innerText = "<p>we are adding something </p><p>this is the second item in the list</p>"
// const firstElementH1Element = h1Element[0];
// console.log(firstElementH1Element);
// console.log(firstElementH1Element.innerText);

// ============== CREATING MULTIPLE DOM ELEMENTS ============
/**
 * 
 */

const tableElementDiv = document.getElementById("table-div")
console.log(tableElementDiv);
tableElementDiv.innerHTML = `
<table border="1" width="400px"> 
<thead> 
    <tr>
        <td>Id</td>
        <td>Name</td>
    </tr>
</thead>
<tbody>
    <tr>
        <td>1</td>
    <td>Ramesh</td>
    </tr>
</tbody>
</table>

`

// creating table with a function


function loadTable() {
    // Create <table> element with styles
    let table = document.createElement("table");
    table.setAttribute("border", "solid");
    table.setAttribute("width", "400px");
    // Create header row and append it to the <table> element
    let thead = document.createElement("thead");
    thead.innerHTML = `
  
      <tr>
          <th>Id</th>
          <th>Name</th>
      </tr>
  
    `;
    table.append(thead);
    // Create body element
    let tbody = document.createElement("tbody");
    // Create a table row and append it to the body
    let tRow = document.createElement("tr");
    tRow.innerHTML = `
      <td>1</td>
      <td>Rajesh</td>
    `;
    // Append <tr> element to <tbody>
    tbody.appendChild(tRow);
    // Append <tbody> element to <table>
    table.appendChild(tbody);
    // Set newly created <table> element inside the div container
    document.getElementById("table-div").append(table);
  }
  loadTable()
  