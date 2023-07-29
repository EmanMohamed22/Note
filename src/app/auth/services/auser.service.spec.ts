import { TestBed } from '@angular/core/testing';

import { AuserService } from './auser.service';

describe('AuserService', () => {
  let service: AuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
