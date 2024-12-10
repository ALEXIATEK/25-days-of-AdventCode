import { leftSortedColumnNumbers, rightSortedColumnNumbers } from "../PartOne/AscendingOrderSort.js";
import { countOccurences } from "./CountOccurences.js";

function multiplyWithFrequency(leftSortedColumnNumbers, rightSortedColumnNumbers) {

     // get frequency map for the right list
    const result = countOccurences(leftSortedColumnNumbers, rightSortedColumnNumbers);
  
    // Multiply the number with its frequency in the right list
   
  
  
    // Calculate the sum of the numbers multiplied by their frequencies
    let sum = 0;
    for (let number in result) {
      sum += parseInt(number) * result[number];  // Add each result value to the sum
    }
  
    // Return the final sum
    return sum;
  }
  
  
  const multipliedSum = multiplyWithFrequency(leftSortedColumnNumbers, rightSortedColumnNumbers);
  
  console.log("Total sum of number * frequency:", multipliedSum);
  
