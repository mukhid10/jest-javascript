const sum = require("./sum");

describe("example", () => {
  it(" should add 1 + 2 equals 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("Object asigment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("truthy and falsy", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    //or
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  });
});

describe("number", () => {
  it("2 + 2", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(6);
    expect(value).toBeLessThanOrEqual(4);
  });

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });
});

describe("string", () => {
  it("there is no I in team", () => {
    // expect("team").not.toMatch("/I/");
    expect("team").toMatch("team");
  });
});

describe("arrays", () => {
  const shoppingLists = ["diapers", "susu formula", "popok", "boneka"];
  expect(shoppingLists).toContain("popok");
});

const compileAndroidCode = () => {
  throw new Error("You are using wrong JDk");
};

describe("exception", () => {
  it("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow(Error);
  });
});
