// jest.mock("config");
jest.mock("xml2js");
jest.mock("config", () => ({
  get: jest.fn(() => ({
    xmlPath: "",
  })),
}));
jest.mock("fs");

type exitType = (code?: number) => never;
const pass = () => {};

jest.spyOn(process, "exit").mockImplementation(<exitType>pass);
jest.spyOn(console, "error").mockImplementation(pass);

import { generate } from "../../src/generators/xml2jsonFile";

describe("generator", () => {
  test("generate with no path", () => {
    return generate().catch((err) => {
      expect(err).toStrictEqual(new Error("Can't read xml file. "));
    });
  });
});
