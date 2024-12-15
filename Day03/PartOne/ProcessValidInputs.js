import { inputs } from "../ComputerMemory.js";


function isValidInput(input) {
   const regex = /^mul\((-?\d+),(-?\d+)\)$/;
   return regex.test(input);
}

function multiplyAddInputs(inputs) {
    let total = 0;

    inputs.forEach(input => {
       try {
          if (isValidInput(input)) {
            const matches = input.match(/^mul\((-?\d+),(-?\d+)\)$/);
            const num1 = parseInt(matches[1]);
            const num2 = parseInt(matches[2]);

            total += num1 * num2;
          } 
        } catch (error) {
            console.log(` Their is an invalid input: ${input}`);
        }
       });

    return total;

}



const resultMul = multiplyAddInputs(inputs);
console.log('Total:' + resultMul);