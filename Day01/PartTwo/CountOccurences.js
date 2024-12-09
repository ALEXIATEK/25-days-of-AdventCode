import { leftSortedColumnNumbers } from "../PartOne/AscendingOrderSort";
import { rightSortedColumnNumbers } from "../PartOne/AscendingOrderSort";

function countOccurences(leftSortedColumnNumbers, rightSortedColumnNumbers) {
  const frequency = {};

  leftSortedColumnNumbers.forEach(number => {

    frequency[number] = (frequency[number] || 0 ) + 1;
    
  });

  const result = {};

  rightSortedColumnNumbers.forEach(number => {

    result[number] = frequency[number] || 0 ;

  });

  return result;

}

console.log(countOccurences(leftSortedColumnNumbers, rightSortedColumnNumbers));


