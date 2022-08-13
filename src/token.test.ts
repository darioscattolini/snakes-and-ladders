import { Token } from "./token";

describe('Token movement across the board', () => {
  var token: Token;
  const player = 1;
  const initialPosition = 1;

  beforeEach(() => {
    token = new Token(player);
  });

  test('Token starts on square 1', () => {
    expect(token.position).toBe(initialPosition);
  });

  test('Token moves once the specified amount of spacs', () => {
    const spaces = 3;
    token.move(spaces);

    expect(token.position).toBe(initialPosition + spaces);
  });

  test('Token moves twice the specified amount of spaces', () => {
    const firstMovementSpaces = 3;
    const secondMovementSpaces = 4;
    
    token.move(firstMovementSpaces);
    token.move(secondMovementSpaces);

    expect(token.position)
      .toBe(initialPosition + firstMovementSpaces + secondMovementSpaces);
  });

  test('Token returns to previous square if it moves after 100', () => {
    while (token.position !== 97) {
      token.move(1);
    }
    
    const previousPosition = token.position;
    token.move(4);

    expect(token.position).toBe(previousPosition);
  });
});
