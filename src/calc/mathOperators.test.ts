import { mul, div, add, sub } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 0 * 3 to equal 0", () => {
    expect(mul(0, 3)).toBe(0);
  });

  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("div 5 / 1 to equal 5", () => {
    expect(div(5, 1)).toBe(5);
  });

  it("div 6 / 0 to equal 0", () => {
    expect(div(6, 0)).toBe(0);
  });

  it("div 0 / 7 to equal 0", () => {
    expect(div(0, 7)).toBe(0);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("sub 4 - 2 to equal 2", () => {
    expect(sub(4, 2)).toBe(2);
  });
});
