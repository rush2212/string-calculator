import { ExtractCustomDelimiters } from "../Utils/Common"
import { CreateDelimiterRegex } from "../Utils/Common"
import { ParseNumbers } from "../Utils/Common"
import { CalculateSum } from "../Utils/Common"

export function add(numbers: string): number {
    // Return 0 if the input is an empty string
    if (!numbers) return 0;

    // Define default delimiters (comma and newline)
    let delimiters = [",", "\n"];
    let customDelimiterMatch = numbers.match(/^\/\/(\[.*?\])+\n/);
    let negativeNumbers: number[] = [];

    // Check for custom delimiters in the format "//[delimiter]\n"
    if (customDelimiterMatch) {
        const delimiterPart = customDelimiterMatch[0];
        // Extract custom delimiters enclosed in square brackets (including multi-character ones)
        delimiters = ExtractCustomDelimiters(delimiterPart);
        numbers = numbers.slice(delimiterPart.length);
    }
    // Check for a single custom delimiter (e.g. "//;\n")
    else if (numbers.startsWith("//")) {
        const customDelimiter = numbers[2];
        delimiters = [customDelimiter];
        numbers = numbers.slice(4);
    }

    // Create a regular expression to split numbers based on the delimiters
    const delimiterRegex = CreateDelimiterRegex(delimiters);

    // Parse the numbers, filter out NaN values, and check for negatives
    const parsedNumbers = ParseNumbers(numbers, delimiterRegex, negativeNumbers);

    // Calculate the sum of the numbers (ignoring numbers greater than 1000)
    const sum = CalculateSum(parsedNumbers, negativeNumbers);

    // Throw an error if there are negative numbers
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return sum;
}

