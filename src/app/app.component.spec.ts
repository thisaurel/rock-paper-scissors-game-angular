import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GameService } from '@services/game.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let gameService: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [ GameService ]
    }).compileComponents();
    gameService = TestBed.inject(GameService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    gameService = new GameService();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have toolbar title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1.title-selector').textContent).toContain('Rock Paper Scissors: The Game');
  });

  it('should have links in toolbar when user is not sign in', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a#player-link').textContent).toContain('Player access');
    expect(compiled.querySelector('a#game-link')).toBeFalsy();
    expect(compiled.querySelector('a#player-name-link')).toBeFalsy();
    expect(compiled.querySelector('mat-icon.logout')).toBeFalsy();
  });

});
