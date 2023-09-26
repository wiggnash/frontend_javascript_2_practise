// Map is used to change the array into a new array without chaning the original array ==> returns a new array
// NOTE : forEach will be used to change the array into a new array buy changing the original array itself ===> Doesnt give a new array 

/**
 * Given an array of strings, use the JavaScript map() function to return an array containing length of string at each index.
 *  The input array can be of length 0
 */

function findLength(arr) {
    arr = arr.map((str) => {
          if(str) return str.length;
          else return 0;
    })
    return arr;
}
