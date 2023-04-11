class Food
{
    food;
    snake;
    posX;
    posY;
    constructor(snake) {
        this.snake = snake;
        this.build();
        this.setPosition();
        this.append();
    }
    build()
    {
        this.food = document.createElement('div');
        this.food.id = 'food';
    }
    append()
    {
        const app = document.getElementById('app');
        app.appendChild(this.food);
    }
    setPosition()
    {
        this.posX = this.getRandPosition('x');
        this.posY = this.getRandPosition('y');
        this.food.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }
    generateNumber()
    {
        return Math.floor(Math.random() * 50) * 10;
    }
    getRandPosition(axis)
    {
        let position =  this.generateNumber();
        while (this.checkPosIsOccupied(position, axis)) {
            position =  this.generateNumber();
        }
        return position;
    }
    checkPosIsOccupied(position, axis)
    {
        return {
            'x': () => position === this.snake.posX,
            'y': () => position === this.snake.posY,
        }[axis]();
    }
    snakeFoundFood()
    {
        if (this.snake.posX === this.posX && this.snake.posY === this.posY)
        {
            this.snake.eat();
            this.setPosition();
        }
    }
}

export default Food;