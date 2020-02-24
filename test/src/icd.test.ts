import * as icd from "../../src/icd";

describe("icd test", () => {
  beforeEach(() => {});

  test("test", () => {
    expect(1 + 1).toBe(2);
  });

  test("find", () => {
    expect(icd.get("I")).toBeTruthy();
  });
});
