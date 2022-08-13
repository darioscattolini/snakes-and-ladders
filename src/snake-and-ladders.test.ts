import { SnakeAndLadders } from './snake-and-ladders';

describe('Snake and Ladders', () => {
  var game: SnakeAndLadders;
  
  beforeEach(() => {
     game = new SnakeAndLadders() 
  });
  
  describe('Token movement across the board', () => {
    test('Token starts on square 1', () => {
      expect(game.getTokenPosition(0)).toBe(1)
    });
  });
});
