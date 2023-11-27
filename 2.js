// Extract command-line arguments starting from index 2 (skipping 'node' and script path)
const args = process.argv.slice(2);

// Convert the string arguments to numbers and calculate their sum
const sum = args.reduce((acc, num) => acc + parseFloat(num), 0);

// Print the sum to the console
console.log(sum);
