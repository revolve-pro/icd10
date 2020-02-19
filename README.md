# ICD10
## Description
This library main goal is to improve experience of using who icd 10 xml data by delivering a pack of helper methods. Due to licens we do not deliver the data itself, you have to get licence and data from official website https://www.who.int/classifications/help/FAQOther/en/.

## Installation
In order to install this library you have to add an entry point in your package.json file, it's a relative path to xml you get from WHO.
##### Assumptions:
- data are generated from xml you provided
- data are generated on installation
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
import * as icd10 from "icd10";

icd.get("A16.9");
icd.find("disease");
icd.getCategoryList();
icd.getChapterList();
```
## API
`get` -> parameter is icd code, e.g. 'XII', 'A16.9', return object\
`find` -> parameter is string, function loog for objects contains this value in description or code\
`getChapterList` -> return array of strings contained all chapters in classification\
`getBlockList` -> return array of strings contained all blocks in classification\
`getCategoryList` -> return array of strings contained all categories in classification