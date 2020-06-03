const { add, minus } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the two passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument is not a number", () => {
      expect(() => add("2", 2)).toThrowError();
    });
    it("Should throw an error if 1st argument is not a number", () => {
      expect(() => add(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => add()).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Success", () => {
    it("Should return first argument minus second", () => {
      expect(minus(4, 2)).toBe(2);
    });
  });
  describe("Fail", () => {
    it("Should return an error if the first argument is not a number", () => {
      expect(() => minus("2", 2)).toThrowError();
    });
    it("Should return an error if the second argument is not a number", () => {
      expect(() => minus(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => minus()).toThrowError();
    });
  });
});
