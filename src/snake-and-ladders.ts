import { Token } from "./token";

export class SnakeAndLadders {
  private tokens = [new Token(1)];
  
  public get currentDiceRoll() {
    return this._currentDiceRoll;
  }
  private _currentDiceRoll: number | null = null;

  public getToken(player: number): Token {
    const token = this.tokens.find(token => token.player === player);
    
    if (!token) throw new Error("There is no player with number " + player);

    return token;
  }

  public getWinner(): number {
    const token = this.tokens.find(token => token.position === 100);

    return token ? token.player : -1;
  }

  public rollDice() {
    this._currentDiceRoll = Math.ceil(Math.random() * 6);
  }
}
