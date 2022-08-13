export class SnakeAndLadders {
  private tokens = [1];

  public getTokenPosition(player: number) {
    return this.tokens[player];
  }

  public getWinner() {
    return this.tokens.findIndex(position => position === 100);
  }

  public moveToken(player: number, spaces: number) {
    if (this.tokens[player] + spaces <= 100) this.tokens[player] += spaces;
  }
}
