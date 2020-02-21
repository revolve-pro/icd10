# ICD10
## Description
This library main goal is to improve the experience of using WHO Classification of Disease (icd10). The data are delivered as an xml file, and we provide a pack of helper function that make it easier to use this data. Due to license, we do not deliver the data itself, you have to get a licence and data from the official website https://www.who.int/classifications/help/FAQOther/en/.

## Installation
In order to install this library you have to add an entry point in your package.json file, it's a relative path to xml you get from WHO.

##### Assumptions:
- data is generated from xml you provided
- data is generated on installation
- if generating data fail, installation will fail also
#### package.json

```
{
  name: "..."
  ...
  "icd10": {
    "xmlPath": "relative_path_to_your_xml_file"
  }
}
```

#### npm
```
npm install github:revolve-pro/icd10#generate_json_on_install
```
#### yarn
```
yarn add github:revolve-pro/icd10#generate_json_on_install
```
## Usage
```
const icd = require("icd10");

icd.get("A16.9");
icd.find("disease");
icd.getCategoryList();
icd.getChapterList();

```
#### es6
```
import * as icd from "icd10";

icd.get("A16.9");
icd.find("disease");
icd.getCategoryList();
icd.getChapterList();
```
## API
`get` -> parameter is icd code, e.g. 'XII', 'A16.9', return object\
`find` -> parameter is string, function look for objects contains this value in description or code\
`getChapterList` -> return array of strings contained all chapters in classification\
`getBlockList` -> return array of strings contained all blocks in classification\
`getCategoryList` -> return array of strings contained all categories in classification