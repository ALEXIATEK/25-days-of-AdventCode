import { leftSortedColumnNumbers } from "../PartOne/AscendingOrderSort.js";
import { rightSortedColumnNumbers } from "../PartOne/AscendingOrderSort.js";

function countOccurences(leftSortedColumnNumbers, rightSortedColumnNumbers) {
  const frequencyMap = {};

  rightSortedColumnNumbers.forEach(number => {

    frequencyMap[number] = (frequencyMap[number] || 0 ) + 1;
    
  });

  const result = {};

  leftSortedColumnNumbers.forEach(number => {

    result[number] = frequencyMap[number] || 0 ;

  });

  return result;

}

console.log(countOccurences(leftSortedColumnNumbers, rightSortedColumnNumbers));


