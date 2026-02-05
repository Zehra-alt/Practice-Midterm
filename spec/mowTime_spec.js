import { mowTime } from "../src/mowTime.js";

describe("it tests lawn mowing time", function () {

  it("tests small lawn", function () {
    let result = mowTime(5, 10, 2);
    expect(result).toBe(25);
  });

  it("tests medium lawn", function () {
    let result = mowTime(10, 20, 4);
    expect(result).toBe(50);
  });

  it("tests large lawn", function () {
    let result = mowTime(20, 30, 6);
    expect(result).toBe(100);
  });

});
