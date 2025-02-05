import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from "node:process"

class Game {
    constructor() {
        this.randomNum = Math.floor(Math.random() * 101)
        this.rl = readline.createInterface({
            input: input,
            output: output
        })
        this.attempts = 0
        this.isGameRunning = true
    }

    async makeGuess() {
        try {
            while (this.isGameRunning) {
                const guess = Number(await this.rl.question('Enter your guess (0-100): '))
                this.attempts ++

                if (guess === this.randomNum) {
                    console.log(`Congratulations! You got it in ${this.attempts} attempts!`)
                    this.isGameRunning = false
                } else if (guess < this.randomNum) {
                    console.log('Too low! Try again.')
                } else {
                    console.log('Too high! Try again.')
                }
            }
        } finally {
            this.rl.close()
        }
    }

    start() {
        console.log('Welcome to Guess the Number Game!')
        console.log('I think about a number between 0 and 100')
        this.makeGuess()
    }
}

const game = new Game()
game.start()