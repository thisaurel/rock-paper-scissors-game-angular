import {Component, OnInit} from '@angular/core';
import {GameService} from './services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public gameService: GameService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  public logout(): void {
    this.gameService.logout();
    this.router.navigate(['/player']);
  }

}
