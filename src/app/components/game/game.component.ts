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

  constructor(
    public gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  public makeChoice(item: ItemsInterface): void {
    this.visualChanges(item);
    this.gameService.callPlayerChoice(item);
    console.log(this.gameService.isPlayerWins());
  }

  public visualChanges(item: ItemsInterface): void {
    this.listOfChoices.forEach((e) => e.selected = false);
    console.log(item);
  }

}
