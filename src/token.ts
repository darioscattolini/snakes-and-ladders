export class Token {
  constructor(public readonly player: number) {}

  public get position() {
    return this._position;
  }
  private _position = 1;
  
  public move(spaces: number) {
    if (this.position + spaces <= 100) this._position += spaces;
  }
}
