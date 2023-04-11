class Directions
{
    snake;
    constructor(snake) {
        this.snake = snake;
    }
    getNewPosition(direction)
    {
        return {
            'left': this.left(),
            'right': this.right(),
            'up': this.up(),
            'down': this.down(),
        }[direction];
    }
    left()
    {
        return this.snake.posX - this.snake.step;
    }
    right()
    {
        return this.snake.posX + this.snake.step
    }
    down()
    {
        return this.snake.posY + this.snake.step
    }
    up()
    {
        return this.snake.posY - this.snake.step
    }
}

export default Directions;