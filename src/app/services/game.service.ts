import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // tslint:disable-next-line:variable-name
  private _connectedPlayer: string;
  private onPlayerConnect: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public setPlayerName(name: string): void {
    if (typeof name === 'string') {
      this._connectedPlayer = name;
      this.onPlayerConnect.emit(this._connectedPlayer);
    }
  }

  public logout(): boolean {
    this.setPlayerName('');
    return (this.connectedPlayer === '');
  }

  get connectedPlayer(): string {
    return this._connectedPlayer;
  }

}
