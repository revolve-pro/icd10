const json: {
  ClaML: { Class: Array<xmlIcdObject> };
} = require("../../icdClass.json");

const CATEGORY = "category";
const BLOCK = "block";
const CHAPTER = "chapter";

type xmlIcdObject = {
  $: {
    code: string;
    kind: string;
  };
  Rubric: Array<{
    $: {
      id: string;
      kind: string;
    };
    Label: Array<{
      _: string;
      $: {
        "xml:lang": string;
        "xml:space": string;
      };
    }>;
  }>;
};

type ICDObject = {
  code: string;
  label: string;
  type: string;
  raw: xmlIcdObject;
};

function get(code: string): ICDObject | null {
  const xmlObject = json.ClaML.Class.find(
    (obj: xmlIcdObject) => obj.$.code === code
  );

  return xmlObject ? toIcdObject(xmlObject) : null;
}

function find(searchText: string): Array<ICDObject> {
  return json.ClaML.Class.filter(
    (obj: xmlIcdObject) =>
      obj.$.code.includes(searchText) ||
      obj.Rubric[0].Label[0]._.includes(searchText)
  ).map(xmlObject => toIcdObject(xmlObject));
}

function getCodeList(kind: string) {
  return json.ClaML.Class.filter(
    (obj: xmlIcdObject) => obj.$.kind === kind
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

function toIcdObject(xmlObject: xmlIcdObject): ICDObject {
  return {
    code: xmlObject.$.code,
    type: xmlObject.$.kind,
    label: xmlObject.Rubric[0].Label[0]._,
    raw: xmlObject
  };
}

export { json, get, find, getChapterList, getBlockList, getCategoryList };
