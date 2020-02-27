import { generate } from "../../src/generators/xml2jsonFile";

jest.mock("fs");
jest.mock("xml2js");

jest.spyOn(process, "exit").mockImplementation(() => {
  throw new Error("Mock");
});

const path = require.requireActual("path");

describe("generator", () => {
  test("generate", () => {
    process.argv[2] = "parent_path";
    return generate().catch(err => {
      expect(err).toStrictEqual(
        new Error("Can't read package json. parent_path/package.json")
      );
    });
  });
});
