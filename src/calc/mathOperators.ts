export type BinaryOperatorType = (
  firstOperand: number,
  secondOperand: number
) => number;

export const add: BinaryOperatorType = (firstOperand, secondOperand) =>
  firstOperand + secondOperand;

export const sub: BinaryOperatorType = (firstOperand, secondOperand) =>
  firstOperand - secondOperand;

export const div: BinaryOperatorType = (firstOperand, secondOperand) =>
  secondOperand === 0 ? 0 : firstOperand / secondOperand;

export const mul: BinaryOperatorType = (firstOperand, secondOperand) =>
  firstOperand * secondOperand;

export const mathOperators: { [key: string]: BinaryOperatorType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": sub,
};

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": 2,
  "/": 2,
  "+": 1,
  "-": 1,
};
