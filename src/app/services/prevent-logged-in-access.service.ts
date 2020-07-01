import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GameService } from './game.service';

@Injectable()
export class PreventLoggedInAccessService implements CanActivate {

  constructor(private gameService: GameService) {}

  canActivate() {
    return this.gameService.connectedPlayer != null;
  }
}
