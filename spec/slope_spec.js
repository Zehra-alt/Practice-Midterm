import { slope } from "../src/slope.js";

describe("Slope Tests", function () {

  it("tests first line", function () {
    expect(slope(0, 0, 2, 2)).toBe(1);
  });

  it("tests second line", function () {
    expect(slope(1, 2, 3, 6)).toBe(2);
  });

  it("tests third line", function () {
    expect(slope(2, 4, 4, 4)).toBe(0);
  });

});