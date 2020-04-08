import { parser, InfixNotationType } from "./parser";
import { buildRPN } from "./buildRPN";
import { calcRPN, RPNType } from "./calcRPN";

export const runner = (line: string): number => {
  const infixNotation: InfixNotationType = parser(line);
  const RPN: RPNType = buildRPN(infixNotation);
  const result: number = calcRPN(RPN);

  return result;
};
