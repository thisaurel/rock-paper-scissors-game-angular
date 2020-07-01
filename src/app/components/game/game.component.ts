import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {ItemsInterface} from '../../interfaces/items.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('growTextAnimation', [
      state(
        'initial',
        style({
          display: 'none',
        })
      ),
      state(
        'final',
        style({
          display: 'block',
        })
      ),
      transition('initial=>final', animate('0ms ease-in-out')),
      transition('final=>initial', animate('0ms ease-in-out')),
    ]),
  ],
})
export class GameComponent implements OnInit {

  public listOfChoices = this.gameService.items;

  public winner = '';

  public score = [0, 0];

  constructor(
    public gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  public makeChoice(item: ItemsInterface): void {
    if (this.winner !== '') { return; }
    this.visualChanges();
    this.gameService.callPlayerChoice(item);
    console.log(this.gameService.isPlayerWins());
    switch (this.gameService.isPlayerWins()) {
      case true:
        this.winner = 'You win ! 👏👏';
        this.gameService.changeScoreBoard(this.gameService.connectedPlayer, true);
        this.score[0]++;
        break;
      case false:
        this.winner = 'HAHAHA YOU LOOSE ! 🙊🙊';
        this.gameService.changeScoreBoard(this.gameService.connectedPlayer, false);
        this.score[1]++;
        break;
      default:
        this.winner = 'Oh, okay. It\'s a draw. 💢💢';
        this.gameService.changeScoreBoard(this.gameService.connectedPlayer, null);
        break;
    }
    this.endAnimation();
  }

  public visualChanges(): void {
    this.listOfChoices.forEach((e) => e.selected = false);
  }

  public endAnimation(): void {
    setTimeout(() => {
      this.winner = '';
      this.visualChanges();
    }, 1200);
  }

}
