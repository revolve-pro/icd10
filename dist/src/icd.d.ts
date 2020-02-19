declare const json: {
    ClaML: {
        Class: Array<XmlIcdObject>;
    };
};
declare type XmlIcdObject = {
    $: {
        code: String;
        kind: String;
    };
    Rubric: Array<{
        $: {
            id: String;
            kind: String;
        };
        Label: Array<{
            _: String;
            $: {
                "xml:lang": String;
                "xml:space": String;
            };
        }>;
    }>;
};
declare type IcdObject = {
    code: String;
    description: String;
    type: String;
    raw: XmlIcdObject;
};
declare function get(code: String): IcdObject | null;
declare function find(searchText: String): Array<IcdObject>;
declare function getChapterList(): any[];
declare function getBlockList(): any[];
declare function getCategoryList(): any[];
export { json, get, find, getChapterList, getBlockList, getCategoryList };
