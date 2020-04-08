import { mathOperators, BinaryOperatorType } from "./mathOperators";

export type NotationType = (number | string)[];

const getOperator = (symbolOperator: string): BinaryOperatorType =>
  mathOperators[symbolOperator];

export const calcRPN = (rpn: NotationType): number => {
  const calc = rpn.reduce((stack: number[], item: number | string) => {
    if (typeof item === "number") {
      stack.push(item);
    } else {
      const operator: BinaryOperatorType = getOperator(item);

      const secondOperand: number = stack.pop() as number;
      const firstOperand: number = stack.pop() as number;

      const calcValue = operator(firstOperand, secondOperand);

      stack.push(calcValue);
    }

    return stack;
  }, []);

  return calc[0];
};
