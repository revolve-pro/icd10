import { generate } from "./generators/xml2jsonFile";

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
