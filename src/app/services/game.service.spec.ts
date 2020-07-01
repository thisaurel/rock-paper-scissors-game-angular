import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a player', () => {
    service.setPlayerName('Test');
    expect(service.connectedPlayer != null).toBeTruthy();
  });

  it('the user logs out correctly', () => {
    service.setPlayerName('Test');
    expect(service.connectedPlayer != null).toBeTruthy();
    service.logout();
    expect(service.connectedPlayer === '').toBeTruthy();
  });

  it('win rate calculation is correct', () => {
    const winRate = service.calcPercentage(1, 1, 0);
    expect(winRate).toEqual(50);
  });

  it('service returns list of items', () => {
    const itemsList = service.items;
    expect(itemsList).toBeTruthy();
    expect(itemsList).toBeInstanceOf(Object);
  });

});
