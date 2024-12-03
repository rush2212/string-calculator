export function add(numbers: string): number {
  if (!numbers) return 0;

  // Split the numbers
  const parsedNumbers = numbers
    .split(",")
    .map(Number)
    .filter((num) => !isNaN(num));
  // Calculate sum
  const sum = parsedNumbers.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0);
  return sum;
}
