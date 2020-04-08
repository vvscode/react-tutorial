import { isOperators } from "./helpers";
import { NotationType } from "./calcRPN";
import { mathOperatorsPriorities } from "./mathOperators";

export const buildRPN = (infixNotation: NotationType): NotationType => {
  const output: (number | string)[] = [];
  const stack: string[] = [];

  for (let index = 0; index < infixNotation.length; index += 1) {
    const char: number | string = infixNotation[index];

    if (typeof char === "number") {
      output.push(char);
    }

    if (char === "(") {
      stack.push(char);
    }

    if (char === ")") {
      while (stack[stack.length - 1] !== "(") {
        output.push(stack.pop() as string);
      }

      stack.pop();
    }

    if (isOperators(char as string)) {
      while (
        mathOperatorsPriorities[stack[stack.length - 1]] >=
        mathOperatorsPriorities[char]
      ) {
        output.push(stack.pop() as string);
      }

      stack.push(char as string);
    }

    if (index === infixNotation.length - 1) {
      while (stack.length > 0) {
        output.push(stack.pop() as string);
      }
    }
  }

  return output;
};
