import * as path from "path";

const json: {
  ClaML: { Class: Array<XmlIcdObject> };
} = require(path.join(process.cwd(), "icdClass.json"));

const CATEGORY = "category";
const BLOCK = "block";
const CHAPTER = "chapter";

type XmlIcdObject = {
  $: {
    code: String;
    kind: String;
  };
  Rubric: Array<{
    $: {
      id: String;
      kind: String;
    };
    Label: Array<{
      _: String;
      $: {
        "xml:lang": String;
        "xml:space": String;
      };
    }>;
  }>;
};

type IcdObject = {
  code: String;
  description: String;
  type: String;
  raw: XmlIcdObject;
};

function get(code: String): IcdObject | null {
  const xmlObject = json.ClaML.Class.find(
    (obj: XmlIcdObject) => obj.$.code === code
  );

  return xmlObject ? toIcdObject(xmlObject) : null;
}

function find(searchText: String): Array<IcdObject> {
  return json.ClaML.Class.filter((obj: XmlIcdObject) => {
    const icdObject = toIcdObject(obj);

    return (
      icdObject.code.toLowerCase().includes(searchText.toLowerCase()) ||
      icdObject.description.toLowerCase().includes(searchText.toLowerCase())
    );
  }).map(xmlObject => toIcdObject(xmlObject));
}

function getCodeList(kind: String) {
  return json.ClaML.Class.filter(
    (obj: XmlIcdObject) => obj.$.kind === kind
  ).map((obj: any) => obj.$.code);
}

function getChapterList() {
  return getCodeList(CHAPTER);
}

function getBlockList() {
  return getCodeList(BLOCK);
}

function getCategoryList() {
  return getCodeList(CATEGORY);
}

function toIcdObject(xmlObject: XmlIcdObject): IcdObject {
  return {
    code: xmlObject.$.code,
    type: xmlObject.$.kind,
    description: xmlObject.Rubric[0].Label[0]._,
    raw: xmlObject
  };
}

export { json, get, find, getChapterList, getBlockList, getCategoryList };
