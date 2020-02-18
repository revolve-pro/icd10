"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json = require("../../icdClass.json");
exports.json = json;
const CATEGORY = "category";
const BLOCK = "block";
const CHAPTER = "chapter";
function get(code) {
    return json.ClaML.Class.find((obj) => obj.$.code === code);
}
exports.get = get;
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
