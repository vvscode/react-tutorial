type ParsedLineType = (number | string)[];

const isNumber = (str: string): boolean => /\d/.test(str);

const isOperators = (str: string): boolean =>
  ["+", "-", "/", "*"].indexOf(str) !== -1;

const isBrackets = (str: string): boolean => ["(", ")"].indexOf(str) !== -1;

export const parser = (line: string): ParsedLineType => {
  const stack: ParsedLineType = [];
  let num = "";

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];

    if (isNumber(char)) {
      num += char;
    }

    if (isOperators(char) || isBrackets(char)) {
      if (num !== "") {
        stack.push(Number.parseInt(num));
        num = "";
      }

      stack.push(char);
    }

    if (index === line.length - 1 && num !== "") {
      stack.push(Number.parseInt(num));
    }
  }

  return stack;
};
