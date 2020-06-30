import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { GameComponent } from './components/game/game.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
