import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PlayerComponent } from './components/player/player.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GameService } from './services/game.service';
import {GameComponent} from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
