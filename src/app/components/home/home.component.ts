import { Component, OnInit } from '@angular/core';
import { GameService } from '@services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

}
