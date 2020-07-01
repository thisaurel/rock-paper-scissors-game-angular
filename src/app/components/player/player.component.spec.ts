import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('input').placeholder).toContain('Type your username');
    expect(compiled.querySelector('button')).toBeTruthy();
    expect(compiled.querySelector('button').textContent).toContain('I WANNA PLAY NOW !');
  });

  it('should have disable btn when input is empty', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeTruthy();
  });

  it('should have enable btn when input is not empty', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeTruthy();
    component.authForm.controls.username.setValue('Username Test');
    fixture.detectChanges();
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });
});
