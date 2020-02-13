const icd = require("icd10");

console.log(icd);

console.log(JSON.stringify(icd.find("A16.9"), null, 2));
console.log(icd.getCategoryList());
