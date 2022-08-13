export class SnakeAndLadders {
  private tokens = [1];

  public getTokenPosition(player: number) {
    return this.tokens[player]
  }
}
