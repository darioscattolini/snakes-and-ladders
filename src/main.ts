import { SnakesAndLadders } from "./snakes-and-ladders/snakes-and-ladders";
import inquirer from 'inquirer';

const game = new SnakesAndLadders();

function askPlayer(message: String) {
  inquirer.prompt([{
    name: 'diceRolled',
    type: 'confirm',
    message: message 
  }]).then(answers => {
    if (answers['diceRolled'] == true) {
      game.rollDice();
      const dice = game.currentDiceRoll;
      const token = game.getToken(1);

      game.moveTokenOf(1);
      
      const message = `Dice was ${dice} and you moved to square ${token.position}.`;

      if (game.getWinner() === -1) {
        askPlayer(`${message} Roll dice again?`);
      } else {
        console.log('You reached square 100, you have won!')
      }
    }
  })
}

askPlayer('Roll dice?');
