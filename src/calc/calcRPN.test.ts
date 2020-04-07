import { calcRPN } from "./calcRPN";

describe("Calc Reverse Polish Notation test cases", () => {
  it("RPN [1, 2, '+'] to equal 3", () => {
    expect(calcRPN([1, 2, "+"])).toBe(3);
  });

  it("RPN [3, 2, '*', 1, '-'] to equal 5", () => {
    expect(calcRPN([3, 2, "*", 1, "-"])).toBe(5);
  });

  it("RPN [2, 3, 10, '*', 1, '*', '+', 2, 2, '/', '+', 3, 5, '*', '+'] to equal 48", () => {
    expect(
      calcRPN([2, 3, 10, "*", 1, "*", "+", 2, 2, "/", "+", 3, 5, "*", "+"])
    ).toBe(48);
  });
});
