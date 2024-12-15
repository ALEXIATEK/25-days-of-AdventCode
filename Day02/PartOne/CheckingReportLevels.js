import { formattedData } from "./SortingReports.js";
const reports = formattedData.map(line => line.trim().split(' ').map(Number)); // maps the arrays into numbers

export const validReports = []; // empty array to store valid reports that meet the conditions
export const invalidReports = []; // empty array to store invalid reports that have not met the conditions


reports.forEach(report => { 
    if (checkLevels(report)) { 
        validReports.push(report); 
    } else {
      invalidReports.push(report);
    }
});

export function checkLevels(levels) {
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < levels.length; i++) {
      const diff = Math.abs(levels[i] - levels[i - 1]);
  
      if (diff < 1 || diff > 3) {
        return false; // Adjacent levels do not differ by at least 1 and at most 3 i.e conditions not met
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
  export const validReportsCount = validReports.length;
 
  console.log('Valid Reports:', validReports);

  console.log(`Number of invalid reports: ${invalidReports.length}`);
  console.log(`Number of valid reports: ${validReportsCount}`); 
  


  