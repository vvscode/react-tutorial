import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });

  it("-11 + -20", () => {
    expect(runner("-11 + -20")).toEqual(-31);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3", () => {
    expect(runner("2 + 2 * 3")).toEqual(8);
  });

  it("(2 + 1) * 32", () => {
    expect(runner("(2 + 1) * 32")).toEqual(96);
  });

  it("2 + 1 * 32", () => {
    expect(runner("2 + 1 * 32")).toEqual(34);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("(20 - 10) * 10 + 100 / (2 / 5) - 3", () => {
    expect(runner("(20 - 10) * 10 + -100 / (2 / 5) - 3")).toEqual(-153);
  });

  it("(10 + (29 + 20 + (-14 * 2) / 2) + (-39 - 2))", () => {
    expect(runner("(10 + (29 + 20 + (-14 * 2) / 2) + (-39 - 2))")).toEqual(4);
  });
});

describe("RPN cases", () => {
  it("10 2 -", () => {
    expect(runner("rpn: 10 2 -")).toEqual(8);
  });

  it("10 -2 +", () => {
    expect(runner("rpn: 10 -2 +")).toEqual(8);
  });

  it("12 100 * 2 / 232 999 - +", () => {
    expect(runner("rpn: 12 100 * 2 / 232 999 - +")).toEqual(-167);
  });
});
