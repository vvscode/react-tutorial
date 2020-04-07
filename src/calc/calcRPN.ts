import { mathOperators, BinaryOperatorType } from "./mathOperators";

type RPNType = number | string;

const getNumber = (num: number | undefined): number => {
  if (typeof num === "undefined") {
    throw new Error("Error RPN format");
  }

  return num;
};

const getOperator = (symbolOperator: string): BinaryOperatorType =>
  mathOperators[symbolOperator];

// infix notation     <-- 3 * 2 -1
// RPN                <-- [3, 2, "*", 1, "-"]
export const calcRPN = (rpn: Array<RPNType>): number => {
  const calc = rpn.reduce((stack: number[], item: RPNType) => {
    if (typeof item === "number") {
      stack.push(item);
    } else {
      const operator: BinaryOperatorType = getOperator(item);

      const secondOperand: number = getNumber(stack.pop());
      const firstOperand: number = getNumber(stack.pop());

      const calcValue = operator(firstOperand, secondOperand);

      stack.push(calcValue);
    }

    return stack;
  }, []);

  return calc[0];
};
