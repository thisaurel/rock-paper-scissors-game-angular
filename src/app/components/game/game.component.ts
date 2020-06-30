import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {ItemsInterface} from '../../interfaces/items.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    protected gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  public makeChoice(item: ItemsInterface): void {
    this.gameService.callPlayerChoice(item);
    console.log(this.gameService.isPlayerWins());
  }

}
