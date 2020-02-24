import * as fs from "fs";
import * as path from "path";
import * as xml2js from "xml2js";

type Config = {
  icd10: {
    xmlPath: string;
  };
};

const parentPath = process.argv[2] || path.resolve(process.cwd(), "..", "..");

generate().catch(err => {
  console.error(err);
  process.exit(1);
});

async function generate() {
  console.info("Generating Json from icd10 xml file.");

  const packageJson = await readPackageJson();
  const xmlPath = readXmlPathFromParentPackageJson(packageJson);
  const icd10xml = await readXml(xmlPath);
  const classificationJson = await parseXml(icd10xml.toString());

  await saveIcdJson(classificationJson);

  console.info("Json generated successfully!");
}

async function readPackageJson(): Promise<Config> {
  const packageJsonPath = path.join(parentPath, "/package.json");
  try {
    return JSON.parse(await fs.promises.readFile(packageJsonPath, "utf8"));
  } catch (error) {
    throw new Error(`Can't read package json. ${packageJsonPath}`);
  }
}

function readXmlPathFromParentPackageJson(packageJson: Config): string {
  try {
    if (packageJson.icd10.xmlPath) {
      return packageJson.icd10.xmlPath;
    }
    throw null;
  } catch (err) {
    throw new Error(
      "Missing 'icd10.xmlPath' inside package.json configuration"
    );
  }
}

async function readXml(xmlPath: string): Promise<Buffer> {
  try {
    return await fs.promises.readFile(path.join(parentPath, xmlPath));
  } catch (error) {
    throw new Error(`Can't read xml file. ${xmlPath}`);
  }
}

async function saveIcdJson(classificationJson: any) {
  try {
    await fs.promises.writeFile(
      "icdClass.json",
      JSON.stringify(classificationJson, null, 2)
    );
  } catch (error) {
    throw new Error("Can't save icd json file.");
  }
}

async function parseXml(xml: string): Promise<string> {
  try {
    return await xml2js.parseStringPromise(xml);
  } catch (error) {
    throw new Error("Problem with parsing xml");
  }
}
