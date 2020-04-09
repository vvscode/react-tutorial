import { isNumber, isOperators } from "./helpers";
import { NotationType } from "./calcRPN";

const isBrackets = (str: string): boolean => ["(", ")"].indexOf(str) !== -1;

export const parser = (line: string): NotationType => {
  const stack: NotationType = [];
  let num = "";

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];

    if (isNumber(char)) {
      num += char;
    }

    if (isOperators(char) || isBrackets(char)) {
      if (num !== "") {
        debugger;
        stack.push(Number.parseInt(num));
        num = "";
      }

      if (
        char === "-" &&
        !isNumber(stack[stack.length - 1] as string) &&
        stack[stack.length - 1] !== ")"
      ) {
        num = "-";
      } else {
        num = "";
        stack.push(char);
      }
    }

    if (index === line.length - 1 && num !== "") {
      stack.push(Number.parseInt(num));
    }
  }

  return stack;
};

export const parseRPN = (line: string): NotationType => {
  const splitLine = line.split(" ");
  const rpn: NotationType = splitLine.map((char: string) => {
    return isOperators(char) ? char : Number.parseInt(char);
  });

  return rpn;
};
