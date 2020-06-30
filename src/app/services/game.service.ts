import {EventEmitter, Injectable} from '@angular/core';
import { ItemsInterface } from '../interfaces/items.interface';
import {GameResultsInterface} from '../interfaces/game-results.interface';

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

  // tslint:disable-next-line:variable-name
  private _scoreBoard = new Array<GameResultsInterface>();

  constructor() { }

  public setPlayerName(name: string): void {
    if (typeof name === 'string') {
      this._connectedPlayer = name;
      this.onPlayerConnect.emit(this._connectedPlayer);
      if (this.connectedPlayer) {
        this._scoreBoard.push({
          playerName: name,
          victories: 0,
          defeats: 0,
          draws: 0
        });
      }
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

  public logout(): boolean {
    this.setPlayerName('');
    return (this.connectedPlayer === '');
  }

  public changeScoreBoard(player: string, type: boolean): void {
    const playerIndex = this.scoreBoard.findIndex((sc) => sc.playerName === player, 1);
    switch (type) {
      case true:
        this.scoreBoard[playerIndex].victories++;
        break;
      case false:
        this.scoreBoard[playerIndex].defeats++;
        break;
      default:
        this.scoreBoard[playerIndex].draws++;
        break;
    }
    this.scoreBoard[playerIndex].percentage =
      this.calcPercentage(this.scoreBoard[playerIndex].victories, this.scoreBoard[playerIndex].defeats, this.scoreBoard[playerIndex].draws);
    this.scoreBoard.sort(this.dynamicSort('percentage'));
  }

  private dynamicSort(property): (a, b) => number {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a, b) => {
      const result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }

  private calcPercentage(victories: number, defeats: number, draws: number): number {
    const sum = victories + defeats + draws;
    return (victories / sum) * 100;
  }

  get scoreBoard(): GameResultsInterface[] {
    return this._scoreBoard;
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

  get computerChoice(): ItemsInterface {
    return this._computerChoice;
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

}
