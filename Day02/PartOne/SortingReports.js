import { rawData } from '../Reports.js';

// formatting Reports.js
function formatRawData(rawData) {

    return rawData.trim().split('\n').map(line => line.trim()); 
      // rawData.trim() - removes leading and trailing whitespaces
      // .split('\n') - splits the string into arrays using /n as the determiner so each line becomes a new array
      // .map(line => line.trim() - Iterates through each line and removes whitespace

  }

export const formattedData = formatRawData(rawData);
console.log(formattedData);


  
