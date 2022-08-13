import { SnakeAndLadders } from './snake-and-ladders';

describe('Snake and Ladders', () => {
  var game: SnakeAndLadders;
  
  beforeEach(() => {
     game = new SnakeAndLadders();
  });
  
  describe('Token movement across the board', () => {
    test('Token starts on square 1', () => {
      expect(game.getTokenPosition(0)).toBe(1);
    });

    test('Token moves once the specified amount of spacs', () => {
      const spaces = 3;
      game.moveToken(0, spaces);

      expect(game.getTokenPosition(0)).toBe(1 + spaces);
    });

    test('Token moves twice the specified amount of spaces', () => {
      const firstMovementSpaces = 3;
      const secondMovementSpaces = 4;
      
      game.moveToken(0, firstMovementSpaces);
      game.moveToken(0, secondMovementSpaces);

      expect(game.getTokenPosition(0))
        .toBe(1 + firstMovementSpaces + secondMovementSpaces);
    });
  });

  describe('Winning game', () => {
    test('Player wins when token is moved exactly to square 100', () => {
      while (game.getTokenPosition(0) !== 97) {
        game.moveToken(0, 1);
      }

      game.moveToken(0, 3);

      expect(game.getTokenPosition(0)).toBe(100);
      expect(game.getWinner()).toBe(0);
    });
  });
});
