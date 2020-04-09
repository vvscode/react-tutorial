import { parser, parseRPN } from "./parser";

describe("parser test cases", () => {
  it("parse '1+2' to equal [1, '+', 2]", () => {
    expect(parser("1+2")).toEqual([1, "+", 2]);
  });

  it("parse '5 - 7' to equal [5, '-', 7]", () => {
    expect(parser("5 - 7")).toEqual([5, "-", 7]);
  });

  it("parse '2 + (3 + (2 / 2) - 3)' to equal [2, '+', '(', 3, '+', '(', 2, '/', 2, ')', '-', 3, ')']", () => {
    expect(parser("2 + (3 + (2 / 2) - 3)")).toEqual([
      2,
      "+",
      "(",
      3,
      "+",
      "(",
      2,
      "/",
      2,
      ")",
      "-",
      3,
      ")",
    ]);
  });

  it("parse '11 + 220 + (3 * 4) / 5' to equal [11, '+', 220, '+', '(', 3, '*', 4, ')', '/', 5]", () => {
    expect(parser("11 + 220 + (3 * 4) / 50")).toEqual([
      11,
      "+",
      220,
      "+",
      "(",
      3,
      "*",
      4,
      ")",
      "/",
      50,
    ]);
  });
});

describe("RPN parser test cases", () => {
  it("parse '1 2 +' to equal [1, 2, '+']", () => {
    expect(parseRPN("1 2 +")).toEqual([1, 2, "+"]);
  });

  it("parse '1 2 + 3 *' to equal [1, 2, '+', 3, '*']", () => {
    expect(parseRPN("1 2 + 3 *")).toEqual([1, 2, "+", 3, "*"]);
  });

  it("parse '-10 1 - 3 / 2 + 1 - 2 2 * +' to equal [-10, 1, '-', 3, '/', 2, '+', 1, '-', 2, 2, '*', '+']", () => {
    expect(parseRPN("-10 1 - 3 / 2 + 1 - 2 2 * +")).toEqual([
      -10,
      1,
      "-",
      3,
      "/",
      2,
      "+",
      1,
      "-",
      2,
      2,
      "*",
      "+",
    ]);
  });
});
