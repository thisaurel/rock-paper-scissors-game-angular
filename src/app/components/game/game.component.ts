import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {ItemsInterface} from '../../interfaces/items.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public listOfChoices = this.gameService.items;

  public winner = 'Please make your choice';

  constructor(
    public gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  public makeChoice(item: ItemsInterface): void {
    this.visualChanges(item);
    this.gameService.callPlayerChoice(item);
    console.log(this.gameService.isPlayerWins());
    switch (this.gameService.isPlayerWins()) {
      case true:
        this.winner = 'You won. Congrats. *Execute order 66*';
        this.gameService.changeScoreBoard(this.gameService.connectedPlayer, 'win');
        break;
      case false:
        this.winner = 'HAHAHA YOU NOOB !!! I WIIIIN';
        this.gameService.changeScoreBoard(this.gameService.connectedPlayer, 'loose');
        break;
      default:
        this.winner = 'Oh, okay. It\'s a draw. C\'mon we both won, right ?';
        this.gameService.changeScoreBoard(this.gameService.connectedPlayer, 'draw');
        break;
    }
  }

  public visualChanges(item: ItemsInterface): void {
    this.listOfChoices.forEach((e) => e.selected = false);
    console.log(item);
  }

}
