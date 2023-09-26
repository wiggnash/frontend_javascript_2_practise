/*
-----> Concept
The filter() method basically outputs all the element object that pass a specific test or satisfies a specific function. 
The return type of the filter() method is an array that consists of all the element(s)/object(s) satisfying the specified function.

-----> Prob
Given an array of objects having properties, name and city. Use JavaScript filter()
function to return an array containing objects having either Bangalore or Hyderabad as their city property value.
Note: City name can be in lower case too. ex - bangalore, gwalior.
Tip:
As input string can be Bangalore or bangalore or BangaLORE, it’s alway better to convert the input string into lowercase and match
lowercase with lowercase. You can convert a string into lowercase using following Javascript code
*/

function filterByCity(arr) {
    const newArray = arr.filter((ele) => {
          let {city} = ele; //object deconstructing
          /* object deconstructing
          let obj = ele;
          city = obj.city;
          */
          city = city.toLowerCase();
          if( city === "bangalore" || city === "hyderabad"){
                return true;
          }else{
                return false;
          }
    })

    return newArray;
}