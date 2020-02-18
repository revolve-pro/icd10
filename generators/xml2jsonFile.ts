import * as fs from "fs";
import * as path from "path";
import * as xml2js from "xml2js";

type packagejson = {
  icd10: {
    xmlPath: string;
  };
};

const parentPath = path.resolve(process.cwd(), "..", "..");

(async () => {
  const packageJson = await readPackageJson();
  const xmlPath = readXmlPathFromParentPackageJson(packageJson);
  const icd10xml = await readXml(xmlPath);
  const classificationJson = await xml2js.parseStringPromise(icd10xml);
  saveIcdJson(classificationJson);
  console.log('Json generated successfully!');
})();

async function readPackageJson(): Promise<packagejson> {
  const packageJsonPath = path.join(parentPath, "/package.json");
  try {
    return JSON.parse(await fs.promises.readFile(packageJsonPath, "utf8"));
  } catch (error) {
    throw new Error(`Can't read package json. ${packageJsonPath}`);
  }
}

function readXmlPathFromParentPackageJson(packageJson: packagejson): string {
  try {
    if (packageJson.icd10.xmlPath) {
      return packageJson.icd10.xmlPath;
    }
    throw null;
  } catch (err) {
    throw new Error(
      "Can't read xml path from package json configuration. Probably missing 'icd10.xmlPath' inside package.json configuration"
    );
  }
}

function readXml(xmlPath: string): Promise<Buffer> {
  try {
    return fs.promises.readFile(path.join(parentPath, xmlPath));
  } catch (error) {
    throw new Error(`Can't read xml file. ${xmlPath}`);
  }
}

function saveIcdJson(classificationJson: any) {
  try {
    fs.writeFileSync(
      "icdClass.json",
      JSON.stringify(classificationJson, null, 2)
    );
  } catch (error) {
    throw new Error("Can't save icd json file.");
  }
}
