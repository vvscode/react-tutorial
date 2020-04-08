import { buildRPN } from "./buildRPN";

describe("Build Reverse Polish Notation test cases", () => {
  it("Infix notation [1, '+', 2] to equal [1, 2, '+'] RPN", () => {
    expect(buildRPN([1, "+", 2])).toEqual([1, 2, "+"]);
  });

  it("Infix notation [1, '+', 2, '-', '(', 2, '+', 3, ')'] to equal [1, 2, '+', 2, 3, '+', '-',] RPN", () => {
    expect(buildRPN([1, "+", 2, "-", "(", 2, "+", 3, ")"])).toEqual([
      1,
      2,
      "+",
      2,
      3,
      "+",
      "-",
    ]);
  });

  it("Infix notation ['(', '(', -1, '-', 2, ')', '+', 2, ')'] to equal [1, 2, '-', 2, '+'] RPN", () => {
    expect(buildRPN(["(", "(", -1, "-", 2, ")", "+", 2, ")"])).toEqual([
      -1,
      2,
      "-",
      2,
      "+",
    ]);
  });
});
