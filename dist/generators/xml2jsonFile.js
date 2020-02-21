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
const parentPath = process.argv[2] || path.resolve(process.cwd(), "..", "..");
generate().catch(err => {
    console.error(err);
    process.exit(1);
});
function generate() {
    return __awaiter(this, void 0, void 0, function* () {
        console.info('generate!!!');
        const packageJson = yield readPackageJson();
        const xmlPath = readXmlPathFromParentPackageJson(packageJson);
        const icd10xml = yield readXml(xmlPath);
        const classificationJson = yield parseXml(icd10xml.toString());
        yield saveIcdJson(classificationJson);
        console.info("Json generated successfully!");
        console.info("Json generated successfully!");
        console.info("Json generated successfully!");
        console.info("Json generated successfully!");
    });
}
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
        throw new Error("Missing 'icd10.xmlPath' inside package.json configuration");
    }
}
function readXml(xmlPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield fs.promises.readFile(path.join(parentPath, xmlPath));
        }
        catch (error) {
            throw new Error(`Can't read xml file. ${xmlPath}`);
        }
    });
}
function saveIcdJson(classificationJson) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs.promises.writeFile("icdClass.json", JSON.stringify(classificationJson, null, 2));
        }
        catch (error) {
            throw new Error("Can't save icd json file.");
        }
    });
}
function parseXml(xml) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield xml2js.parseStringPromise(xml);
        }
        catch (error) {
            throw new Error("Problem with parsing xml");
        }
    });
}
