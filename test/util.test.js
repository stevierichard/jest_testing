const { add, minus, multiply, divide, power } = require("../util/util");

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

describe("Multiply", () => {
  describe("Success", () => {
    it("Should return product of two arguments", () => {
      expect(multiply(4, 2)).toBe(8);
    });
  });
  describe("Fail", () => {
    it("Should return an error if the first argument is not a number", () => {
      expect(() => multiply("2", 2)).toThrowError();
    });
    it("Should return an error if the second argument is not a number", () => {
      expect(() => multiply(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => multiply()).toThrowError();
    });
  });
});

describe("Divide", () => {
  describe("Success", () => {
    it("Should return division of the 2 passed arguments", () => {
      expect(divide(4, 2)).toBe(2);
    });
  });
  describe("Fail", () => {
    it("Should return an error if the first argument is not a number", () => {
      expect(() => divide("2", 2)).toThrowError();
    });
    it("Should return an error if the second argument is not a number", () => {
      expect(() => divide(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => divide()).toThrowError();
    });
  });
});

describe("Power", () => {
  describe("Success", () => {
    it("Should return division of the 2 passed arguments", () => {
      expect(power(4, 2)).toBe(16);
    });
  });
  describe("Fail", () => {
    it("Should return an error if the first argument is not a number", () => {
      expect(() => power("2", 2)).toThrowError();
    });
    it("Should return an error if the second argument is not a number", () => {
      expect(() => power(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => power()).toThrowError();
    });
  });
});
