import { add } from "../../CalculatorFunction/Add";

describe('add function tests', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the sum for comma separated values', () => {
    const result = add('1,2,3');
    expect(result).toBe(6);
  });

  test('should return the sum for newline separated values', () => {
    const result = add('1\n2\n3');
    expect(result).toBe(6);
  });

  test('should return the sum for multiple delimiters', () => {
    const result = add('1\n2,3');
    expect(result).toBe(6);
  });

  test('should return the sum for multiple custom delimiters of any length', () => {
    const result = add('//[***]\n1***2***3');
    expect(result).toBe(6);
  });

  test('should return the sum for multiple custom delimiters of different lengths', () => {
    const result = add('//[***][%%]\n1***2%%3');
    expect(result).toBe(6);
  });

  test('should ignore numbers greater than 1000', () => {
    const result = add('1001,2');
    expect(result).toBe(2);
  });

  test('should throw an error for Negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
  });

  test('should return 3', () => {
    const result = add('1,2,abc');
    expect(result).toBe(3);
  });

  test('should throw an error if Negative numbers are provided in custom delimiter format', () => {
    expect(() => add('//[***]\n1***-2***3')).toThrow('Negative numbers not allowed: -2');
  });

  test('should correctly handle multiple delimiters and numbers greater than 1000', () => {
    const result = add('//[***][%%]\n1001***2%%3');
    expect(result).toBe(5);
  });

  test('should return the correct sum for mixed custom delimiters and numbers', () => {
    const result = add('//[*][%]\n1*2%3');
    expect(result).toBe(6);
  });
  test('should handle unknown number of inputs', () => {
    const result = add('//[*][%]\n1*2%3*4%5');
    expect(result).toBe(15); 
  });
});
