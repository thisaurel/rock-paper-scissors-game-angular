import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameComponent } from './game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GameService} from '@services/game.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService: GameService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    gameService = TestBed.inject(GameService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have play instructions', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p#instructions').textContent).toContain('To start playing, select rock, paper or scissors');
  });

  it('should have player block', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2#player-title').textContent).toContain('Player');
  });

  it('should have computer block', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2#computer-title').textContent).toContain('Computer');
  });

  it('should have scoreboard block', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2#scoreboard-title').textContent).toContain('Scoreboard');
  });
});
