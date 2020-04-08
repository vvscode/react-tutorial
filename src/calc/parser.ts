import { isNumber, isOperators } from "./helpers";

export type InfixNotationType = (number | string)[];

const isBrackets = (str: string): boolean => ["(", ")"].indexOf(str) !== -1;

export const parser = (line: string): InfixNotationType => {
  const stack: InfixNotationType = [];
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
