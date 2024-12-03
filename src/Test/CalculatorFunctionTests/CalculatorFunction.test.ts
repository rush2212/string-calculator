import { add } from "../../CalculatorFunction/Add";

describe('add function tests', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the sum for comma separated values', () => {
    const result = add('1,2,3');
    expect(result).toBe(6);
  });
  
});
