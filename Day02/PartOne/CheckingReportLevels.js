import { formattedData } from "./SortingReports.js";
const reports = formattedData.map(line => line.trim().split(' ').map(Number));

const validReports = [];

reports.forEach(report => { 
    if (checkLevels(report)) { 
        validReports.push(report); 
    } 
});

export function checkLevels(levels) {
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < levels.length; i++) {
      const diff = Math.abs(levels[i] - levels[i - 1]);
  
      if (diff < 1 || diff > 3) {
        return false; // Adjacent levels do not differ by at least 1 and at most 3
      }
  
      if (levels[i] < levels[i - 1]) {
        increasing = false;
      }
      if (levels[i] > levels[i - 1]) {
        decreasing = false;
      }
    }
  
    return increasing || decreasing;
  }

  console.log(Array.isArray(formattedData));
  const validReportsCount = validReports.length;
  console.log(`Number of valid reports: ${validReportsCount}`); 
  console.log('Valid Reports:', validReports);
  


  