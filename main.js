const { argv } = require('yargs')

class Player {
    constructor() {
        this._choices = ['rock', 'paper', 'scissors']
        this.currentChoice
    }

    startGame() {
        console.log('Playing a game of Roshambo against the computer.')
        return this
    }

    makeChoice(move) {
        move = move.toLowerCase()

        if (this._choices.includes(move)) {
            console.log(`Player plays ${move}!`)
            this.currentChoice = move
        } else {
            console.log('Invalid move')
        }
    }
}

class Computer {
    constructor(playerChoice) {
        this.playerChoice = playerChoice
        this._choices = ['rock', 'paper', 'scissors']
        this.currentChoice
    }

    showChoice() {
        let randomizer = Math.floor(Math.random() * Math.floor(3))
        let computerChoice = this._choices[randomizer]
        console.log(`Computer plays ${computerChoice}!`)
        this.currentChoice = computerChoice
    }
}

class Outcome {
    constructor(playerChoice, computerChoice) {
        this.playerChoice = playerChoice
        this.computerChoice = computerChoice
    }

    showResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            console.log('No winner this time!')
        } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            console.log('~Computer wins.~')
        } else {
            console.log('~You win!~')
        }
    }
}

// let move = argv.move
let player = new Player()
let computer = new Computer()
let outcome = new Outcome()

player.startGame().makeChoice(argv.move)
computer.showChoice()
outcome.showResult(player.currentChoice, computer.currentChoice)

