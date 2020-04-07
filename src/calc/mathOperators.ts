export type BinaryOperatorType = (
  firstOperand: number,
  secondOperand: number
) => number;

export const add: BinaryOperatorType = (
  firstOperand: number,
  secondOperand: number
): number => firstOperand + secondOperand;

export const sub: BinaryOperatorType = (
  firstOperand: number,
  secondOperand: number
): number => firstOperand - secondOperand;

export const div: BinaryOperatorType = (
  firstOperand: number,
  secondOperand: number
): number => (secondOperand === 0 ? 0 : firstOperand / secondOperand);

export const mul: BinaryOperatorType = (
  firstOperand: number,
  secondOperand: number
): number => firstOperand * secondOperand;

export const mathOperators: { [key: string]: BinaryOperatorType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": sub,
};
