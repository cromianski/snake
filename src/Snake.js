class Snake
{
    snake;
    posX = 0;
    posY = 0;
    step = 10;
    score = 0;
    speed = 200;
    scoreDOM;
    speedDOM;
    constructor()
    {
        this.build();
        this.append();
        this.setScoreboardDOM();
    }
    setScoreboardDOM()
    {
        this.scoreDOM = document.getElementById('score');
        this.scoreDOM.textContent = this.score;
        this.speedDOM = document.getElementById('speed');
        this.speedDOM.textContent = this.speed;
    }
    build()
    {
        this.snake = document.createElement('div');
        this.snake.classList.add('snake');
    }
    append()
    {
        const app = document.getElementById('app');
        app.appendChild(this.snake);
    }
    move(direction, position)
    {
        const actions = {
            'left': () => this.posX = position,
            'up': () => this.posY = position,
            'right': () => this.posX = position,
            'down': () => this.posY = position,
        }
        actions[direction]();
        this.snake.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
    }
    eat()
    {
        this.score += 1;
        if (this.speed > 50) {
            this.speed -= this.score * 2;
        } else {
            this.speed = 20;
        }
        this.scoreDOM.textContent = this.score;
        this.speedDOM.textContent = this.speed;
    }
}

export default Snake;