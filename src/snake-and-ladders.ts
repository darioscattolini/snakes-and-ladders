export class SnakeAndLadders {
  private tokens = [1];

  public getTokenPosition(player: number) {
    return this.tokens[player];
  }

  public moveToken(player: number, spaces: number) {
    this.tokens[player] += spaces;
  }
}
