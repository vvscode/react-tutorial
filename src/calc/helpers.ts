export const isNumber = (str: string): boolean => /\d+/.test(str);

export const isOperators = (str: string): boolean =>
  ["+", "-", "/", "*"].indexOf(str) !== -1;
