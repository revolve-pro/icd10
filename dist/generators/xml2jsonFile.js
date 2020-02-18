"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
const parentPath = path.resolve(process.cwd(), "..", "..");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const packageJson = yield readPackageJson();
    const xmlPath = readXmlPathFromParentPackageJson(packageJson);
    const icd10xml = yield readXml(xmlPath);
    const classificationJson = yield xml2js.parseStringPromise(icd10xml);
    saveIcdJson(classificationJson);
    console.log('Json generated successfully!');
}))();
function readPackageJson() {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJsonPath = path.join(parentPath, "/package.json");
        try {
            return JSON.parse(yield fs.promises.readFile(packageJsonPath, "utf8"));
        }
        catch (error) {
            throw new Error(`Can't read package json. ${packageJsonPath}`);
        }
    });
}
function readXmlPathFromParentPackageJson(packageJson) {
    try {
        if (packageJson.icd10.xmlPath) {
            return packageJson.icd10.xmlPath;
        }
        throw null;
    }
    catch (err) {
        throw new Error("Can't read xml path from package json configuration. Probably missing 'icd10.xmlPath' inside package.json configuration");
    }
}
function readXml(xmlPath) {
    try {
        return fs.promises.readFile(path.join(parentPath, xmlPath));
    }
    catch (error) {
        throw new Error(`Can't read xml file. ${xmlPath}`);
    }
}
function saveIcdJson(classificationJson) {
    try {
        fs.writeFileSync("icdClass.json", JSON.stringify(classificationJson, null, 2));
    }
    catch (error) {
        throw new Error("Can't save icd json file.");
    }
}
