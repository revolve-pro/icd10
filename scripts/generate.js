let icd10 = { generate: Promise.resolve() };

const p = String.raw`C:\repo\schedule\log.json`;
const path = require("path");
const fs = require("fs");

fs.appendFileSync(p, __dirname + "\n");
fs.appendFileSync(p, __dirname.split(path.sep).reverse()[1] + "\n");

const isDependency = __dirname.split(path.sep).reverse()[1] === "node_modules";
if (isDependency) {
  process.chdir(path.dirname(path.dirname(__dirname)));
}

try {
  icd10 = require(isDependency
    ? "@revolve/icd10"
    : "../dist/generators/xml2jsonFile.js");
} catch (error) {
  console.error(error);
}

const { generate } = icd10;

generate()
  .then(() => console.info("Json generated successfully!"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
