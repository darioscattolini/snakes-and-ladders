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
    beforeEach(() => {
      while (game.getTokenPosition(0) !== 97) {
        game.moveToken(0, 1);
      }
    });

    test('Player wins when token is moved exactly to square 100', () => {
      game.moveToken(0, 3);

      expect(game.getTokenPosition(0)).toBe(100);
      expect(game.getWinner()).toBe(0);
    });

    test('Player does not win if token is moved to square after 100', () => {
      game.moveToken(0, 4);

      expect(game.getWinner()).toBe(-1);
    });

    test('Token returns to previous square if it moves after 100', () => {
      const previousPosition = game.getTokenPosition(0);
      game.moveToken(0, 4);

      expect(game.getTokenPosition(0)).toBe(previousPosition);
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
