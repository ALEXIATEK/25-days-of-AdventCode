import { invalidReports } from "../PartOne/CheckingReportLevels.js";
import { checkLevels } from "../PartOne/CheckingReportLevels.js";
import { validReports } from "../PartOne/CheckingReportLevels.js";
import { validReportsCount } from "../PartOne/CheckingReportLevels.js"

const fixableReports = [];

function findFixableReports(invalidReports) {
    invalidReports.forEach(invalidReport => {
       let canBeFixed = false;
    
    for (let i=0; i < invalidReport.length; i++) {
        const modifiedReport = invalidReport.slice(0, i).concat(invalidReport.slice(i + 1));
    

      if (checkLevels(modifiedReport)) {
        canBeFixed = true;
        fixableReports.push(modifiedReport);
        break;
       }
    } 
    });

}

console.log(findFixableReports(invalidReports), fixableReports);
console.log(`There are ${fixableReports.length} Fixable Reports.`);


const totalValidReports = validReportsCount + fixableReports.length;
console.log(`There are ${totalValidReports} total valid Reports.`);