const icd = require("icd10");

console.log(icd);

console.log(JSON.stringify(icd.get("A16.9"), null, 2));
console.log(icd.getCategoryList());

icd.getCategoryList().map(category => console.log(category));

icd.getChapterList().map(category => console.log(category));

console.log(icd.get("X"));
