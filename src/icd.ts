const json = require("../../icdClass.json");

const CATEGORY = "category";
const BLOCK = "block";
const CHAPTER = "chapter";

function get(code: string) {
  return json.ClaML.Class.find((obj: any) => obj.$.code === code);
}

function getCodeList(kind: string) {
  return json.ClaML.Class.filter((obj: any) => obj.$.kind === kind).map(
    (obj: any) => obj.$.code
  );
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

export {
  json,
  get,
  getChapterList,
  getBlockList,
  getCategoryList
};
