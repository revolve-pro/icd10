declare const json: {
    ClaML: {
        Class: Array<xmlIcdObject>;
    };
};
declare type xmlIcdObject = {
    $: {
        code: string;
        kind: string;
    };
    Rubric: Array<{
        $: {
            id: string;
            kind: string;
        };
        Label: Array<{
            _: string;
            $: {
                "xml:lang": string;
                "xml:space": string;
            };
        }>;
    }>;
};
declare type ICDObject = {
    code: string;
    label: string;
    type: string;
    raw: xmlIcdObject;
};
declare function get(code: string): ICDObject | null;
declare function find(searchText: string): Array<ICDObject>;
declare function getChapterList(): any[];
declare function getBlockList(): any[];
declare function getCategoryList(): any[];
export { json, get, find, getChapterList, getBlockList, getCategoryList };
