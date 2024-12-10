import { rawData } from './Reports.js';

// formatData.js
function formatRawData(rawData) {
    return rawData.trim().split('\n').map(line => `"${line.trim()}",`).join('\n');
  }

export const formattedData = formatRawData(rawData);
console.log(formattedData);


  
