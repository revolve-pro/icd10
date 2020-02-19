"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json = require("../../icdClass.json");
exports.json = json;
const CATEGORY = "category";
const BLOCK = "block";
const CHAPTER = "chapter";
function get(code) {
    const xmlObject = json.ClaML.Class.find((obj) => obj.$.code === code);
    return xmlObject ? toIcdObject(xmlObject) : null;
}
exports.get = get;
function find(searchText) {
    return json.ClaML.Class.filter((obj) => obj.$.code.includes(searchText) ||
        obj.Rubric[0].Label[0]._.includes(searchText)).map(xmlObject => toIcdObject(xmlObject));
}
exports.find = find;
function getCodeList(kind) {
    return json.ClaML.Class.filter((obj) => obj.$.kind === kind).map((obj) => obj.$.code);
}
function getChapterList() {
    return getCodeList(CHAPTER);
}
exports.getChapterList = getChapterList;
function getBlockList() {
    return getCodeList(BLOCK);
}
exports.getBlockList = getBlockList;
function getCategoryList() {
    return getCodeList(CATEGORY);
}
exports.getCategoryList = getCategoryList;
function toIcdObject(xmlObject) {
    return {
        code: xmlObject.$.code,
        type: xmlObject.$.kind,
        label: xmlObject.Rubric[0].Label[0]._,
        raw: xmlObject
    };
}
