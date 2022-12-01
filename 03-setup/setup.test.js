let animals = ["zebra", "bear", "sheep", "chiken"];

describe("animals array", () => {
  beforeEach(() => {
    animals = ["zebra", "bear", "sheep", "chiken"];
  });

  it("should add animal to end of array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });

  it("should add animal to end of array", () => {
    animals.unshift("aligator");
    expect(animals[0]).toBe("aligator");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it.only("true be should truthy", () => {
    expect(true).toBeTruthy();
  });
});
