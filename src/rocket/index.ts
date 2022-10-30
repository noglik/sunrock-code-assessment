import { calculateTimeFromDistance } from './rocket';

// first param is distance
const distance = parseInt(process.argv[2], 10);

if (isNaN(distance)) {
  console.error('Please provide number as an argument');
  process.exit(1);
}

console.log(`Time: ${calculateTimeFromDistance(distance)}s.`);
