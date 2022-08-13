import { SnakeAndLadders } from './snake-and-ladders';
import { Token } from './token';

describe('Snake and Ladders', () => {
  var game: SnakeAndLadders;
  
  beforeEach(() => {
     game = new SnakeAndLadders();
  });

  describe('Winning game', () => {
    var token: Token;
    var player: number;
    const startingPosition = 97;
    const winningPosition = 100;

    beforeEach(() => {
      token = game.getToken(1);
      player = token.player;

      while (token.position !== startingPosition) {
        token.move(1);
      }
    });

    test('Player wins when token is moved exactly to square 100', () => {
      token.move(winningPosition - startingPosition);

      expect(token.position).toBe(winningPosition);
      expect(game.getWinner()).toBe(player);
    });

    test('Player does not win if token is moved to square after 100', () => {
      token.move(winningPosition - startingPosition + 1);

      expect(game.getWinner()).toBe(-1);
    });
  });

  describe('Dice rolls', () => {
    test('Dice roll returns result included in 1-6', () => {
      const rolls: number[] = [];
      
      while (rolls.length < 100) {
        game.rollDice();
        if (game.currentDiceRoll) rolls.push(game.currentDiceRoll);
      }

      expect(rolls).toSatisfyAll(roll => roll >= 1 && roll <= 6);
    });

    test('Player movement is determined by dice roll', () => {
      const player = 1;

      game.rollDice();
      const diceRoll = game.currentDiceRoll;
      const initialPosition = game.getToken(player).position;

      game.moveTokenOf(player);
      const finalPosition = game.getToken(player).position;

      expect(finalPosition - initialPosition).toBe(diceRoll);
    });
  });
});
