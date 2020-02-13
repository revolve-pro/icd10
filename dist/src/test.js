"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icd_1 = require("./icd");
// console.log(JSON.stringify(icd.find("A00.0"), null, 2));
console.log("Chapter:", icd_1.default.getChapterList());
console.log("Block:", icd_1.default.getBlockList());
console.log("Category:", icd_1.default.getCategoryList());
