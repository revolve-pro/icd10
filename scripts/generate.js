let xml2jsonFile = { generate: () => {} };

try {
  xml2jsonFile = require("../dist/generators/xml2jsonFile.js");
} catch (error) {}

const { generate } = xml2jsonFile;

generate();
