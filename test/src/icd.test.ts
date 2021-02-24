import * as icd from "../../src/icd";

describe("icd test", () => {
  test("get", () => {
    expect(icd.get("I")).toMatchObject(chapterI);
  });

  test("get null", () => {
    expect(icd.get("Z")).toBeNull();
  });

  test("find one", () => {
    expect(icd.find("parasitic diseases")).toMatchObject([chapterI]);
  });

  test("find many", () => {
    expect(icd.find("a").length).toBe(3);
  });

  test("find none", () => {
    expect(icd.find("xyz")).toMatchObject([]);
  });

  test("block list", () => {
    expect(icd.getBlockList()).toMatchObject(["A00-A09"]);
  });

  test("chapter list", () => {
    expect(icd.getChapterList()).toMatchObject(["I"]);
  });

  test("category list", () => {
    expect(icd.getCategoryList()).toMatchObject(["A00.1"]);
  });
});

const chapterI = {
  description: "Certain infectious and parasitic diseases",
  code: "I",
  type: "chapter",
  raw: {
    $: { code: "I", kind: "chapter" },
    Rubric: [
      {
        $: { id: "D0000001", kind: "preferred" },
        Label: [
          {
            $: { "xml:lang": "en", "xml:space": "default" },
            _: "Certain infectious and parasitic diseases"
          }
        ]
      }
    ]
  }
};
