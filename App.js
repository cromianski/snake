import Snake from './src/Snake.js';
import Food from './src/Food.js';
import Directions from './src/Directions.js';
import Automove from './src/Automove.js';
import Countdown from './src/Countdown.js';

const snake = new Snake();
const food = new Food(snake);
const directions = new Directions(snake);
const automove = new Automove(snake, food, directions);
const countdown = new Countdown(snake);
