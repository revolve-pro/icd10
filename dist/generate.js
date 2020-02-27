"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xml2jsonFile_1 = require("./generators/xml2jsonFile");
xml2jsonFile_1.generate().catch(err => {
    console.error(err);
    process.exit(1);
});
