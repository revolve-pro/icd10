"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icd = require("./icd");
// console.log(JSON.stringify(icd.find("A00.0"), null, 2));
console.log("Chapter:", icd.getChapterList());
console.log("Block:", icd.getBlockList());
console.log("Category:", icd.getCategoryList());
