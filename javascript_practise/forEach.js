/*
ForEach in Javascript
There are various ways to loop through an array in Javascript. The forEach() method calls the provided function once for each element of the array.
The provided function may perform any kind of operation on the elements of the given array.
*/

function convertArray(arr) {
    arr.forEach((ele,index) => {
          arr[index] = (index+1) * ele;
    })
    
    return arr;
}