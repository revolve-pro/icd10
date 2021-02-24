import * as fs from "fs";
import * as path from "path";
import * as xml2js from "xml2js";
import { get } from "config";

type Config = {
  xmlPath: string;
};

const config = get<Config>("icd10");

export async function generate() {
  const icd10xml = await readXml(config.xmlPath);
  const classificationJson = await parseXml(icd10xml.toString());

  await saveIcdJson(classificationJson);
}

async function readXml(xmlPath: string): Promise<Buffer> {
  try {
    return await fs.promises.readFile(path.resolve(xmlPath));
  } catch (error) {
    throw new Error(`Can't read xml file. ${xmlPath}`);
  }
}

async function saveIcdJson(classificationJson: any) {
  try {
    await fs.promises.writeFile(
      "icdClass.json",
      JSON.stringify(classificationJson)
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
