import { squareFeetToAcres } from "../src/acres.js";

describe("it tests square feet to acres conversion", function () {

  it("tests 1 acre", function () {
    let result = squareFeetToAcres(43560);
    expect(result).toBe(1);
  });

  it("tests 2 acres", function () {
    let result = squareFeetToAcres(87120);
    expect(result).toBe(2);
  });

  it("tests half acre", function () {
    let result = squareFeetToAcres(21780);
    expect(result).toBe(0.5);
  });

});