import { TestBed } from '@angular/core/testing';

import { PreventLoggedInAccessService } from './prevent-logged-in-access.service';

describe('PreventLoggedInAccessService', () => {
  let service: PreventLoggedInAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PreventLoggedInAccessService ]
    });
    service = TestBed.inject(PreventLoggedInAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should block page access', () => {
    expect(service.canActivate()).toBeFalsy();
  });

});
