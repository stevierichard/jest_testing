const { add, minus } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the two passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if 1st argument is not a number", () => {
      expect(() => add("2", 2)).toThrowError();
    });
    it("Should throw an error if 1st argument is not a number", () => {
      expect(() => add(2, "2")).toThrowError();
    });
  });
});

describe("Minus", () => {});
