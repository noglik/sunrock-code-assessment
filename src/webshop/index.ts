import categories from './categories.json';
import { getTotalForCategories } from './webshop';

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

const snakeToCapitalized = (s: string) =>
  s
    .split('_')
    .map((chunk, id) => (id === 0 ? capitalize(chunk) : chunk))
    .join(' ')
    .trim();

const result = getTotalForCategories(categories);

Object.keys(result).forEach((name) => {
  console.log(`${snakeToCapitalized(name)}: ${result[name]}`);
});
