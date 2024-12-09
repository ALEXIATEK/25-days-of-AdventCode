import { numbers } from "./RandomNumbers";

//count numbers in RandomNumbers array

const count = numbers.length;
console.log(`Their are ${count} numbers in this array`); //make sure you use backticks and not single or double quotes


// Arrays to hold even and odd index numbers
export const leftColumnNumbers = [];
export const rightColumnNumbers = [];

// Iterate through the array and separate by index (even/odd)
numbers.forEach((number, index) => {
  if (index % 2 === 0) {
    leftColumnNumbers.push(number);  // Numbers at even indices
  } else {
    rightColumnNumbers.push(number);   // Numbers at odd indices
  }
});

// Output the even and odd index arrays
console.log("Even Index Numbers:", leftColumnNumbers);
console.log("Odd Index Numbers:", rightColumnNumbers);