"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require("path");
const xml2jsonFile_1 = require("./generators/xml2jsonFile");
exports.generate = xml2jsonFile_1.generate;
const jsonPath = path.join(process.cwd(), "icdClass.json");
const json = fs_1.existsSync(jsonPath) ? require(jsonPath) : {};
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
    return json.ClaML.Class.filter((obj) => {
        const icdObject = toIcdObject(obj);
        return (icdObject.code.toLowerCase().includes(searchText.toLowerCase()) ||
            icdObject.description.toLowerCase().includes(searchText.toLowerCase()));
    }).map((xmlObject) => toIcdObject(xmlObject));
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
        description: xmlObject.Rubric[0].Label[0]._,
        raw: xmlObject,
    };
}
