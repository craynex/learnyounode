/**
 * Autor: Cristian Martin
 */

const args = process.argv.slice(2);

const sum = args.reduce((acc, num) => acc + parseFloat(num), 0);

console.log(sum);
