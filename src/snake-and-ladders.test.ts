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

    test('Token moves once the specified amount of squares', () => {
      const squaresToMove = 3;
      game.moveToken(0, squaresToMove)

      expect(game.getTokenPosition(0)).toBe(1 + squaresToMove)
    });

    test('Token moves twice the specified amount of squares', () => {
      const firstMovementSpaces = 3;
      const secondMovementSpaces = 4;
      
      game.moveToken(0, firstMovementSpaces)
      game.moveToken(0, secondMovementSpaces)

      expect(game.getTokenPosition(0))
        .toBe(1 + firstMovementSpaces + secondMovementSpaces)
    });
  });
});
