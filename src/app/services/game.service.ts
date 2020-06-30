import {EventEmitter, Injectable} from '@angular/core';
import { ItemsInterface } from '../interfaces/items.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // tslint:disable-next-line:variable-name
  private _connectedPlayer: string;
  private onPlayerConnect: EventEmitter<string> = new EventEmitter();

  // tslint:disable-next-line:variable-name
  private _playerChoice: ItemsInterface;
  // tslint:disable-next-line:variable-name
  private _computerChoice: ItemsInterface;

  constructor() {
    this.setPlayerName('Aurélien');
  }

  public setPlayerName(name: string): void {
    if (typeof name === 'string') {
      this._connectedPlayer = name;
      this.onPlayerConnect.emit(this._connectedPlayer);
    }
  }

  public callPlayerChoice(choice: ItemsInterface): void {
    choice.selected = true;
    this.setPlayerChoice(choice);
    this.callComputerChoice();
  }

  private callComputerChoice(): void {
    const computerPosChoice = Math.floor(Math.random() * 3);
    const computerChoice = this.items.filter((c) => c.id === computerPosChoice);
    if (computerChoice.length > 0) {
      computerChoice[0].selected = true;
      this.setComputerChoice(computerChoice[0]);
    } else {
      this.setComputerChoice(this.items[0]);
    }
  }

  public isPlayerWins(): boolean {
    console.group('Results');
    console.log(`Player: ${this.getPlayerChoice.name}`);
    console.log(`Computer: ${this.getComputerChoice.name}`);
    console.groupEnd();

    if (this.getPlayerChoice.drawWith === this.getComputerChoice.drawWith) {
      return this.draw();
    }

    if (this.getPlayerChoice.winAgainst === this.getComputerChoice.looseAgainst) {
      return this.loose();
    } else {
      return this.win();
    }
  }

  private draw(): boolean {
    return null;
  }

  private win(): boolean {
    return true;
  }

  private loose(): boolean {
    return false;
  }

  public logout(): boolean {
    this.setPlayerName('');
    return (this.connectedPlayer === '');
  }

  get items(): ItemsInterface[] {
    return [
      {
        id: 0,
        name: 'rock',
        img: 'assets/imgs/rock.png',
        selected: false,
        winAgainst: 2,
        looseAgainst: 1,
        drawWith: 0,
      },
      {
        id: 1,
        name: 'paper',
        img: 'assets/imgs/paper.png',
        selected: false,
        winAgainst: 0,
        looseAgainst: 2,
        drawWith: 1,
      },
      {
        id: 2,
        name: 'scissors',
        img: 'assets/imgs/scissors.png',
        selected: false,
        winAgainst: 1,
        looseAgainst: 0,
        drawWith: 2,
      },
    ];
  }

  get connectedPlayer(): string {
    return this._connectedPlayer;
  }

  get getPlayerChoice(): ItemsInterface {
    return this._playerChoice;
  }

  public setPlayerChoice(value: ItemsInterface) {
    this._playerChoice = value;
  }

  get getComputerChoice(): ItemsInterface {
    return this._computerChoice;
  }

  public setComputerChoice(value: ItemsInterface) {
    this._computerChoice = value;
  }

}
