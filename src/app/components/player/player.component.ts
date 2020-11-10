import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '@services/game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(
    protected gameService: GameService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const username = this.authForm.value.username;
    this.gameService.setPlayerName(username);
    if (this.gameService.connectedPlayer) {
      this.router.navigate(['/game']);
    }
  }

}
