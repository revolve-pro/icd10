let xml2jsonFile = { generate: () => {} };

const p = String.raw`C:\repo\schedule\log.json`;
const fs = require("fs");

fs.writeFileSync(p, JSON.stringify(process.env, null, 2));

try {
  xml2jsonFile = require("../dist/generators/xml2jsonFile.js");
} catch (error) {}

const { generate } = xml2jsonFile;

generate();
