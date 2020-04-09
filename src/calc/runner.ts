import { parser, parseRPN } from "./parser";
import { buildRPN } from "./buildRPN";
import { calcRPN, NotationType } from "./calcRPN";

export const runner = (line: string): number => {
  const splitLine = line.split("rpn: ");
  let rpn: NotationType;

  if (typeof splitLine[1] === "string") {
    rpn = parseRPN(splitLine[1]);
  } else {
    const infixNotation: NotationType = parser(line);
    rpn = buildRPN(infixNotation);
  }

  const result: number = calcRPN(rpn);

  return result;
};
