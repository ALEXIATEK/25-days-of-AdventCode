import { leftSortedColumnNumbers, rightSortedColumnNumbers } from "../PartOne/AscendingOrderSort.js";

function multiplyWithFrequency(leftSortedColumnNumbers, rightSortedColumnNumbers) {
    const frequencyMap = {};
  
    // Create a frequency map for the right list
    rightSortedColumnNumbers.forEach(number => {
      frequencyMap[number] = (frequencyMap[number] || 0) + 1;
    });
  
    const result = {};
  
    // Multiply the number with its frequency in the right list
    leftSortedColumnNumbers.forEach(number => {
      const frequency = frequencyMap[number] || 0;  // Get the frequency or 0 if not found
      result[number] = number * frequency;  // Multiply the number by its frequency
    });
  
    // Calculate the sum of the numbers multiplied by their frequencies
    let sum = 0;
    for (let number in result) {
      sum += result[number];  // Add each result value to the sum
    }
  
    // Return the final sum
    return sum;
  }
  
  
  const multipliedSum = multiplyWithFrequency(leftSortedColumnNumbers, rightSortedColumnNumbers);
  
  console.log("Total sum of number * frequency:", multipliedSum);
  
