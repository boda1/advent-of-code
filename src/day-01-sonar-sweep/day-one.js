import { readInput } from '../utils/readInput.js'
import { URL, fileURLToPath } from 'url';

const inputPath = fileURLToPath(new URL('./input.txt', import.meta.url));
const data = await readInput(inputPath);

const depths = data.split('\n').map((line) => Number(line));


console.log(depths);
//console.log(depths);
//console.log("hello");