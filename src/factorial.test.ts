import { factorial } from "./factorial";

test("3! to equal 6", () => {
  expect(factorial(3)).toBe(6);
});

test("13! to equal 6227020800", () => {
  expect(factorial(13)).toBe(6227020800);
});
