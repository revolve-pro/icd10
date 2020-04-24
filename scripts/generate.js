const path = require("path");

let icd10 = { generate: () => Promise.resolve() };
const isDependency = __dirname.split(path.sep).reverse()[3] === "node_modules";

if (isDependency) {
  process.chdir(path.resolve(__dirname, "..", "..", "..", ".."));
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
