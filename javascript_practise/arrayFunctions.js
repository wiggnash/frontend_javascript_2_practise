/*
Create an arrow function named modify() which takes an integer array as input and modify the array as follows -
If an element of the array is prime, then add one to the element
If an element of the array is not prime, then multiply the element by 2.
Return the modified array.
*/

let modify = (array) => {
    const modifiedArray = array.map((item) => {
          if(isPrime(item)){
                return item+1;
          }
           
                
          else {
                return 2 * item;
          }
                
    });

    return modifiedArray;
}

function isPrime(n) {

if(n == 0 || n == 1) {

  return false;

}

for(let i = 2 ; i*i <= n ; i++) {

  if(n%i == 0) {

      return false;

  }

}

return true;
}