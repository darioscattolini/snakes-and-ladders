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

    beforeEach(() => {
      token = game.getToken(1);
      player = token.player;

      while (token.position !== 97) {
        token.move(1);
      }
    });

    test('Player wins when token is moved exactly to square 100', () => {
      token.move(3);

      expect(token.position).toBe(100);
      expect(game.getWinner()).toBe(player);
    });

    test('Player does not win if token is moved to square after 100', () => {
      token.move(4);

      expect(game.getWinner()).toBe(-1);
    });

    test('Token returns to previous square if it moves after 100', () => {
      const previousPosition = token.position;
      token.move(4);

      expect(token.position).toBe(previousPosition);
    });
  });

  describe('Dice rolls', () => {
    test('Dice roll returns result included in 1-6', () => {
      const rolls: number[] = [];
      
      while (rolls.length < 100) {
        rolls.push(game.rollDice());
      }

      expect(rolls).toSatisfyAll(roll => roll >= 1 && roll <= 6);
    });
  });
});
