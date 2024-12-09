import { leftSortedColumnNumbers } from  "./AscendingOrderSort.js";
import { rightSortedColumnNumbers } from "./AscendingOrderSort.js";

console.log("Left Sorted Column Length:", leftSortedColumnNumbers.length);
console.log("Right Sorted Column Length:", rightSortedColumnNumbers.length);



if (rightSortedColumnNumbers.length !== leftSortedColumnNumbers.length) {
    throw new Error("The arrays are not equal.");
} else {
    console.log("The arrays are equal.");
};

const subtractionResults = []; 

for ( let i=0; i < rightSortedColumnNumbers.length; i++) {
  const result = Math.abs(rightSortedColumnNumbers[i] - leftSortedColumnNumbers[i]);
  subtractionResults.push(result);
}

console.log("Subtraction Results:", subtractionResults);

const sum = subtractionResults.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers:", sum);