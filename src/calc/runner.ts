import { parser } from "./parser";
import { buildRPN } from "./buildRPN";
import { calcRPN, NotationType } from "./calcRPN";

export const runner = (line: string): number => {
  const infixNotation: NotationType = parser(line);
  const RPN: NotationType = buildRPN(infixNotation);
  const result: number = calcRPN(RPN);

  return result;
};
