// Write a method which returns an array without the listed values
function removeListedValues(arr, without) {
    let newArray = arr.filter((item) => {
          if(without.includes(item)) return false;
          else return true;
    });

    return newArray;
}