class Automove
{
    snake;
    food;
    interval;
    constructor(snake, food, directions)
    {
        this.snake = snake;
        this.food = food;
        this.directions = directions;
        this.addEvents();
    }
    setAutomoveInterval(action)
    {
        this.interval = setInterval(action, this.snake.speed);
    }
    clearAutomoveInterval()
    {
        clearInterval(this.interval);
    }
    automove(direction)
    {
        const newPosition = this.directions.getNewPosition(direction);
        if(this.checkColision(newPosition)) {
            this.endGame();
        } else {
            this.food.snakeFoundFood();
            this.snake.move(direction, newPosition);
        }
    }
    addEvents()
    {
        const codes = {
            'ArrowLeft': () =>  this.automove('left'),
            'ArrowUp': () => this.automove('up'),
            'ArrowRight': () => this.automove('right'),
            'ArrowDown': () => this.automove('down'),
        }
        document.body.addEventListener('keydown', (event) => {
            if (codes.hasOwnProperty(event.code)) {
                this.clearAutomoveInterval();
                this.setAutomoveInterval(codes[event.code]);
            }
        });
    }
    checkColision(newPosition)
    {
        const hasColideX = !(this.snake.posX > -10 && this.snake.posX < 500);
        const hasColideY = !(this.snake.posY > -10 && this.snake.posY < 500);
        const colideNewPosition = !(newPosition > -10 && newPosition < 500);
        return (hasColideX || hasColideY || colideNewPosition);
    }
    endGame()
    {
        this.clearAutomoveInterval();
        alert('Voce bateu na borda! Fim do jogo!');
        window.location.reload();
    }
}

export default Automove;