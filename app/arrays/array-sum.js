export default function (array) {

// declare a constant for the length of the array
const length = array.length;
// declare a variable for the sum of the array
let sumArray = 0;

  for (let i = 0; i < length; i++) {
    sumArray += array[i];  }

    // return the value of sumArray
    return sumArray;
}
