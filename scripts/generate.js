const { readFileSync } = require("fs");
const path = require("path");

const { name } = JSON.parse(readFileSync("./package.json", "utf8"));
const isNotUs = name !== "@revolve/icd10";

const isNotInModules =
  __dirname.split(path.sep).slice(-3).join("") !==
  ["node_modules", "@revolve", "icd10"].join("");

if (isNotUs && isNotInModules) {
  const { generate } = require("../dist/generators/xml2jsonFile.js");
  generate();
} else {
  console.error("Not generating in parent");
}
