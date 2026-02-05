import { yeeHa } from "../src/yeeHa.js";

describe("Yee Ha Tests", function () {

  it("tests Yee", function () {
    expect(yeeHa(6)).toBe("Yee");
  });

  it("tests Ha", function () {
    expect(yeeHa(14)).toBe("Ha");
  });

  it("tests Yee Ha", function () {
    expect(yeeHa(21)).toBe("Yee Ha");
  });

  it("tests Nada", function () {
    expect(yeeHa(5)).toBe("Nada");
  });

});