import { leftColumnNumbers } from "./OddEvenSeparator.js";
import { rightColumnNumbers } from "./OddEvenSeparator.js";

// Arrays to hold the Sorted Numbers
export const leftSortedColumnNumbers = [];
export const rightSortedColumnNumbers = [];


// Sort in ascending order
 
    leftSortedColumnNumbers.push(...leftColumnNumbers.sort((a, b) => a-b));
    console.log("Sorted LeftColumnNumbers:", leftSortedColumnNumbers);
   

   rightSortedColumnNumbers.push(...rightColumnNumbers.sort((a, b) => a-b));
   console.log("Sorted RightColumnNumbers:", rightSortedColumnNumbers);
