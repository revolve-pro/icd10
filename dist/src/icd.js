"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json = require("../../icdClass.json");
const CATEGORY = "category";
const BLOCK = "block";
const CHAPTER = "chapter";
function find(code) {
    return json.ClaML.Class.find((obj) => obj.$.code === code);
}
function getCodeList(kind) {
    return json.ClaML.Class.filter((obj) => obj.$.kind === kind).map((obj) => obj.$.code);
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
exports.default = {
    json,
    find,
    getChapterList,
    getBlockList,
    getCategoryList
};
