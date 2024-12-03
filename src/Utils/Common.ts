// Extracts custom delimiters from the delimiter part of the string
export function ExtractCustomDelimiters(delimiterPart: string): string[] {
    return delimiterPart
        .match(/\[(.*?)\]/g)
        ?.map((delimiter) => delimiter.slice(1, -1)) || [];
}

// Creates a regular expression from the delimiters
export function CreateDelimiterRegex(delimiters: string[]): RegExp {
    const escapedDelimiters = delimiters.map(EscapeRegExp).join("|");
    return new RegExp(escapedDelimiters, "g");
}

// Parses numbers from the string, filters out NaN, and tracks negative numbers
export function ParseNumbers(
    numbers: string,
    delimiterRegex: RegExp,
    negativeNumbers: number[]
): number[] {
    return numbers
        .split(delimiterRegex)
        .map(Number)
        .filter((num) => {
            if (num < 0) negativeNumbers.push(num);
            return !isNaN(num);
        });
}

// Calculates the sum of numbers, ignoring values greater than 1000
export function CalculateSum(parsedNumbers: number[], negativeNumbers: number[]): number {
    return parsedNumbers.reduce((sum, num) => {
        if (num <= 1000) sum += num;
        return sum;
    }, 0);
}

// Escapes special characters for use in a regular expression
export function EscapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
